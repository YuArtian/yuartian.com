/*
 * @Author: XueYu 😊
 * @Date: 2019-03-22 11:28:45
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-03-23 20:02:00
 */
const menu_config = {
  '/': [
    {
      key: 'home',
      icon_name: 'cat',
      title: 'HOME',
      to: '/'
    },
    {
      key: 'article',
      icon_name: 'octopus',
      title: 'Article',
      to: '/article',
    },
    {
      key: 'album',
      icon_name: 'egg',
      title: 'Album',
      to: '/album'
    },
    {
      key: 'exhibition',
      icon_name: 'chocolate',
      title: 'Exhibition',
      offset: '150px',
      to: '/exhibition',
    },
    {
      key: 'music',
      icon_name: 'pineapple',
      title: 'Music',
      to: '/music'
    },
  ],
  '/article': [
    {
      key: 'article',
      title: 'All',
      icon_name: 'pooh_bear',
      to: '/article',
      api: 'article/list',
    },
    {
      key: 'fe9',
      title: '前端九部',
      icon_name: 'snoopy',
      api: 'article/fe9/list',
    },
  ],
}

export default menu_config