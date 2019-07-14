<template>
<div id="__menu_layout">
  <SideMenu/>
  <nuxt />
</div>
</template>
<script>
import SideMenu from '../components/SideMenu/index'
export default {
  components: { SideMenu }
}
</script>
<style lang="less" scoped>
#__menu_layout {
  // padding-left: 60px;
  height: 100%;
}
</style>
