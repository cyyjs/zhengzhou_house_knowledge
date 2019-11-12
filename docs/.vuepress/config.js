module.exports = {
  base: '/zhengzhou_house_knowledge/',
  title: '郑州买房攻略',
  description: '郑州买房攻略',
  head: [
    // ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
    // ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
    // ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }],
    ['link', { rel: 'icon', href: '/imgs/house.ico' }]
  ],
  themeConfig: {
    search: true,
    sidebarDepth: 2,
    displayAllHeaders: true,
    nav: [
      { text: '主页', link: '/' },
      { text: '知识概念', link: '/concept/' },
      { text: '相关政策', link: '/policy/' },
      // { text: '郑州板块', link: '/introduction/' },
      { text: '地铁交通', link: '/subway/' },
      { text: '楼盘信息', link: '/properties/' },
      { text: '攻略', link: '/helper/' },
      { text: 'GitHub', link: 'https://github.com/cyyjs/zhengzhou_house_knowledge' }
    ],
    sidebar: 'auto'
  }
}