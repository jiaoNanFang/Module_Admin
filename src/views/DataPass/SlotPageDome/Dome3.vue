<template>
  <div>
    <slot b="jiao" age="250"></slot>
    <br>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        user:'我是传参插槽',
        name:'我使用了解构',
      }
    },
  }
</script>
<style scoped>

</style>


