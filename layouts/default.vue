<template>
<div class="__default_layout">
  <SideMenu/>
  <nuxt />
</div>
</template>
<script>
import SideMenu from '../components/SideMenu/index'
export default {
  head() {
    return {
      link: [{ rel: 'stylesheet', href: '/styles/layouts/default.css' }]
    }
  },
  components: { SideMenu }
}
</script>
<style lang="scss" scoped>
.__default_layout {
  display: flex;
  width: 100%;
}
</style>
