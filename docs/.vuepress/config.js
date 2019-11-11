module.exports = {
  base: '/zhengzhou_house_knowledge/',
  title: '郑州买房知识',
  description: '郑州买房知识',
  head: [
    ['link', { rel: 'icon', href: '/imgs/house.ico' }]
  ],
  themeConfig: {
    search: true,
    sidebarDepth: 2,
    displayAllHeaders: true,
    nav: [
      { text: '主页', link: '/' },
      { text: '知识概念', link: '/concept/' },
      { text: '郑州板块', link: '/introduction/' },
      { text: '地铁交通', link: '/subway/' },
      { text: '楼盘信息', link: '/properties/' },
      { text: '攻略', link: '/helper/' },
      { text: 'GitHub', link: 'https://github.com/cyyjs/zhengzhou_house_knowledge' }
    ],
    sidebar: 'auto'
  }
}