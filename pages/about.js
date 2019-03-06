/*
 * @Author: XueYu 😊
 * @Date: 2019-03-06 10:50:10
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-06 13:23:01
 */
import React, { Component } from 'react'

class Test extends Component {
  render(){
    return (
      <svg width="500" height="500">
        <defs>
          <pattern id="dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle fill="#bee9e8" cx="50" cy="50" r="35" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
      </svg>
    )
  }
}
export default Test