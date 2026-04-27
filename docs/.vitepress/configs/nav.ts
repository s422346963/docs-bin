import type { DefaultTheme } from 'vitepress'

/**
 * https://vitepress.dev/zh/reference/default-theme-nav
 * 
 * @description: 导航栏配置
 * @param {*} {}
 * @return {*}
 */
export const nav: DefaultTheme.Config['nav'] = [
    {
    text: '首页',
    link: '/',
  },
  {
    text: '⭐我的导航',
    link: 'https://navbin.vercel.app/',
  },
  {
    text: '前端物语',
    items: [
      { text: 'JavaScript 基础知识', link: '/fe/javascript/basics' },
      {
        text: '',
        items: [
          { text: 'HTML 理论知识点', link: '/fe/html/theory' },
          { text: 'CSS 理论知识点', link: '/fe/css/theory' },
          { text: 'ES6 常用知识', link: '/fe/es6/common' },
        ],
      },

      {
        text: '',
        items: [
          { text: 'TypeScript 基础知识', link: '/fe/typescript/basics' },
          { text: 'TypeScript 配置文件', link: '/fe/typescript/config' },
          { text: 'TypeScript 工具', link: '/fe/typescript/tools' },
        ],
      },
    ],
  },

  {
    text: '后端物语',
    items: [
      { text: 'Java', link: 'be/java/java' },
      { text: 'Go', link: 'be/go/go' },
    ],
  },
]
