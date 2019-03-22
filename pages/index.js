/*
 * @Author: XueYu😊
 * @Date: 2018-11-24 20:52:59
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-22 11:44:43
 */
import React, { PureComponent } from 'react'
import TextParticle from '../components/Canvas/TextParticle'
import { withRouterLayout } from '../components/Layout'

class Index extends PureComponent {

  render(){
    return (
      <TextParticle/>
    )
  }
}

export default withRouterLayout(Index)