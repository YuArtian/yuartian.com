/*
 * @Author: XueYu😊
 * @Date: 2018-11-24 20:56:37
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2018-12-19 17:21:17
 */
import React, { PureComponent } from 'react'
import Shape from '../../components/Canvas/shape'

class CanvasIndex extends PureComponent {
  constructor(props){
    super(props)
    this.canvasRef = React.createRef()

    this.state = {
      // word: new Shape()
      W: 0,
      H: 0,
      word: null,
    }
  }
/*
  static getDerivedStateFromProps({ message }, { word }){
    if (word) {
      return {
        // word: new Shape(W/2, H/2, message)
        word
      }
    } else {
      return {
        // word:
      }
    }
  } */
  componentDidMount(){
    console.log('componentDidMount',this.canvasRef);
    const canvas = this.canvasRef.current
    const context = canvas.getContext('2d')
    let W = window.innerWidth
    let H = window.innerHeight

    this.setState({
      word: new Shape(W/2, H/2, this.props.message),
      W,
      H,
      canvas,
      context,
    })
    requestAnimationFrame(this.tick, canvas);
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
    this.paint()
  }

  paint = () => {
    const { W, H, word, context } = this.state
    // const canvas = this.canvasRef.current
    // const context = canvas.getContext('2d')
    let gridY = 7
    let gridX = 7;
    let type = "ball";
    word.getValue(context, {W, H, gridY, gridX, type})

  }

  tick = () => {
    const { W, H, word, context, canvas } = this.state
    // const canvas = this.canvasRef.current
    // const context = canvas.getContext('2d')
    this.setState({word})
    requestAnimationFrame(this.tick, canvas);
    context.clearRect(0, 0, W, H);
    for(let i=0; i< word.placement.length; i++){
      word.placement[i].update();
    }

  }

  render(){
    const {W, H} = this.state
    return (
      <canvas ref={this.canvasRef} width={W} height={H}/>
    )
  }
}

export default CanvasIndex