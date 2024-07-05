import{_ as a,c as i,o as s,a1 as e}from"./chunks/framework.C46D9NsM.js";const b=JSON.parse('{"title":"LangChain","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/langchain/start.md","filePath":"guide/langchain/start.md"}'),n={name:"guide/langchain/start.md"},t=e('<h1 id="langchain" tabindex="-1">LangChain <a class="header-anchor" href="#langchain" aria-label="Permalink to &quot;LangChain&quot;">​</a></h1><p><a href="https://www.langchain.com" target="_blank" rel="noreferrer">Langchain</a> 是一个由大型语言模型 (LLM) 驱动的应用程序开发框架</p><p><a href="https://www.langchain.com" target="_blank" rel="noreferrer">Langchain</a> 提供了 Python 和 JavaScript 两个版本</p><ul><li><a href="https://python.langchain.com/v0.2/docs/introduction" target="_blank" rel="noreferrer">LangChain-Python</a></li><li><a href="https://js.langchain.com/v0.2/docs/introduction" target="_blank" rel="noreferrer">LangChain-JavaScript</a></li></ul><p>安装 LangChain</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-qvEDj" id="tab-q_rsrkI" checked><label for="tab-q_rsrkI">Python</label><input type="radio" name="group-qvEDj" id="tab-6nYiJxI"><label for="tab-6nYiJxI">Typescript</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> langchain</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> langchain</span></span></code></pre></div></div></div><h2 id="langchain-组成" tabindex="-1">LangChain 组成 <a class="header-anchor" href="#langchain-组成" aria-label="Permalink to &quot;LangChain 组成&quot;">​</a></h2><p>LangChain 框架本身由多个开源库组成</p><p><img src="https://python.langchain.com/v0.2/assets/images/ecosystem_packages-32943b32657e7a187770c9b585f22a64.png" alt="LangChain"></p><h3 id="langchain-1" tabindex="-1">LangChain <a class="header-anchor" href="#langchain-1" aria-label="Permalink to &quot;LangChain&quot;">​</a></h3><p>构建应用程序认知架构的链、代理和检索策略</p><h3 id="langchain-core" tabindex="-1">LangChain core <a class="header-anchor" href="#langchain-core" aria-label="Permalink to &quot;LangChain core&quot;">​</a></h3><p>安装 LangChain 会自动安装 <code>langchain-core</code> 。它包含抽象基类 和 LangChain 表达式语言</p><p><code>langchain-core</code> 也可以单独安装</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-rUaE7" id="tab-a_eUbNs" checked><label for="tab-a_eUbNs">Python</label><input type="radio" name="group-rUaE7" id="tab-yHhxE13"><label for="tab-yHhxE13">Typescript</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> langchain-core</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @langchain/core</span></span></code></pre></div></div></div><h3 id="langchain-community" tabindex="-1">LangChain community <a class="header-anchor" href="#langchain-community" aria-label="Permalink to &quot;LangChain community&quot;">​</a></h3><p>LangChain community 提供第三方集成。一些集成已经进一步拆分为自己的轻量级包，只依赖于 <code>langchain-core</code></p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-bvGKn" id="tab-jyzm--8" checked><label for="tab-jyzm--8">Python</label><input type="radio" name="group-bvGKn" id="tab-HCgpHln"><label for="tab-HCgpHln">Typescript</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> langchain-community</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @langchain/community</span></span></code></pre></div></div></div><h3 id="langgraph" tabindex="-1">LangGraph <a class="header-anchor" href="#langgraph" aria-label="Permalink to &quot;LangGraph&quot;">​</a></h3><p>通过将步骤构建为图中的边和节点，使用 LLMs 构建健壮且有状态的多参与者应用程序。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-iEe-A" id="tab-BLhLWxv" checked><label for="tab-BLhLWxv">Python</label><input type="radio" name="group-iEe-A" id="tab-KMQkiHG"><label for="tab-KMQkiHG">Typescript</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> langgraph</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @langchain/langgraph</span></span></code></pre></div></div></div><h3 id="langserve" tabindex="-1">LangServe <a class="header-anchor" href="#langserve" aria-label="Permalink to &quot;LangServe&quot;">​</a></h3><p>将 LangChain 链部署为 REST API</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;langserve[all]&quot;</span></span></code></pre></div><h3 id="langsmith" tabindex="-1">LangSmith <a class="header-anchor" href="#langsmith" aria-label="Permalink to &quot;LangSmith&quot;">​</a></h3><p><a href="https://docs.smith.langchain.com" target="_blank" rel="noreferrer">LangSmith</a> 一个开发平台，可以让你调试、测试、评估和监控 LLM 应用程序，并与 LangChain 无缝衔接。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-5fbqK" id="tab-uWlDSQQ" checked><label for="tab-uWlDSQQ">Python</label><input type="radio" name="group-5fbqK" id="tab-RVY-M0u"><label for="tab-RVY-M0u">Tyscript</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> langsmith</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> langsmith</span></span></code></pre></div></div></div><h2 id="langchain-的六大核心组件" tabindex="-1">LangChain 的六大核心组件 <a class="header-anchor" href="#langchain-的六大核心组件" aria-label="Permalink to &quot;LangChain 的六大核心组件&quot;">​</a></h2><ul><li>Model 模型</li><li>Prompts 提示</li><li>Indexes 索引</li><li>Memory 记忆</li><li>Chains 链</li><li>Agents 代理</li></ul>',29),l=[t];function h(p,d,c,o,r,g){return s(),i("div",null,l)}const u=a(n,[["render",h]]);export{b as __pageData,u as default};
