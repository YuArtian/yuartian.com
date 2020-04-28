<template>
  <div id="article">
    <div class="top">

    </div>
    <div class="content">
      <aside class="aside">
        <div class="aside_header">

        </div>
      </aside>
      <section class="article_list">
        <h2>All Articles</h2>
        <div class="article_item" v-for="item in article_list" :key="item.id">
          <img :src="item.avatar" alt="avatar" class="avatar">
          <div class="article_item_content">
            <span class="article_item_user">{{ item.user_name }}</span>
            <span class="article_item_title">{{item.title}}</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import ArticleCard from '../components/Card/ArticleCard'
import MENU from '../common/config/menu.config'

export default {
  async asyncData ({ $axios }) {
    const data = await $axios.$get('/article/list')
    console.log(' data[0]', data[0]);
    return {
      article_list: data
    }
  },
  data(){
    return {
      article_list: [],
      menu: MENU
    }
  },

  components: { ArticleCard }
}
</script>

<style lang="less" scoped>
#article {
  /*height: 100%;*/
  background-color: #f6f9fb;
  /*padding: 40px 0 0 80px;*/
}
.top {
  display: flex;
  height: 64px;
  background-color: #24292e;
}
.content {
  display: flex;
}
.aside {
  background-color: #fff;
  display: flex;
  width: 350px;
  padding: 0 24px;
  border-right: 1px solid #e1e4e8;
}
.article_list {
  flex: 1;
  padding: 0 16px;
  margin-top: 16px;
  .article_item {
    display: flex;
    padding: 16px 0;
    border-bottom: 1px solid #e1e4e8;
    .avatar{
      cursor: pointer;
      // margin: 10px 20px;
      margin-right: 20px;
      height: 40px;
      width: 40px;
      background-color: #fff;
    }
    .article_item_content {
      .article_item_user {

      }
      .article_item_title {
      }
    }

  }
}

.article_item_wrapper {
  display: flex;
  align-items: center;
  background: #fff;
  margin-bottom: 10px;
  padding: 10px 15px;
  border-radius: 3px;
  box-shadow: 0 2px 6px rgba(170, 185, 200, 0.4);

}

// #article {
//   height: 100%;
//   padding: 40px 40px 0 80px;
// }
// .article_list {
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//   align-items: start;
//   justify-items: center;
//   grid-gap: 4rem 3rem;
// }
</style>
