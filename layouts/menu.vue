<template>
<div class="__menu_layout">
  <SideMenu/>
  <!-- <div class="__menu_layout_content"> -->
    <nuxt />
  <!-- </div> -->
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
<style lang="less" scoped>
.__menu_layout {
  // width: 100%;
}
</style>
