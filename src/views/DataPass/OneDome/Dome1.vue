<template>
  <div>
    <el-row>
      <el-col>
        <span>我是子组件dome1 &nbsp&nbsp</span>
        <span>参数:{{dome_1}}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Dome1",
    props:{
      dome_1: {  // 按钮显示文本
        type: String,
        default: ''
      },
    }
  }
</script>
<style scoped>

</style>


