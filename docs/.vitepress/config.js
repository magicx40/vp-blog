import { defineConfig } from 'vitepress';
import { getPosts, getSideBar, getNav } from './func';

export default defineConfig({
  title: "少年郎小站",
  description: "A blog website built using vitepress",
  base: '/',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  srcExclude: ['README.md'],
  themeConfig: {
    logo: '/logo.png',
    posts: await getPosts(),
    nav: getNav(),
    sidebar: getSideBar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present 少年郎'
    }
  }
});
