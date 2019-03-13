/*
 * @Author: XueYu😊
 * @Date: 2018-11-24 20:52:59
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-13 11:03:07
 */
import React, {Component} from 'react'
import Head from '../components/Head'
import TextParticle from '../components/Canvas/TextParticle'
import SideMenu from '../components/SideMenu'

class Index extends Component {

  render(){
    return (
      <div id="app">
        <Head/>
        <TextParticle/>
        <SideMenu/>
      </div>
    )
  }
}

export default Index