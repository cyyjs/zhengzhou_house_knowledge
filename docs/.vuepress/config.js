module.exports = {
  base: '/zhengzhou_house_knowledge/',
  title: '郑州买房攻略',
  description: '郑州买房攻略',
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    {
      'ga': 'UA-98939871-5'
    }
  ],
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;'}],
    ['link', { rel: 'icon', href: '/imgs/house.ico' }]
  ],
  themeConfig: {
    repo: 'cyyjs/zhengzhou_house_knowledge',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '改善此页面！',
    smoothScroll: true,
    lastUpdated: '更新时间', // string | boolean
    search: true,
    sidebarDepth: 2,
    displayAllHeaders: true,
    nav: [
      { text: '主页', link: '/' },
      { text: '知识概念', link: '/concept/' },
      { text: '相关政策', link: '/policy/' },
      // { text: '郑州板块', link: '/introduction/' },
      { text: '地铁交通', link: '/subway/' },
      { text: '交房提醒', link: '/finally/' },
      // { text: '楼盘信息', link: '/properties/' },
      // { text: '攻略', link: '/helper/' }
    ],
    sidebar: 'auto'
  }
}