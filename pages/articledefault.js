/*
 * @Author: XueYu 😊
 * @Date: 2019-03-15 11:46:32
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-21 15:35:45
 */
import React, { PureComponent } from 'react'
import Article from '../components/Article'

export default class ArticleDefault extends PureComponent {
  static async getInitialProps({ query }){
    return {
      download_url: query.download_url
    }
  }


  render(){
    return (
      <div>
        <Article download_url={this.props.download_url}/>
      </div>
    )
  }
}