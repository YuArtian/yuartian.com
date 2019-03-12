/*
 * @Author: XueYu😊
 * @Date: 2018-11-24 20:56:37
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-02-17 12:06:11
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
  static getDerivedStateFromProps(nextProps, prevState){
    console.log('getDerivedStateFromProps nextProps prevState',nextProps, prevState)
    return nextProps
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
    let innerWidth = window.innerWidth * ratio
    let innerHeight = window.innerHeight * ratio

    this.setState({ width: innerWidth, height: innerHeight, ratio })
    this.paint(innerWidth, innerHeight, ratio);
    requestAnimationFrame(this.tick);
    window.addEventListener('resize', this.handleResize, false);
  }

  componentDidUpdate({ message }, { word, width, height }) {
    console.log('componentDidUpdate word, width, height',word, width, height)
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
    console.log('paint innerWidth, innerHeight, ratio', innerWidth, innerHeight, ratio)
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
    this.setState({ word })
  }
  /* 动态画布 */
  tick = _ => {
    requestAnimationFrame(this.tick);
    const { word, width, height } = this.state
    this.ctx.clearRect(0, 0, width, height);
    for (let i=0; i < word.placement.length; i++) {
      word.placement[i].update();
    }
  }
  /* 缩放窗口 */
  handleResize = () => {
    console.log('handleResize',this.getWindowWidth(), this.getWindowHeight())
    this.paint(this.getWindowWidth(), this.getWindowHeight());
  }
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
    console.log('render width, height', width, height)

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

