# OutputParser
## 为什么需要输出解析器
在使用大语言模型时，会遇到大语言模型的输出解析问题
``` py
from langchain_openai import ChatOpenAI
import dotenv

dotenv.load_dotenv()
model = ChatOpenAI()

res = model.invoke("1+1等于几")
print(res.content) 
# 1 + 1 等于 2。
```
某些场合下我们需要的仅仅是对应的返回值，而不是多余的内容，就需要对返回的内容进行进一步的解析

尽可能先让大语言模型按照特定的规则输出内容，然后再进行解析, 例如
```py
res = model.invoke("1+1等于几?只告诉我结果")
# 2
```
输出解析器 = 预设提示 + 解析功能

## OutputParser 输出解析器
在 langchain 中，输出解析器通常包含两个抽象函数的实现
* `get_format_instructions` 用来约定输出的格式，并转化为文本描述
* `parse` 用来解析 llm 输出为约定的格式

```py
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from langchain_core.output_parsers import JsonOutputParser, StrOutputParser
from langchain_core.pydantic_v1 import BaseModel, Field
import dotenv

dotenv.load_dotenv()
model = ChatOpenAI()

class ResponseParser(BaseModel):
    question: str = Field(description="问题")
    answer: str = Field(description="答案")

parser = JsonOutputParser(pydantic_object=ResponseParser)
prompt = ChatPromptTemplate.from_template("1+1等于几?{instruction}")
instruction = parser.get_format_instructions()
# The output should be formatted as a JSON instance that conforms to the JSON schema below.
# 
# As an example, for the schema {"properties": {"foo": {"title": "Foo", "description": "a list of strings", "type": "array", "items": {"type": "string"}}}, "required": ["foo"]}
# the object {"foo": ["bar", "baz"]} is a well-formatted instance of the schema. The object {"properties": {"foo": ["bar", "baz"]}} is not well-formatted.
# 
# Here is the output schema:
# ```
# {"properties": {"question": {"title": "Question", "description": "\u95ee\u9898", "type": "string"}, "answer": {"title": "Answer", "description": "\u7b54\u6848", "type": "string"}}, "required": ["question", "answer"]}
# ```

res = model.invoke(prompt.invoke({
    "instruction": instruction
}))
print(parser.invoke(res))
# {'question': '1+1等于几？', 'answer': '2'}
```