/*
 * @Author: XueYu 😊
 * @Date: 2019-03-15 14:29:37
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-04-02 18:00:16
 */
import styles from './index.scss'
import RollingSideMenu from '../RollingSideMenu'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { toggle_menu } from '../../actions'

class Layout extends PureComponent {
  state = {
  }
  /* 切换菜单 */
  handle_toggle_menu = selected => this.props.toggle_menu(selected)

  render(){
    const { children, current_menu_list } = this.props
    console.log('current_menu_list',current_menu_list)
    return (
      <div id={styles.app}>
        <RollingSideMenu handle_toggle_menu={this.handle_toggle_menu} current_menu_list={current_menu_list} />
        {children}
      </div>
    )
  }
}

function mapStateToProps ({ sider_menu: { SIDER_MENU_CONFIG, selected_menu } }) {
  return { SIDER_MENU_CONFIG, selected_menu }
}

/* HOC */
export function withRouterLayout (WrappedComponent, fetch_data) {
  return connect(mapStateToProps,{
    toggle_menu
  })(class extends PureComponent {
    static async getInitialProps (ctx) {
      console.log('withRouterLayout getInitialProps')
      const { pathname, store } = ctx
      const { sider_menu: { SIDER_MENU_CONFIG } } = store.getState()
      const data_source = (fetch_data && await fetch_data()) || ''
      // store.dispatch(toggle_menu(SIDER_MENU_CONFIG[pathname]))
      const wrapped_props = WrappedComponent.getInitialProps && WrappedComponent.getInitialProps(ctx)
      return {
        current_menu_list: SIDER_MENU_CONFIG[pathname],
        current_pathname: pathname,
        data_source,
        ...wrapped_props,
      }
    }

    render(){
      const { current_menu_list, data_source, toggle_menu } = this.props
      return (
        <Layout current_menu_list={current_menu_list} toggle_menu={toggle_menu}>
          <WrappedComponent data_source={data_source} />
        </Layout>
      )
    }
  })
}


export default Layout