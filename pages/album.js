/*
 * @Author: XueYu 😊
 * @Date: 2019-04-03 14:37:05
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-04-08 17:08:27
 */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styles from '../styles/album.scss'
import common_styles from '../styles/common.scss'
import RollingSideMenu from '../components/RollingSideMenu'

/* const current_menu_list = [
  {
    key: 'home',
    icon_name: 'cat',
    title: 'HOME',
    to: '/'
  },
  {
    key: 'daily',
    title: 'Daily',
    icon_name: 'pooh_bear',
    to: '/ablum'
  },
] */

class Ablum extends PureComponent {
  async getInitialProps(){

  }
  componentDidMount(){

  }
  render(){
    return (
      <div id={styles.album}>
        <div className={styles.up}>
          <div className={styles.main}></div>
          <div className={styles.main_side}>
            <div className={styles.daily}></div>
            <div className={styles.diary}></div>
          </div>
        </div>
        <div className={styles.down}></div>
      </div>
    )
  }
}

export default connect(state => state)(Ablum)