/*
 * @Author: XueYu😊
 * @Date: 2018-11-24 20:52:59
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-02-22 17:33:41
 */
import React, {Component} from 'react'
import Head from '../components/Head'
import CanvasIndex from '../components/Canvas'
// import request from '../utils/request'
import fetch from 'isomorphic-unfetch'

import styles from '../styles/index.scss'

class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: "\\(≧▽≦)/",
    }
  }

  static async getInitialProps({ req }){
    // const res = await request('localhost:3000/getdata',{type: 'POST'})
    const res = await fetch('http://localhost:3000/getdata', {method: 'POST'})
    const data = await res.json()
    console.log('data',data)
    return { res: data }
  }

  onChange = e => {
    this.setState({ message: e.target.value })
  }

  render(){
    const { message } = this.state
    const { res } = this.props
    return (
      <div id="app">
        <Head/>
        <CanvasIndex message={message}/>
        {res.data}
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