/*
 * @Author: XueYu 😊
 * @Date: 2019-03-14 09:43:27
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-04-05 22:33:18
 */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { toggle_menu } from '../actions'
import { withRouterLayout } from '../components/Layout'
import styles from '../styles/articles.scss'
import common_styles from '../styles/common.scss'
import { flex_cards } from '../components/Card'

class ArticlesPage extends PureComponent {

  render(){
    const { entities: { articles_list=[] } } = this.props
    return (
      <div id={styles.articles} className={common_styles.content_layout}>
        {flex_cards(articles_list)}
      </div>
    )
  }
}

export default withRouterLayout(connect(state => state, {toggle_menu})(ArticlesPage))