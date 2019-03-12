/*
 * @Author: XueYu😊
 * @Date: 2018-11-24 20:52:59
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-02-28 16:03:03
 */
import React, {Component} from 'react'
import Head from '../components/Head'
import CanvasIndex from '../components/Canvas'
import SignInBtn from '../components/SignInBtn'
import SignUpBtn from '../components/SignUpBtn'
import request from '../utils/request'

import styles from '../styles/index.scss'

class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: "\\(≧▽≦)/",
    }
  }
  /* 输入框变化 */
  onChange = e => {
    this.setState({ message: e.target.value })
  }
  /* 测试获取用户接口 */
  getUser = () => {
    request('user', {method: 'GET'})
  }

  render(){
    const { message } = this.state
    return (
      <div id="app">
        <Head/>
        <CanvasIndex message={message}/>
        <div id={styles.tips}>
          <input type="text" id={styles.message} value={message} onChange={this.onChange}/>
          <p className={styles.desc} onClick={this.getUser}>
            Hey! Welcome to my site Please feel free ~
          </p>
        </div>

        <SignInBtn/>
        <SignUpBtn/>
      </div>
    )
  }
}

export default Index