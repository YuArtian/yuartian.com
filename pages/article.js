/*
 * @Author: XueYu 😊
 * @Date: 2019-03-14 09:43:27
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-03-14 23:16:49
 */
import React, { PureComponent } from 'react'
import request from '../utils/request'
import RollingSideMenu from '../components/RollingSideMenu'

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
    console.log('list',list);
    return (
      <div>
        <RollingSideMenu/>
        Article
      </div>
    )
  }
}

export default Article