console.log('process.env.NODE_ENV', process.env.NODE_ENV);
export default {
  mode: 'universal',
  server: {
    port: 8888, // default: 5000
    host: '0.0.0.0' // default: localhost,
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'YuArtian',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,700italic'
      // }
      // { rel: 'stylesheet', href: '/static/github-markdown.css' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@assets/styles/reset.less'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/axios'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    // proxyHeaders: false
   proxy: true,
   prefix: process.env.NODE_ENV === 'development' ? '/api/dev' : '/api'
  },
  proxy: {
    '/api/dev/': { target: 'http://localhost:8080', pathRewrite: {'^/api/dev': '/api'} }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
