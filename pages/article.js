/*
 * @Author: XueYu 😊
 * @Date: 2019-03-14 09:43:27
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-22 16:10:54
 */
import React, { PureComponent } from 'react'
import request from '../utils/request'
import { withRouterLayout } from '../components/Layout'
import styles from '../styles/articles.scss'
import { flex_cards } from '../components/Card'
import { SideContext } from '../context/sideMenu_context'

/* 获取我的文章列表 */
async function get_my_articles () {
  const res = await request('article/list')
  return { list: (res && res.data) || [] }
}

/* 获取九部文章 */
async function get_fe9_articles () {
  const res = await request('article/fe9/list')
  return {}
}

class Article extends PureComponent {
  static async getInitialProps(){
    console.log('getInitialProps Article')
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  render_context = selected_menu => {
    console.log('render_context selected_menu',selected_menu)
    if (selected_menu.key === 'article') {
      const { data_source } = this.props
      return flex_cards(data_source.list)
    }
    if (selected_menu.key === 'fe9') {
      const { data } =
    }
  }

  render(){
    return (
      <div id={styles.articles}>
        <SideContext.Consumer>
          { selected_menu => this.render_context(selected_menu) }
        </SideContext.Consumer>
      </div>
    )
  }
}

export default withRouterLayout(Article, get_my_articles)