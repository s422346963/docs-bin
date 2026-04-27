import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',
  title: 'Bin-Docs',
  description: 'maomao的成长之路，包含前端常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    //socialLinks: [{ icon: 'github', link: 'https://github.com/maomao1996/vitepress-nav-template' }],

    footer: {
      message: '欢迎 star ⭐ 让更多人发现',
      copyright: 'Copyright © 2019-present maomao',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/
    visitor: {
      badgeId: 'maomao1996.vitepress-nav-template',
    },

    comment: {
      repo: 's422346963/docs-bin',
      repoId: 'R_kgDOSNn_3w',
      category: 'Announcements',
      categoryId: 'DIC_kwDOSNn_384C7x4p',
    },

    links: [
      {
        name: '德胜独立开发',
        url: 'https://desheng.blog.csdn.net/',
        description: '分享技术、记录成长',
        avatar: 'https://avatars.githubusercontent.com/u/109416673'
      },
      {
        name: 'Sonder',
        url: 'https://sonder.ink/',
        description: '乘风波破浪有时，直挂云帆破沧海',
        avatar: 'https://avatars.githubusercontent.com/u/109416673'
      },
      {
        name: '骤雨重山',
        url: 'https://www.zhuyushan.com/',
        description: '运气是计划之外的东西',
        avatar: 'https://avatars.githubusercontent.com/u/109416673'
      },
      {
        name: '肯了德的博客',
        url: 'https://www.cnblogs.com/kenlede/',
        description: '专注于分享实用的知识，你乐意看就多看看，保证你看一个不吱声',
        avatar: 'https://avatars.githubusercontent.com/u/109416673'
      },
    ],
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
