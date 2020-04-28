<template>
  <article class="card">
    <header class="card_header">
      <img class="card_header_avatar" :src="datasource.avatar" :alt="datasource.user_name" :title="datasource.user_name">
      <div class="card_header_content">
        <div :title="datasource.title" class="header_title">{{datasource.title}}</div>
        <div class="header_name">{{datasource.user_name}}</div>
      </div>
    </header>
    <div class="card_content">
      <img class="screenshort" v-if="img_src" :src="img_src" alt="">
      <div class="screenshort_placeholder" v-else>111</div>
    </div>
    <footer class="card_footer">card_footer</footer>
  </article>
</template>
<script>
export default {
  props: {
    'datasource': {
      type: Object,
      default: () => {}
    },
    'itemIndex': {
      type: Number,
      default: 0
    },
  },
  data(){
    return {
      img_src: "",
    }
  },
  async mounted(){
    this.img_src = await this.fetch_screenshort(this.datasource.html_url)
  },
  beforeCreate(){
    console.log(`children beforeCreate`);
  },
  created(){
    console.log(`children created`);
  },
  beforeMount(){
    console.log(`children ${this.itemIndex} beforeMount`);

  },
  // mounted(){
  //   console.log(`children ${this.itemIndex} mounted`);
  //   this.datasource.user_name = 'AAA'
  // },
  beforeUpdate(){
    console.log(`children ${this.itemIndex} beforeUpdate`);
  },
  updated(){
    console.log(`children ${this.itemIndex} updated`);
  },
  methods: {
    async fetch_screenshort(url){
      try {
        const { data, code, message } = await this.$axios('/screenshot', {
          params: {url},
        })
        if (!data) throw `${code} ${message}`
        console.log('data',data);
        return  data;
      } catch (error) {
        this.img_src = ''
        console.error(error);
      }
    }
  },
}
</script>
<style lang="less" scoped>
.card {
  position: relative;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #444857;
  border-radius: 6px;
  color: #fff;
  &::after {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #202229;
    border-radius: 6px;
    transition: 0.3s ease;
  }
  &:hover{
    &::after {
      content: "";
      position: absolute;
      top: -14px;
      bottom: -48px;
      right: -14px;
      left: -14px;
      background: #202229;
      border-radius: 10px;
    }
  }
}
.card_header {
  display: flex;
  align-items: center;
  order: 3;
  width: 100%;
  .card_header_avatar {
    cursor: pointer;
    margin: 10px 20px;
    height: 40px;
    width: 40px;
    background-color: #fff;
  }
  .card_header_content {
    flex: 1;
    overflow: hidden;
    .header_title {
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 16px;
      font-weight: bolder;
      &:hover {
        text-decoration: underline;
      }
    }
    .header_name {
      // cursor: pointer;
      font-family: 'PingFang';
      letter-spacing: 1.5px;
      font-weight: lighter;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
.card_content {
  flex: 1;
  position: relative;
  width: 100%;
  // display: flex;
  // width: 100%;
  overflow: hidden;
  .screenshort {
    position: absolute;
    left: -80px;
    top: -200px;

  }
  .screenshort_placeholder {

  }
}
.card_footer {
  position: absolute;
  bottom: -44px;
  left: -7px;
  height: 45px;
  background-color: green;
  display: flex;
  align-items: center;
}
</style>
