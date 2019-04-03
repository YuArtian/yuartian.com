/*
 * @Author: XueYu 😊
 * @Date: 2019-03-14 09:43:27
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-04-02 18:43:51
 */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { toggle_menu } from '../actions'
import { withRouterLayout } from '../components/Layout'
import styles from '../styles/articles.scss'
import { flex_cards } from '../components/Card'

class ArticlesPage extends PureComponent {

  componentDidMount(){
    const { sider_menu: {SIDER_MENU_CONFIG} } = this.props
    this.props.toggle_menu(SIDER_MENU_CONFIG[window.location.pathname][0])
  }

  render(){
    const { entities: { articles_list=[] } } = this.props
    return (
      <div id={styles.articles}>
        {flex_cards(articles_list)}
      </div>
    )
  }
}

export default withRouterLayout(connect(state => state, {toggle_menu})(ArticlesPage))