/*
 * @Author: XueYu😊
 * @Date: 2018-11-24 20:52:59
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2018-11-25 00:53:33
 */
import React from 'react'
import Head from '../components/Head'
import CanvasIndex from '../components/Canvas'

class Index extends React.Component {

  onChange (e) {
    console.log('onChange',e)
  }

  render(){
    return (
      <div>
        <Head/>
        <CanvasIndex/>

        <div id="tips">
          <input type="text" id="message" value="\(≧▽≦)/" onChange={this.onChange}/>
          <p className="desc">
            Hey! Welcome to my site Please feel free
          </p>
        </div>

        <style jsx global>{`
          html, body{
            padding: 0;
            margin: 0;
          }
          h1 {
            padding: 0;
            margin: 0;
          }
          #canvas{
            position: absolute;
            left: 0;
            top: 0;
          }

          body{
            background-color: #222;
            font-family: "Helvetica";
            overflow: hidden;
          }
        `}</style>

        <style jsx>{`
          #tips{
            position: absolute;
            bottom: 25%;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            color: #fff;
            font-size: 26px;
          }
          #tips #message {
            font-size: 26px;
            background-color: transparent;
            color: #fff;
            border: none;
            text-align: center;
          }
          #tips .desc {
            font-size: 13px;
            font-weight: lighter;
            border-top: 1px solid rgba(255,255,255,.5);
            padding-top: 30px;
            color: rgba(255,255,255,.5);
          }
        `}</style>
      </div>
    )
  }
}

export default Index