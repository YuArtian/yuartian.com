<template>
<div id="index_page">
  <Coffee/>
  <WelcomeBar/>
</div>
</template>
<script>
import WelcomeBar from '../components/WelcomeBar'
import Coffee from '../components/Single/Coffee'

export default {
  layout: 'menuFullScreen',
  head(){
    return {
      script: [{ src: '/zdog.dist.min.js' }]
    }
  },
  components: { WelcomeBar, Coffee }
}
</script>

<style lang="less">
#index_page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
