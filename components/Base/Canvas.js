/*
 * @Author: XueYu😊
 * @Date: 2018-12-19 17:22:52
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2018-12-19 23:17:24
 */
import React, { Component } from 'react'

export class Canvas extends Component {
  constructor(props){
    super(props)
    this.canvasRef = React.createRef()

  }
  componentDidMount(){

  }
  getRatio = () => {

  }


  render(){
    const { width, height } = this.props;
    const deviceWidth = this.getRatio() * width
    const deviceHeight = this.getRatio() * height

    return <canvas
      refs={}
      height={deviceHeight}
      width={deviceWidth}
    />
  }
}