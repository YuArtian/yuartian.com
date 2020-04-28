<template>
  <nuxt />
</template>
<script>
export default {
  head() {
    return {
      link: [{ rel: 'stylesheet', href: '/styles/layouts/default.css' }]
    }
  },
}
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;
  font-size: 15px;
  line-height: 1.5;
  font-weight: 400;
  height: 100%;
  overflow-x: hidden;
}
body {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  min-height: 100vh;
}
#__nuxt, #__layout {
  /*width: 100%;*/
  /*height: 100%;*/
}
</style>

<style lang="less" scoped>
.__default_layout {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
