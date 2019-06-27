<template>
  <svg
    @click="click"
    class="icon"
    aria-hidden="true"
    :fill="color||'#fff'"
    :style="[{'font-size': size}, styles]">
    <use :xlinkHref="`#icon-${name}`"></use>
  </svg>
</template>
<script>
export default {
  props: ['name', 'color', 'size', 'styles'],
  methods: {
    click(){
      this.$emit('handle_click')
    },
  },
}
</script>
