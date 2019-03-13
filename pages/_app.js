/*
 * @Author: XueYu 😊
 * @Date: 2018-12-31 15:54:17
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-13 17:43:41
 */
import React from 'react'
import App, { Container } from 'next/app'
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
        <Component {...pageProps} />
      </Container>
    )
  }
}