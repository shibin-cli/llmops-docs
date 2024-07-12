---
outline: deep
---
# Runnable
使用多个组件的 invoke 进行嵌套来创建 LLM 应用
```py
prompt = ChatPromptTemplate.from_template("{query}")
model = ChatOpenAI(model="gpt-3.5-turbo-16k")
parser = StrOutputParser()

# 获取输出内容
content = parser.invoke(
    model.invoke(
        prompt.invoke(
            {"query": req.query.data}
        )
    )
)
```
这种写法虽然能实现对应的功能，但是存在很多缺陷
* 嵌套式写法让程序的维护性与可阅读性大大降低，当需要修改某个组件时，变得异常困难。
* 没法得知每一步的具体结果与执行进度，出错时难以排查。
* 嵌套式写法没法集成大量的组件，组件越来越多时，代码会变成“一次性”代码。

## 手写一个 chain
上面的代码中，每一个组件都有一个共同的方法 invoke
```py
class Chain:
    steps: list = []

    def __init__(self, steps: list):
        self.steps = steps

    def invoke(self, input: Any) -> Any:
        output: Any = input
        for step in self.steps:
            output = step.invoke(output)

        return output
chain = Chain([prompt, llm, parser])
print(chain.invoke({"query": "你好，你是?"}))
```

## SCEL 表达式
为了尽可能简化创建自定义链，LangChain 官方实现了一个 Runnable 协议，这个协议适用于 LangChain 中的绝大部分组件，并实现了大量的标准接口，涵盖：

* `stream`：将组件的响应块流式返回，如果组件不支持流式则会直接输出。
* `invoke`：调用组件并得到对应的结果。
* `batch`：批量调用组件并得到对应的结果。
* `astream`：stream 的异步版本。
* `ainvoke`：invoke 的异步版本。
* `abatch`：batch 的异步版本。
* `astream_log`：除了流式返回最终响应块之外，还会流式返回中间步骤。

除此之外，在 Runnable 中还重写了 `__or__` 和 `__ror__` 方法，这是 Python 中 `|` 运算符的计算逻辑，所有的 Runnable 组件，均可以通过 `|` 或者 `pipe()` 的方式将多个组件拼接起来形成一条链。
```py
import dotenv
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from langchain_core.output_parsers import StrOutputParser

dotenv.load_dotenv()
model = ChatOpenAI(model="gpt-3.5-turbo-16k")

prompt = ChatPromptTemplate.from_template("{query}")
parser = StrOutputParser()
chain = prompt | model | parser
print(chain.invoke({
    "query": "1+1等于几"
}))
```
## RunnableParallel
RunnableParallel 是 LangChain 中封装的支持运行多个 Runnable 的

### 并行运行
```py
import dotenv
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnableParallel
from langchain_openai import ChatOpenAI

dotenv.load_dotenv()

# 1.编排2个提示模板
joke_prompt = ChatPromptTemplate.from_template("请讲一个关于{subject}的冷笑话，尽可能短")
poem_prompt = ChatPromptTemplate.from_template("请写一篇关于{subject}的诗，尽可能短")

# 2.创建大语言模型
llm = ChatOpenAI(model="gpt-3.5-turbo-16k")

# 3.创建输出解析器
parser = StrOutputParser()

# 4.构建两条链
joke_chain = joke_prompt | llm | parser
poem_chain = poem_prompt | llm | parser

# 5.使用RunnableParallel创建并行可运行
map_chain = RunnableParallel(joke=joke_chain, poem=poem_chain)

# 6.运行并行可运行组件得到响应结果
res = map_chain.invoke({"subject": "程序员"})

print(resp)
```
### 操作 Runnable 的输出
除了并行执行，RunnableParallel 还可以用于操作 Runnable 的输出，用于产生符合下一个 Runnable 组件的数据。

```py
import dotenv
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnableParallel
from langchain_openai import ChatOpenAI
from langchain_core.output_parsers import StrOutputParser
from operator import itemgetter

dotenv.load_dotenv()
model = ChatOpenAI(model="gpt-3.5-turbo-16k")

parser = StrOutputParser()

prompt = ChatPromptTemplate.from_template("""请根据用户的输入进行回答，可以参考上下文进行回复
<context>
{context}
</context>

# 用户的问题是：{query}
# """)


def retrieval(query: str) -> str:
    print("query:", query)
    return "我是周杰伦"
chain = RunnableParallel({
    "context":lambda x: retrieval(x["query"]),
    "query":lambda x: x["query"]
})| prompt | model | parser
# chain = RunnableParallel(context=lambda x: retrieval(x["query"]), query=lambda x: x["query"]) | prompt | model | parser
# chain = RunnableParallel(context=lambda x: retrieval(x["query"]), query=itemgetter("query")) | prompt | model | parser
# chain = {
#             "context": lambda x: retrieval(x["query"]),
#             "query": itemgetter("query")
#         } | prompt | model | parser

print(chain.invoke({
    "query": "你好，我是谁？",
}))

```
## RunnablePassthrough 传递数据
`RunnablePassthrough` 可以获取上游的数据，并保持不变或者新增额外的键。

使用 `RunnablePassthrough` 来简化 invoke 的调用流程
```py
import dotenv
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_openai import ChatOpenAI
from langchain_core.output_parsers import StrOutputParser
from operator import itemgetter

dotenv.load_dotenv()
model = ChatOpenAI(model="gpt-3.5-turbo-16k")

parser = StrOutputParser()
prompt = ChatPromptTemplate.from_template("""请根据用户的输入进行回答，可以参考上下文进行回复
<context>
{context}
</context>

# 用户的问题是：{query}
# """)


def retrieval(query: str) -> str:
    print("query:", query)
    return "我是周杰伦"


chain = {
            "context": retrieval,
            "query": RunnablePassthrough()  # itemgetter("query")
        } | prompt | model | parser
print(chain.invoke("你好，我是谁"))
```
如果想在传递的数据中添加数据，还可以使用 `RunnablePassthrough.assign()` 方法来实现快速添加。
```py
chain = RunnablePassthrough.assign(context=lambda x: retrieval(x["query"])) | prompt | model | parser
print(chain.invoke({
    "query": "你好，我是谁？"
}))
```
