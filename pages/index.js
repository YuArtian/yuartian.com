/*
 * @Author: XueYu😊
 * @Date: 2018-11-24 20:52:59
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-22 11:44:43
 */
import React, { PureComponent } from 'react'
import TextParticle from '../components/Canvas/TextParticle'
// import { withRouterLayout } from '../components/Layout'
import RollingSideMenu from '../components/RollingSideMenu'

const current_menu_list = [
  {
    key: 'home',
    icon_name: 'cat',
    title: 'HOME',
    to: '/'
  },
  {
    key: 'my_article',
    icon_name: 'octopus',
    title: 'Article',
    to: '/article',
  },
  {
    key: 'daily',
    icon_name: 'egg',
    title: 'Album',
    to: '/album'
  },
  {
    key: 'exhibition',
    icon_name: 'chocolate',
    title: 'Exhibition',
    offset: '150px',
    to: '/exhibition',
  },
  {
    key: 'music',
    icon_name: 'pineapple',
    title: 'Music',
    to: '/music'
  },
]

class Index extends PureComponent {

  render(){
    return (
      <div>
        <RollingSideMenu current_menu_list={current_menu_list}/>
        <TextParticle/>
      </div>
    )
  }
}

export default Index