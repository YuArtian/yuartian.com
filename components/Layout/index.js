/*
 * @Author: XueYu 😊
 * @Date: 2019-03-15 14:29:37
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-03-23 18:21:01
 */
import styles from './index.scss'
import RollingSideMenu from '../RollingSideMenu'
import { SideContext } from '../../context/sideMenu_context'
import React, { PureComponent } from 'react'
import SIDER_MENU_CONFIG from '../../common/sider_menu_config'

class Layout extends PureComponent {
  state = {
    selected: this.props.list[0],
  }
  /* 切换菜单 */
  toggle_menu = selected => this.setState({ selected })

  render(){
    const { children, list } = this.props
    const { selected } = this.state
    return (
      <div id={styles.app}>
        <RollingSideMenu item_list={list} toggle_menu={this.toggle_menu}/>
        <SideContext.Provider value={selected}>
          {children}
        </SideContext.Provider>
      </div>
    )
  }
}

/* HOC */
export function withRouterLayout (WrappedComponent, fetch_data) {
  return class extends PureComponent {
    static async getInitialProps (ctx) {
      const { pathname } = ctx
      const data_source = (fetch_data && await fetch_data()) || ''
      const wrapped_props = WrappedComponent.getInitialProps && WrappedComponent.getInitialProps(ctx)
      return {
        current_list: SIDER_MENU_CONFIG[pathname] || [],
        current_pathname: pathname,
        data_source,
        ...wrapped_props,
      }
    }

    render(){
      const { current_list, current_pathname, data_source } = this.props
      return (
        <Layout list={current_list} pathname={current_pathname}>
          <WrappedComponent data_source={data_source}/>
        </Layout>
      )
    }
  }
}

export default Layout