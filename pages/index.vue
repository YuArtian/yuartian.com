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
  head(){
    return {
      script: [{ src: 'https://unpkg.com/zdog@1.0.1/dist/zdog.dist.min.js' }]
    }
  },
  components: { WelcomeBar, Coffee }
}
</script>

<style lang="scss">
#index_page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
