/*
 * @Author: XueYu 😊
 * @Date: 2019-03-13 15:54:50
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-13 15:58:01
 */
import React from 'react'
import DouyinText from '../components/DouyinText'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <p>
        <DouyinText text={this.props.statusCode}/>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }
}