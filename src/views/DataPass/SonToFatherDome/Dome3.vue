<template>
  <div>
    <el-form>
      <el-form-item>
        <el-col>
          <span>我是子组件dome3 &nbsp&nbsp</span>
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          <el-button size="mini" type="primary" @click="handleClick">点击传递 大碗宽面</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Dome1",
    props:{
      enter: {
        type:Function,
        default:null,
      }
    },
    data(){
      return {
        love:{
          name:'kuanmian'
        }
      }
    },
   methods:{
     handleClick(){
       this.enter(this.love)
     }
   }
  }
</script>
<style scoped>

</style>


