<template>
  <div>test</div>
</template>
<script>
  export default {
    beforeCreate(){
      console.log(`test children beforeCreate`);
    },
    created(){
      console.log(`test children created`);
    },
    beforeMount(){
      console.log(`test children beforeMount`);

    },
    mounted(){
      console.log(`test children  mounted`);
    },
    beforeUpdate(){
      console.log(`test children beforeUpdate`);
    },
    updated(){
      console.log(`test children  updated`);
    },
  }
</script>