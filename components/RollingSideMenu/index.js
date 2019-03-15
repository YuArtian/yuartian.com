/*
 * @Author: XueYu 😊
 * @Date: 2019-03-13 11:01:39
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-15 11:17:58
 */

import styles from './index.scss'
import Icon from '../Icon'
import Router from 'next/router'

const item_list_default = [
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
    to: '/article'
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
]

const SideMenu = ({item_list=item_list_default}) => (
  <nav className={styles.sideMenu}>
    <ul className={styles.menu_list}>
      {
        item_list.map(item =>
        <li key={item.key} className={`${styles.menu_item}`} onClick={_ => item.to && Router.push(item.to)}>
          <div className={styles.menu_item_title}>{item.title}</div>
          <Icon name={item.icon_name} size='50px'/>
        </li>)
      }
    </ul>
  </nav>
)

export default SideMenu
