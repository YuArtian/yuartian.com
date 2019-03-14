/*
 * @Author: XueYu😊
 * @Date: 2018-11-24 20:52:59
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-14 17:39:57
 */
import React, {Component} from 'react'
import TextParticle from '../components/Canvas/TextParticle'
import SideMenu from '../components/SideMenu'

class Index extends Component {

  render(){
    return (
      <div id="app">
        <TextParticle/>
        <SideMenu/>
      </div>
    )
  }
}

export default Index