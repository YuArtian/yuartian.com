/*
 * @Author: XueYu 😊
 * @Date: 2018-12-31 15:54:17
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-03-14 23:09:36
 */
import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import '../static/iconfont'
import '../styles/global.scss'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,700italic" rel="stylesheet"></link>
          <title>YuArtian</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}