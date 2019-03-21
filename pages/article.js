/*
 * @Author: XueYu 😊
 * @Date: 2019-03-14 09:43:27
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-21 18:19:43
 */
import React, { PureComponent } from 'react'
import request from '../utils/request'
import Layout from '../components/Layout'
import styles from '../styles/articles.scss'
import { flex_cards } from '../components/Card'
import { SideContext } from '../context/sideMenu_context'

const item_list = [
  {
    key: 'my_article',
    title: 'All',
    icon_name: 'pooh_bear',
    to: '/article'
  },
]

class Article extends PureComponent {
  static async getInitialProps(){
    const res = await request('article/list')
    return { list: (res && res.data) || [] }
  }

  render_context = selected_menu => {
    console.log('selected_menu',selected_menu)
    if (selected_menu === 'my_article') {
      const { list } = this.props
      return flex_cards(list)
    }
  }

  render(){

    return (
      <Layout list={item_list}>
        <div id={styles.articles}>
          <SideContext.Consumer>
            { selected_menu => this.render_context(selected_menu) }
          </SideContext.Consumer>
        </div>
      </Layout>
    )
  }
}

export default Article