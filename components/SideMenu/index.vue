<template>
  <nav class="side_menu">
    <ul class="menu_list" ref="menu_list">
      <li
        v-for="(item, index) in menu_list"
        @mouseenter="handle_mouseenter_item(index)"
        @mouseleave="handle_mouseleave_item(index)"
        :key="item.key"
        :ref="`menu_list_item_${index}`"
        class="menu_item"
        @click="handle_click_menu_item(item)">
        <div class="menu_item_title">{{item.title}}</div>
        <img class="menu_item_icon" :src="require(`../../assets/iconfont/${item.icon_name}.svg`)" alt="">
      </li>
    </ul>
  </nav>
</template>
<script>
import SIDER_MENU_CONFIG from '../../common/config/menu.config.js'
import Icon from '../../components/Icon/index'

export default {
  data(){
    return {
      menu_item_widths: [],
    }
  },
  computed: {
    menu_list: function(){
      return SIDER_MENU_CONFIG[this.$route.path]
    },
  },
  mounted(){
    this.$nextTick(() => {
      const menu_item_widths = []
      Array.from(this.$refs.menu_list.children).map((dom, index) => {
        this.$refs[`menu_list_item_${index}`][0].style.transform = `translate(-${dom.offsetWidth-50}px, 0)`
        menu_item_widths.push(dom.offsetWidth-50)
      })
      this.menu_item_widths = menu_item_widths
    })
  },
  methods: {
    handle_click_menu_item(item){
      item.to && this.$router.push(item.to)
    },
    handle_mouseenter_item(index){
      this.$refs[`menu_list_item_${index}`][0].style.transform = `translate(0, 0)`
    },
    handle_mouseleave_item(index){
      this.$refs[`menu_list_item_${index}`][0].style.transform = `translate(-${this.menu_item_widths[index]}px, 0)`
    }
  },
  components: { Icon },
}
</script>
<style lang="less" scoped>
.side_menu {
  position: fixed;
  top: 20px;
}
.menu_list {
  // transform: translate(-270px, 0);
  // transform: translate(0, 0);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.menu_item {
  // transform: translate(, 0);
  color: #fff;
  font-weight: bolder;
  font-size: 18px;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 5px 0;
  background: rgba(0, 0, 0, 0.36);
  // width: 300px;
  text-align: right;
  padding: 10px;
  border-radius: 0 30px 30px 0;
  transition: all 1s;
  &:hover {
    transform: translate(100px, 0);
    background: rgba(231, 111, 81, 1);
    .menu_item_icon {
      // color: #fff;
      transform: rotate(360deg);
      transition: all 1s;
    }
  }
  .menu_item_icon {
    margin-left: 10px;
    color: #000;
    background: #fff;
    padding: 4px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-size: 20px;
    background: #fff;
    transform: rotate(0deg);
  }
}
.link {
  color: #000;
  display: inline-block;
}
</style>
