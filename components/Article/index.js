/*
 * @Author: XueYu 😊
 * @Date: 2019-03-21 11:48:49
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-21 15:35:27
 */

import React, { PureComponent } from 'react'
import request from '../../utils/request'

class Article extends PureComponent {
  state = {
    html: ''
  }
  async componentDidMount () {
    const {data} = await request('article/detail', {
      method: 'POST',
      body: {download_url: this.props.download_url}
    })
    this.setState({ html: data })
  }
  render(){
    return (
      <div className='markdown-body' dangerouslySetInnerHTML={{__html: this.state.html}}></div>
    )
  }
}

export default Article