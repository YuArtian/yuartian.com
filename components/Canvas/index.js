/*
 * @Author: XueYu😊
 * @Date: 2018-11-24 20:56:37
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-03-12 21:30:03
 */

import React, { PureComponent } from 'react'
import Shape from './shape'
import styles from './index.scss'

export default class CanvasIndex extends PureComponent {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef()
    this.state = {
      word: new Shape(),
      width: 0,
      height: 0,
      ratio: 1,
    }
  }

  componentDidMount(){
    console.log('componentDidMount')
    let context = this.ctx = this.canvasRef.current.getContext('2d')
    // 高清屏幕适配
    let devicePixelRatio = window.devicePixelRatio || 1
    let backingStoreRatio = context.webkitBackingStorePixelRatio ||
                            context.mozBackingStorePixelRatio ||
                            context.msBackingStorePixelRatio ||
                            context.oBackingStorePixelRatio ||
                            context.backingStorePixelRatio || 1
    let ratio = devicePixelRatio / backingStoreRatio
    // didMount 时只计算一次 ratio ，避免每次update都重新计算
    this.paint(window.innerWidth * ratio, window.innerHeight * ratio, ratio);
    //循环调用 requestAnimationFrame
    requestAnimationFrame(this.tick);
    //监听 resize 事件
    window.addEventListener('resize', this.handleResize, false);
  }

  componentDidUpdate({ message }, { word, width, height }) {
    if (message !== this.props.message) {
      this.ctx.clearRect(0, 0, width, height);
      word.placement = [];
      word.getValue(this.ctx);
    }
    this.paint();
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize)
  }
  /* 绘制图形 */
  paint = (innerWidth, innerHeight, ratio ) => {
    const { message } = this.props
    const paintWidth = innerWidth || this.state.width
    const paintHeight = innerHeight || this.state.height
    const paintRatio = ratio || this.state.ratio

    this.ctx.clearRect(0, 0, paintWidth, paintHeight);
    const word = new Shape({
      x: paintWidth/(2*paintRatio), y: paintHeight/(2*paintRatio),
      width:paintWidth, height: paintHeight, ratio: paintRatio,
      message,
    })
    word.getValue(this.ctx)
    this.setState({ word,  width: paintWidth, height: paintHeight, ratio: paintRatio })
  }
  /* 动态画布 */
  tick = _ => {
    //循环调用 requestAnimationFrame 不断刷新
    requestAnimationFrame(this.tick);
    const { word, width, height } = this.state
    this.ctx.clearRect(0, 0, width, height);
    for (let i=0; i < word.placement.length; i++) {
      word.placement[i].update();
    }
  }
  /* 缩放窗口 */
  handleResize = () => this.paint(this.getWindowWidth(), this.getWindowHeight());

  /* 获取宽度 */
  getWindowWidth = () => {
    return typeof window != 'undefined'
      ? window.innerWidth
      : 0;
  }
  /* 获取高度 */
  getWindowHeight = () => {
    return typeof window != 'undefined'
      ? window.innerHeight
      : 0;
  }

  render() {
    const { width, height } = this.state;

    return (
      <div className={styles.canvas_wrapper}>
        <canvas
          ref={this.canvasRef}
          width={width}
          height={height}
        />
      </div>
    );
  }
}

