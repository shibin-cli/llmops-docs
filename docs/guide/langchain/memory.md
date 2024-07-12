# Memory
## 缓冲记忆组件的类型
* `ConversationBufferMemory` 缓冲记忆，最简单，最数据结构和提取算法不做任何处理，将所有对话信息全部存储作为记忆。
* `ConversationBufferWindowMemory` 缓冲窗口记忆，通过设定 k 值，只保留一定数量（2*k）的对话信息作为历史。
* `ConversationTokenBufferMemory` 令牌缓冲记忆，通过设置最大标记数量（max_token_limits）来决定何时清除交互信息，当对话信息超过 max_token_limits时，抛弃旧对话信息。
* `ConversationStringBufferMemory` 字符串缓冲记忆（早期 LangChain 封装的记忆组件），等同于 缓冲记忆，固定返回字符串。
## 缓冲窗口记忆
```py
from operator import itemgetter

import dotenv
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_openai import ChatOpenAI
from langchain.memory import ConversationBufferWindowMemory
from langchain_core.runnables import RunnablePassthrough, RunnableLambda

dotenv.load_dotenv()

model = ChatOpenAI(model="gpt-3.5-turbo-16k")

prompt = ChatPromptTemplate.from_messages(
    [("system", '我是 openAI 开发的聊天机器人，请根据用户的输入进行回复'), MessagesPlaceholder("history"),
     ('human', "{word}")])
memory = ConversationBufferWindowMemory(k=2, return_messages=True, input_key="word")

chain = RunnablePassthrough.assign(history=RunnableLambda(memory.load_memory_variables) | (lambda x: x.get('history')),
                                   ) | prompt | model | StrOutputParser()
while True:
    word = input("请输入：")
    if word == "q":
        break
    chain_input = {
        "word": word,
    }
    res = chain.stream(chain_input)
    output = ""
    for chunk in res:
        output += chunk
        print(chunk, flush=True, end="")
    memory.save_context(chain_input, {
        "output": output
    })
    print("")
    print("history: ", memory.load_memory_variables({}))
```
