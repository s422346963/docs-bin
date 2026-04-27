import type { DefaultTheme } from 'vitepress'

/**
 * https://vitepress.dev/zh/reference/default-theme-sidebar
 * 
 * @description: 侧边栏配置
 * @param {*} {}
 * @return {*}
 */
export const sidebar: DefaultTheme.Config['sidebar'] = {
  fe: [
    {
      text: '前端物语',
      collapsed: false,
      items: [
        { text: 'JavaScript 基础知识', link: '/fe/javascript/basics' },
        {
          text: 'HTML',
          collapsed: false,
          items: [
            { text: 'HTML 理论知识点', link: '/fe/html/theory' },
            { text: 'CSS 理论知识点', link: '/fe/css/theory' },
            { text: 'ES6 常用知识', link: '/fe/es6/common' },
          ],
        },

        {
          text: 'TypeScript',
          collapsed: false,
          items: [
            { text: 'TypeScript 基础知识', link: '/fe/typescript/basics' },
            { text: 'TypeScript 配置文件', link: '/fe/typescript/config' },
            { text: 'TypeScript 工具', link: '/fe/typescript/tools' },
          ],
        },
      ],
    },
    {
      text: '测试页面',
      link: '/fe/test/test',
    },
  ],
  be: [
    {
      text: 'Java',
      collapsed: false,
      items: [
        { text: 'Java.1', link: 'be/java/java' },
        { text: 'Java.2', link: 'be/go/go' },
      ],
    },
        {
      text: 'Go',
      collapsed: false,
      items: [
        { text: 'Go.1', link: 'be/java/java' },
        { text: 'Go.2', link: 'be/go/go' },
      ],
    },
  ],
}
