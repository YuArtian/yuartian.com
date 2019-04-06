/*
 * @Author: XueYu 😊
 * @Date: 2019-03-15 14:29:37
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-04-06 23:08:43
 */
import styles from './index.scss'
import RollingSideMenu from '../RollingSideMenu'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { toggle_menu } from '../../actions'

class Layout extends PureComponent {
  /* 切换菜单 */
  handle_toggle_menu = selected => {
    console.log('handle_toggle_menu');
    const { loading } = this.props
    const { key, to='' } = selected
    if (loading['MY_ARTICLES'] && key === 'my_article') {
      return
    }
    if (loading['FE9_ARTICLES'] && key === 'fe9') {
      return
    }
    if (to) {
      Router.push(to)
      return
    }
    // this.props.toggle_menu(selected)
  }

  render(){
    const { children, current_menu_list } = this.props
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
      const { pathname, store } = ctx
      console.log('ctx',ctx);
      const { sider_menu: { SIDER_MENU_CONFIG }, loading } = store.getState()
      const data_source = (fetch_data && await fetch_data()) || ''
      // store.dispatch(toggle_menu(SIDER_MENU_CONFIG[pathname]))
      const wrapped_props = WrappedComponent.getInitialProps && WrappedComponent.getInitialProps(ctx)
      return {
        current_menu_list: SIDER_MENU_CONFIG[pathname],
        current_pathname: pathname,
        data_source,
        loading,
        ...wrapped_props,
      }
    }
    componentDidMount(){
      console.log('componentDidMount');
      const { current_menu_list } = this.props
      this.props.toggle_menu(current_menu_list[0])
    }
    render(){
      const { current_menu_list, data_source, toggle_menu, loading } = this.props
      return (
        <Layout current_menu_list={current_menu_list} toggle_menu={toggle_menu} loading={loading}>
          <WrappedComponent data_source={data_source} />
        </Layout>
      )
    }
  })
}


export default Layout