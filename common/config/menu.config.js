const SIDER_MENU_CONFIG = {
  '/': [
    {
      key: 'home',
      icon_name: 'cat',
      title: 'HOME',
      to: '/'
    },
    {
      key: 'my_article',
      icon_name: 'octopus',
      title: 'Article',
      to: '/article',
    },
    {
      key: 'daily',
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
      key: 'home',
      icon_name: 'cat',
      title: 'HOME',
      to: '/'
    },
    {
      key: 'my_article',
      title: 'My Articles ~',
      icon_name: 'pooh_bear',
      to: '/article',
    },
    {
      key: 'fe9',
      title: '前端九部图书馆',
      to: '/article_fe9',
      icon_name: 'snoopy',
    },
  ],
  '/album': [
    {
      key: 'daily',
      title: 'Daily',
      icon_name: 'pooh_bear',
      to: '/ablum'
    },
  ],
  '/photoAlbums': [
    {
      key: 'photoAlbums',
      title: 'PhotoAlbums',
      icon_name: 'pooh_bear',
      to: '/photoAlbums'
    },
  ],
}

export default SIDER_MENU_CONFIG