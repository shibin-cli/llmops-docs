import{_ as e,c as a,o as l,a1 as o}from"./chunks/framework.jky4UErf.js";const g=JSON.parse('{"title":"Model","description":"","frontmatter":{},"headers":[],"relativePath":"guide/langchain/model.md","filePath":"guide/langchain/model.md"}'),i={name:"guide/langchain/model.md"},t=o('<h1 id="model" tabindex="-1">Model <a class="header-anchor" href="#model" aria-label="Permalink to &quot;Model&quot;">​</a></h1><h2 id="model-组件的组成" tabindex="-1">Model 组件的组成 <a class="header-anchor" href="#model-组件的组成" aria-label="Permalink to &quot;Model 组件的组成&quot;">​</a></h2><p>Langchain 本身不提供自己的 LLM，而是提供一个标准接口。分为两种类型的模型</p><ul><li><strong>LLM</strong> 使用纯文本输入和输出的大语言模型</li><li><strong>Chat Model</strong> 使用聊天列表作为输入</li></ul><h2 id="调用大语言模型常用的方法" tabindex="-1">调用大语言模型常用的方法 <a class="header-anchor" href="#调用大语言模型常用的方法" aria-label="Permalink to &quot;调用大语言模型常用的方法&quot;">​</a></h2><ol><li>invoke 传递对应的文本消息提示</li><li>batch 批量版本，可以一次性生成多个内容</li><li>stream invoke 的流式版本</li></ol><h2 id="message-组件" tabindex="-1">Message 组件 <a class="header-anchor" href="#message-组件" aria-label="Permalink to &quot;Message 组件&quot;">​</a></h2><ul><li>SystemMessage</li><li>HumanMessage</li><li>AIMessage</li><li>FunctionMessage</li><li>ToolMessage</li></ul>',8),s=[t];function n(r,d,c,h,_,m){return l(),a("div",null,s)}const M=e(i,[["render",n]]);export{g as __pageData,M as default};
