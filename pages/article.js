/*
 * @Author: XueYu 😊
 * @Date: 2019-03-14 09:43:27
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-03-23 20:21:14
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
  return ((res && res.data) || [])
}

/* 获取九部文章 */
async function get_fe9_articles () {
  const res = await request('article/fe9/list')
  return ((res && res.data) || [])
}



class ArticlesConsumer extends PureComponent {
  state = {
    list: []
  }

  fetch_data = async () => {
    const { selected_menu } = this.props
    const res = await request(selected_menu.api)
    return ((res && res.data) || [])
  }

  async componentDidMount(){
    const list = await this.fetch_data()
    this.setState({ list })
  }

  async componentDidUpdate(prevProps, prevState, snapshot){
    if (this.props.selected_menu.key !== prevProps.selected_menu.key) {
      const list = await this.fetch_data()
      this.setState({ list })
    }
  }

  render(){
    const { list } = this.state
    return flex_cards(list)
  }
}


class ArticlesPage extends PureComponent {
  render(){
    return (
      <div id={styles.articles}>
        <SideContext.Consumer>
          { selected_menu => <ArticlesConsumer selected_menu={selected_menu}/> }
        </SideContext.Consumer>
      </div>
    )
  }
}

export default withRouterLayout(ArticlesPage)