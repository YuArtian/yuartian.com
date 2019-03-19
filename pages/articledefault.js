/*
 * @Author: XueYu 😊
 * @Date: 2019-03-15 11:46:32
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-19 18:52:47
 */
import React, { PureComponent } from 'react'
import request from '../utils/request'

export default class ArticleDefault extends PureComponent {
  static async getInitialProps({ query }){
    console.log('query',query)
    return {
      download_url: query.download_url
    }
  }

  componentDidMount(){
    window.fetch(this.props.download_url, {
      headers: {
        'User-Agent': 'YuArtian',
      }
    }).then(res => {
      console.log('res',res)
    })
  }

  render(){
    return (
      <div>1111</div>
    )
  }
}