<template>
  <div>
    <slot name="dome1">我是具名插槽：插槽1</slot>
    <br>
    <slot name="dome2">我是具名插槽：插槽2</slot>
    <br>
    <slot name="dome3">我是具名插槽：插槽3</slot>
  </div>
</template>

<script>
  export default {
    name: "Dome1"
  }
</script>
<style scoped>

</style>


