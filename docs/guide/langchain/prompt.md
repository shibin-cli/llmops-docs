# Prompt
大多数 LLM 应用程序都不会直接将用户输入传递给 LLM ， 通常它们会将用户输入添加到一个更大的文本片段中，称为**提示模板**

![alt](./../../asstes/img/langchain/flow.jpg)

## 基础用法
```py
from langchain_core.prompts import PromptTemplate

prompt_template = PromptTemplate.from_template("将一个关于{topic}的笑话")

prompt_template.invoke({"topic": "程序员"})
# text='将一个关于程序员的笑话'
```