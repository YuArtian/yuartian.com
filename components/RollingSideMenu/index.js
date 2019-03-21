/*
 * @Author: XueYu 😊
 * @Date: 2019-03-13 11:01:39
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-21 18:15:36
 */

import styles from './index.scss'
import Icon from '../Icon'
import Router from 'next/router'
import React, { PureComponent } from 'react'
// import { SideContext, selected_menu } from '../../context/sideMenu_context'

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

class SideMenu extends PureComponent {
  state = {
    // selected: selected_menu,
  }
  handle_click_menu_item = item => {
    console.log('item key', item)
    item.to && Router.push(item.to)
    this.props.toggle_menu(item.key)
  }
  render(){
    const { item_list=item_list_default } = this.props
    console.log('item_list',item_list)
    return (
      <nav className={styles.sideMenu}>
        <ul className={styles.menu_list}>
          {
            item_list.map(item =>
            <li key={item.key} className={`${styles.menu_item}`} onClick={() => this.handle_click_menu_item(item)}>
              <div className={styles.menu_item_title}>{item.title}</div>
              <Icon name={item.icon_name} size='50px'/>
            </li>)
          }
        </ul>
      </nav>
    )
  }
}

export default SideMenu
