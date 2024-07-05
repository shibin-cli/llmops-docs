import DefaultTheme from 'vitepress/theme'
// import './custom.css'
import Layout from './Layout.vue'
export default {
    Layout,
    extends: DefaultTheme,
    enhanceApp(ctx) {
      // ...
    }
  }
