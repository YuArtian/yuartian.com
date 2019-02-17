/*
 * @Author: XueYu😊
 * @Date: 2018-11-24 20:52:59
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-02-16 17:07:25
 */
import React, {Component} from 'react'
import Head from '../components/Head'
import CanvasIndex from '../components/Canvas'

import styles from '../styles/index.scss'

class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: "\\(≧▽≦)/",
    }
  }

  onChange = e => {
    this.setState({ message: e.target.value })
  }

  render(){
    const { message } = this.state
    return (
      <div id="app">
        <Head/>
        <CanvasIndex message={message}/>

        <div id={styles.tips}>
          <input type="text" id={styles.message} value={message} onChange={this.onChange}/>
          <p className={styles.desc}>
            Hey! Welcome to my site Please feel free ~
          </p>
        </div>
      </div>
    )
  }
}

export default Index