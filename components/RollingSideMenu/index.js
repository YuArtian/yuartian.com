/*
 * @Author: XueYu 😊
 * @Date: 2019-03-13 11:01:39
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-04-01 19:57:46
 */

import styles from './index.scss'
import Icon from '../Icon'
import Router from 'next/router'
import React, { PureComponent } from 'react'

class SideMenu extends PureComponent {
  /* 切换菜单 */
  handle_click_menu_item = item => {
    item.to && Router.push(item.to)
    this.props.handle_toggle_menu(item)
  }
  render(){
    const { current_menu_list } = this.props
    return (
      <nav className={styles.sideMenu}>
        <ul className={styles.menu_list}>
          {
            current_menu_list.map(item =>
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
