/*
 * @Author: XueYu 😊
 * @Date: 2019-03-13 11:01:39
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-13 15:01:29
 */

import styles from './index.scss'
import Icon from '../Icon'
import Link from 'next/link'

const item_list = [
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
    to: '/exhibition',
  },
  {
    key: 'music',
    icon_name: 'pineapple',
    title: 'Music',
    to: '/music'
  },
]

const SideMenu = () => (
  <ul className={styles.sideMenu}>
    {
      item_list.map(item =>
      <li key={item.key} className={styles.menu_item_wrapper}>
        <Link href={item.to} prefetch>
          <div className={`${styles.menu_item} flex flex_justify_content_between flex_align_items_center cursor_pointer user_select f_14 c_text_blue`}>
            <Icon name={item.icon_name} size='50px'/>
            {item.title}
          </div>
        </Link>
      </li>)
    }
  </ul>
)

export default SideMenu
