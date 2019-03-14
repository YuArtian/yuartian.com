/*
 * @Author: XueYu😊
 * @Date: 2018-11-24 20:52:59
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-03-14 23:05:21
 */
import React, {Component} from 'react'
import TextParticle from '../components/Canvas/TextParticle'
import RollingSideMenu from '../components/RollingSideMenu'

class Index extends Component {

  render(){
    return (
      <div id="app">
        <TextParticle/>
        <RollingSideMenu/>
      </div>
    )
  }
}

export default Index