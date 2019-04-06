/*
 * @Author: XueYu 😊
 * @Date: 2019-04-03 14:37:05
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-04-06 18:30:06
 */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouterLayout } from '../components/Layout'
import common_styles from '../styles/common.scss'
import { NASA_pic } from '../actions'


class Ablum extends PureComponent {
  async getInitialProps(){

  }
  componentDidMount(){

  }
  render(){
    return (
      <div className={common_styles.content_layout}>Ablum</div>
    )
  }
}

export default withRouterLayout(connect(state => state)(Ablum))