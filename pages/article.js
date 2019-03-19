/*
 * @Author: XueYu 😊
 * @Date: 2019-03-14 09:43:27
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-19 17:47:10
 */
import React, { PureComponent } from 'react'
import request from '../utils/request'
import Layout from '../components/Layout'
import styles from '../styles/articles.scss'
import { flex_cards } from '../components/Card'

const item_list = [
  {
    key: 'all',
    title: 'All',
    icon_name: 'pooh_bear',
  },
]

// const list = [
//   {name: '1'},{name: '2'},{name: '3'},{name: '4'},
// ]

class Article extends PureComponent {
  static async getInitialProps(){
    const res = await request('article/list')
    return { list: (res && res.data) || [] }
  }

  componentDidMount(){
    //dangerouslySetInnerHTML={{__html: this.props.html}}
  }

  render(){
    const { list } = this.props
    return (
      <Layout list={item_list}>
        <div id={styles.articles}>
         {flex_cards(list)}
        </div>
      </Layout>
    )
  }
}

export default Article