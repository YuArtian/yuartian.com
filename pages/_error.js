/*
 * @Author: XueYu 😊
 * @Date: 2019-03-13 15:54:50
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-03-13 21:56:15
 */
import React from 'react'
import NotFound from '../components/Errors/404'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    if (this.props.statusCode === 404) {
      return (<NotFound/>)
    } else {
      return (
        <p>
          {this.props.statusCode
            ? `An error ${this.props.statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
      )
    }
  }
}