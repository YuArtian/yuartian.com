/*
 * @Author: XueYu 😊
 * @Date: 2018-12-31 15:54:17
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-04-01 19:22:59
 */
import React from 'react'
import {Provider} from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from 'next-redux-saga'
import App, { Container } from 'next/app'
import Head from 'next/head'
import configureStore from '../store/configureStore'
import '../static/iconfont'
import '../styles/global.scss'
import DevTools from '../components/DevTools'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps: {...pageProps} }
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
          { process.env.NODE_ENV !== 'production' &&  <DevTools/>}
        </Provider>
      </Container>
    )
  }
}

export default withRedux(configureStore)(withReduxSaga(MyApp));