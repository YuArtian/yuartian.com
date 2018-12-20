/*
 * @Author: XueYu😊
 * @Date: 2018-11-24 20:56:37
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2018-12-20 23:15:54
 */

import React, { PureComponent } from 'react'
import Shape from './shape'

export default class CanvasIndex extends PureComponent {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef()
    this.state = {
      word: new Shape(),
      width: 0,
      height: 0
    }
  }

  componentDidMount(){
    this.ctx = this.canvasRef.current.getContext('2d')
    this.paint();
    requestAnimationFrame(this.tick);
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

  paint = () => {
    const { message } = this.props
    const width = window.innerWidth
    const height = window.innerHeight

    const word = new Shape({x: width/2, y: height/2, width, height, message})
    word.getValue(this.ctx)
    this.setState({ word, width, height })
  }

  tick = _ => {
    requestAnimationFrame(this.tick);
    const { word, width, height } = this.state
    this.ctx.clearRect(0, 0, width, height);
    for (let i=0; i < word.placement.length; i++) {
      word.placement[i].update();
    }
  }

  handleResize = () => {
    this.setState({
      width: this.getWindowWidth(),
      height: this.getWindowHeight()
    });
  }

  getWindowWidth = () => {
    return typeof window != 'undefined'
      ? window.innerWidth
      : 0;
  }

  getWindowHeight = () => {
    return typeof window != 'undefined'
      ? window.innerHeight
      : 0;
  }

  render() {
    const { width, height } = this.state;

    return (
      <canvas
        ref={this.canvasRef}
        width={width}
        height={height}
      />
    );
  }
}

