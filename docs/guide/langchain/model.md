# Model
## Model 组件的组成
Langchain 本身不提供自己的 LLM，而是提供一个标准接口。分为两种类型的模型
* **LLM** 使用纯文本输入和输出的大语言模型
* **Chat Model** 使用聊天列表作为输入

## 调用大语言模型常用的方法
1. invoke 传递对应的文本消息提示
2. batch 批量版本，可以一次性生成多个内容
3. stream invoke 的流式版本
## Message 组件
* SystemMessage
* HumanMessage
* AIMessage
* FunctionMessage
* ToolMessage
 