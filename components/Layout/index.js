/*
 * @Author: XueYu 😊
 * @Date: 2019-03-15 14:29:37
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-21 18:34:17
 */
import styles from './index.scss'
import RollingSideMenu from '../RollingSideMenu'
import { SideContext, selected_menu } from '../../context/sideMenu_context'
import React, { PureComponent } from 'react'

class Layout extends PureComponent {
  state = {
    selected: selected_menu
  }
  toggle_menu = selected => {
    this.setState({ selected })
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log('getDerivedStateFromProps nextProps', nextProps)
    console.log('getDerivedStateFromProps', window.location.pathname)
    const { list } = nextProps
    return {
      selected: 'home'
    }
  }

  render(){
    const { children, list } = this.props
    const { selected } = this.state
    return (
      <div id={styles.app}>
        <SideContext.Provider value={selected}>
          <RollingSideMenu item_list={list} toggle_menu={this.toggle_menu}/>
          {children}
        </SideContext.Provider>
      </div>
    )
  }
}

export default Layout