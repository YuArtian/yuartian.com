/*
 * @Author: XueYu 😊
 * @Date: 2019-03-14 09:43:27
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-14 17:49:27
 */
import React, { PureComponent } from 'react'
import request from '../utils/request'


class Article extends PureComponent {
  static async getInitialProps(){
    const data = await request('article/list')
    // console.log('data',data)
    return { html: data.data }
  }

  componentDidMount(){
    //dangerouslySetInnerHTML={{__html: this.props.html}}
  }

  render(){
    return (
      <div>
        Article
      </div>
    )
  }
}

export default Article