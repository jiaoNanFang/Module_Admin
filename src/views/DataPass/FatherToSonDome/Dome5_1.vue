<template>
  <div>
  <el-row>
    <el-col :span="24">
      <el-input v-model="value.name" placeholder="我是子组件5_1参数"></el-input>
    </el-col>
  </el-row>
  </div>
</template>

<script>
  export default {
    name: "Dome5_1",
    inject: {
      parent:{
        default: 1
      }
    },
    data(){
      return {
        value:this.parent
      }
    }
  }
</script>
<style scoped>

</style>


