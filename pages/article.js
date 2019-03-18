/*
 * @Author: XueYu 😊
 * @Date: 2019-03-14 09:43:27
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-15 17:53:22
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
    console.log('res.data',res)
    return { list: (res && res.data) || [] }
  }

  componentDidMount(){
    //dangerouslySetInnerHTML={{__html: this.props.html}}
  }

  render(){
    const { list } = this.props
    console.log('list',list);
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