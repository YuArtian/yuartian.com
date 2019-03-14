/*
 * @Author: XueYu 😊
 * @Date: 2019-03-14 17:58:54
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-14 18:10:18
 */
import styles from './index.scss'
import Icon from '../../Icon'

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

export default _ => (
  <ul className={styles.sideMenu}>
    {
      item_list.map(item =>
      <li key={item.key} className={styles.menu_item_wrapper}>
          <div className={`${styles.menu_item}`}>
            {item.title}
            <Icon name={item.icon_name} size='50px'/>
          </div>
      </li>)
    }
  </ul>
)
