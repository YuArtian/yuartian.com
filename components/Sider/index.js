/*
 * @Author: XueYu 😊
 * @Date: 2018-12-26 14:28:06
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2018-12-26 23:06:22
 */

import React, { PureComponent } from 'react'
import Icon from '../Icon'

export default class Sider extends PureComponent {
  constructor(){
    super()
    this.state = {
      isopen: false,
    }
  }
  render(){
    return (
      <div>
        Sider!
        <Icon name='sider_out'/>
      </div>
    )
  }
}