<template>
  <div>
    <el-row>
      <el-col>
        <span>我是子组件dome4 &nbsp&nbsp</span>
        <span>参数:我不使用参数</span>
        <dome4_1 v-bind="$attrs" v-on="$listeners" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import dome4_1 from './Dome4_1'
  export default {
    name: "Dome4",
    components:{
      dome4_1,
    }
  }
</script>
<style scoped>

</style>


