<template>
  <div id="article">
    <section class="article_list">
      <article class="list_item">
        <header>list_item1 header</header>
        list_item1
      </article>
      <article class="list_item">
        list_item2
      </article>
      <article class="list_item">
        list_item3
      </article>
      <article class="list_item">
        list_item4
      </article>
    </section>
  </div>
</template>
<script>
export default {
  layout: 'menu'
}
</script>

<style lang="less" scoped>
#article {
}
.article_list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  align-items: start;
  justify-items: center;
  grid-gap: 4rem 3rem;
  .list_item {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
}
</style>
