/*
 * @Author: XueYu 😊
 * @Date: 2018-12-26 14:28:06
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-01-01 00:37:50
 */

import React, { PureComponent } from 'react'
import Icon from '../Icon'
import styles from './index.scss'

export default class Sider extends PureComponent {
  constructor(){
    super()
    this.state = {
      isopen: false,
    }
  }
  siderSwitch = () => this.setState({isopen: !this.state.isopen})

  render(){
    const { isopen } = this.state
    return (
      <div id={styles.sider} onClick={e => e.preventDefault()}>
        <Icon
          name='sider_top' color='#fff' size={40}
          style={{marginLeft: '30px', marginTop: '20px', cursor: 'pointer', display: isopen ? 'none' : 'block'}}
          onClick={this.siderSwitch}/>
        <ul className={styles.menu} style={{width: isopen ? '200px' : '0'}}>
          <li className={styles.menuItem}>111111</li>
        </ul>
      </div>
    )
  }
}