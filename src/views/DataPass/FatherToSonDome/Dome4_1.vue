<template>
  <div style="width: 1000px">
    <span>我是dome4的子组件dome4_1</span> &nbsp&nbsp&nbsp&nbsp&nbsp
    <span>接收爷爷组件的参数： {{dome_4}}</span>
    &nbsp&nbsp&nbsp&nbsp&nbsp
    <span><el-button @click="handleClick">点击改变爷爷组件为"我爱你"</el-button></span>
  </div>
</template>

<script>
  export default {
    name: "Dome4_1",
    props:{
      dome_4: {
        type: String,
        default: ''
      },
      handleShowClick: {
        type: Function,
        default: null
      },
    },
    data(){
      return {
        value:'我爱你'
      }
    },
    methods:{
      handleClick(){
        this.$emit('handleShowClick',this.value)
      }
    }
  }
</script>
<style scoped>

</style>


