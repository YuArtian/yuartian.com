/*
 * @Author: XueYu 😊
 * @Date: 2019-03-13 10:47:41
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-13 10:59:29
 */
import React, { PureComponent, Fragment } from 'react'
import Canvas from './Canvas'
import styles from './index.scss'

export default class TextParticle extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      message: "\\(≧▽≦)/",
    }
  }
  /* 输入框变化 */
  onChange = e => this.setState({ message: e.target.value })

  render(){
    const { message } = this.state
    return(
      <Fragment>
        <Canvas message={message}/>
        <div id={styles.tips}>
          <input type="text" id={styles.message} value={message} onChange={this.onChange}/>
          <p className={styles.desc} onClick={this.getUser}>
            Hey! Welcome to my site Please feel free ~
          </p>
        </div>
      </Fragment>
    )
  }
}