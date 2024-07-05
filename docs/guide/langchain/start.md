---
outline: deep
---
# LangChain

[Langchain](https://www.langchain.com) 是一个由大型语言模型 (LLM) 驱动的应用程序开发框架


[Langchain](https://www.langchain.com) 提供了 Python 和 JavaScript 两个版本
* [LangChain-Python](https://python.langchain.com/v0.2/docs/introduction)
* [LangChain-JavaScript](https://js.langchain.com/v0.2/docs/introduction)

安装 LangChain 
::: code-group

```bash [Python]
pip install langchain
```
```bash [Typescript]
npm i langchain
```
:::
## LangChain 组成
LangChain 框架本身由多个开源库组成

![LangChain](https://python.langchain.com/v0.2/assets/images/ecosystem_packages-32943b32657e7a187770c9b585f22a64.png)
### LangChain
构建应用程序认知架构的链、代理和检索策略

### LangChain core
安装 LangChain 会自动安装 `langchain-core` 。它包含抽象基类 和 LangChain 表达式语言

 `langchain-core` 也可以单独安装
::: code-group
```bash [Python]
pip install langchain-core
```
```bash [Typescript]
npm i @langchain/core
```
:::
### LangChain community
LangChain community 提供第三方集成。一些集成已经进一步拆分为自己的轻量级包，只依赖于 `langchain-core`
::: code-group
```bash [Python]
pip install langchain-community
```
```bash [Typescript]
npm i @langchain/community
```
:::

### LangGraph
通过将步骤构建为图中的边和节点，使用 LLMs 构建健壮且有状态的多参与者应用程序。

::: code-group
```bash [Python]
pip install langgraph

```
```bash [Typescript]
npm i @langchain/langgraph
```
:::
### LangServe
将 LangChain 链部署为 REST API

```bash
pip install "langserve[all]"
```

### LangSmith
[LangSmith](https://docs.smith.langchain.com) 一个开发平台，可以让你调试、测试、评估和监控 LLM 应用程序，并与 LangChain 无缝衔接。
::: code-group
```bash [Python]
pip install langsmith

```
```bash [Tyscript]
npm i langsmith
```
:::
## LangChain 的六大核心组件
* Model 模型
* Prompts 提示
* Indexes 索引
* Memory 记忆
* Chains 链
* Agents 代理
