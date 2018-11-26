/*
 * @Author: XueYu😊
 * @Date: 2018-11-24 20:56:37
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2018-11-26 11:37:57
 */
import React, { PureComponent } from 'react'
import Shape from '../../components/Canvas/shape'

class CanvasIndex extends PureComponent {
  constructor(props){
    super(props)
    this.canvasRef = React.createRef()

    this.state = {
      // word: new Shape()
    }
  }
  static getDerivedStateFromProps(nextProps, preState){
    console.log('getDerivedStateFromProps', nextProps)
    return {

    }
  }
  componentDidMount(){
    const { message } = this.props

    let canvas = this.canvasRef.current
    let context = canvas.getContext('2d')
    console.log('context', context)
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    let gridY = 7
    let gridX = 7;


    let type = "ball";

    let word = new Shape(W/2, H/2, message)
    word.getValue(context, {W, H, gridY, gridX, type})

  }

  render(){
    return (
      <canvas ref={this.canvasRef}/>
    )
  }
}

export default CanvasIndex