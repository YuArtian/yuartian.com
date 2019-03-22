/*
 * @Author: XueYu 😊
 * @Date: 2019-03-13 11:01:39
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-22 16:08:39
 */

import styles from './index.scss'
import Icon from '../Icon'
import Router from 'next/router'
import React, { PureComponent } from 'react'
// import { SideContext } from '../../context/sideMenu_context'

class SideMenu extends PureComponent {
  /* 切换菜单 */
  handle_click_menu_item = item => {
    item.to && Router.push(item.to)
    this.props.toggle_menu(item)
  }
  render(){
    const { item_list } = this.props
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
