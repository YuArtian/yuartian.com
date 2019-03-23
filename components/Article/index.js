/*
 * @Author: XueYu 😊
 * @Date: 2019-03-21 11:48:49
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-03-23 20:17:10
 */

import React, { PureComponent } from 'react'
import request from '../../utils/request'

class Article extends PureComponent {
  state = {
    html: this.props.html
  }
  async componentDidMount () {
    const { html, download_url } = this.props
    if (!html && download_url) {
      const { data } = await request('article/detail', {
        method: 'POST',
        body: {download_url: this.props.download_url}
      })
      this.setState({ html: data })
    }
  }
  render(){
    return (
      <div className='markdown-body' dangerouslySetInnerHTML={{__html: this.state.html}}></div>
    )
  }
}

export default Article