/*
 * @Author: XueYu 😊
 * @Date: 2018-12-31 15:54:17
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-27 20:09:29
 */
import React from 'react'
import {Provider} from "react-redux";
import withRedux from "next-redux-wrapper";
import App, { Container } from 'next/app'
import Head from 'next/head'
import configureStore from '../store/configureStore'
import '../static/iconfont'
import '../styles/global.scss'

const reducer = (state = {foo: ''}, action) => {
  switch (action.type) {
    case 'FOO':
      return {...state, foo: action.payload};
    default:
      return state
  }
};


class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    // console.log('Component --> ', Component)
    // console.log('router --> ', router)
    console.log('ctx req',ctx.req)
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps, store } = this.props

    return (
      <Container>
        <Head>
          <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,700italic" rel="stylesheet"></link>
          <link rel="stylesheet" href="/static/github-markdown.css"></link>
          <title>YuArtian</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(configureStore)(MyApp);