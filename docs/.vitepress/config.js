import { defineConfig } from 'vitepress';
import { getPosts } from './func';
const pagePrefix = '/posts';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "少年郎小站",
  description: "A blog website built using vitepress",
  base: '/',
  ignoreDeadLinks: true,
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  srcExclude: ['README.md'],
  themeConfig: {
    posts: await getPosts(),
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Examples',
        items: [
          { text: 'markdown-examples', link: `${pagePrefix}/markdown-examples` }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: `${pagePrefix}/markdown-examples` },
          { text: 'Runtime API Examples', link: `${pagePrefix}/api-examples` }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present 少年郎'
    }
  }
});
