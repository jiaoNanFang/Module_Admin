<template>
  <div>
    <el-form>
      <el-form-item>
        <el-col>
          <span>我是子组件dome1 &nbsp&nbsp</span>
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          <el-button size="mini" type="primary" @click="handleClick">点击传递I LOVE YOU</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Dome1",

    data(){
      return {
        love:'I LOVE YOU'
      }
    },
   methods:{
     handleClick(){
       this.$emit('getData',this.love)
     }
   },
    mounted(){
      //自己监听当前实例的自定义getData事件
      this.$on( 'getData',function(val){
        console.log( '我是子组件dome1'+val );
      } );
    }
  }
</script>
<style scoped>

</style>


