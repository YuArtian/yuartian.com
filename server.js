/*
 * @Author: XueYu 😊
 * @Date: 2019-03-15 11:28:38
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-19 18:40:08
 */
/* "dev": "next -p 8888",
"start": "next start -p 8888",
"build": "next build" */

const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    /* server.get('/git/:download_url', (req, res) => {
      console.log('article', req.params.download_url)
      const actualPage = '/article'
      app.render(req, res, actualPage)
    }) */

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(8888, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:8888')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })