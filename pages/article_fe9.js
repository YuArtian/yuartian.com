/*
 * @Author: XueYu 😊
 * @Date: 2019-04-08 15:06:06
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-04-08 15:35:35
 */
import React, { PureComponent } from 'react'
import styles from '../styles/articles.scss'
import common_styles from '../styles/common.scss'
import { flex_cards } from '../components/Card'
import RollingSideMenu from '../components/RollingSideMenu'
import { load_my_article_page } from '../actions'
import { connect } from 'react-redux'

const current_menu_list = [
  {
    key: 'home',
    icon_name: 'cat',
    title: 'HOME',
    to: '/'
  },
  {
    key: 'my_article',
    title: 'My Articles ~',
    icon_name: 'pooh_bear',
    to: '/article',
    // api: 'article/list',
  },
  {
    key: 'fe9',
    title: '前端九部图书馆',
    to: '/article_fe9',
    icon_name: 'snoopy',
    // api: 'article/fe9/list',
  },
]

class ArticlesPage extends PureComponent {
  static async getInitialProps(ctx){
    ctx.store.dispatch({
      type: 'LOAD_FE9_ARTICLE_PAGE',
    })

  }
  render(){
    const { entities: { fe9_articles_list=[] } } = this.props
    return (
      <div>
        <RollingSideMenu current_menu_list={current_menu_list}/>
        <div id={styles.articles} className={common_styles.content_layout}>
          {flex_cards(fe9_articles_list)}
        </div>
      </div>
    )
  }
}

export default connect(state => state)(ArticlesPage)