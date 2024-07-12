import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LLM OPS",
  description: "A VitePress Site",
  base: "/llmops-docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide" },
    ],

    sidebar: [
      {
        text: "开始",
        link: "/guide",
        // items: [
        //   { text: '开始', link: '/guide' },
        //   // { text: 'Runtime API Examples', link: '/api-examples' }
        // ]
      },
      {
        text: "LangChain",
        items: [
          { text: "介绍", link: "/guide/langchain/start" },
          { text: "Prompt 组件", link: "/guide/langchain/prompt" },
          { text: "Model 组件", link: "/guide/langchain/model" },
          { text: "OutputParser 组件", link: "/guide/langchain/outputparser" },
          { text: "Runnable", link: "/guide/langchain/runnable" },
          { text: "Memory", link: "/guide/langchain/memory" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
