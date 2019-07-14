<template>
  <div id="article">
    <section class="article_list">
      <ArticleCard v-for="item in article_list" :key="item.id" />
    </section>
  </div>
</template>
<script>
import ArticleCard from '../components/Card/ArticleCard'

export default {
  layout: 'menu',
  async asyncData ({ $axios }) {
    const data = await $axios.$get('/article/list')
    return {
      article_list: data
    }
  },
  data(){
    return {
      article_list: []
    }
  },
  /* async mounted(){
    const { data } = await this.$axios.$get('/article/list')
    console.log('data',data);
  }, */
  components: { ArticleCard }
}
</script>

<style lang="less" scoped>
#article {
  height: 100%;
  padding: 40px 40px 0 80px;
}
.article_list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  align-items: start;
  justify-items: center;
  grid-gap: 4rem 3rem;
}
</style>
