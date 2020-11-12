<template>
  <div>
    <el-row>
      <el-col>
        <span>我是子组件dome5 &nbsp&nbsp</span>
        <span>参数： {{value.name}}</span>
        <dome5_1/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import dome5_1 from './Dome5_1'
  export default {
    components:{
      dome5_1,
    },

    inject: {
      parent:{
        default: null
      }
    },
    data(){
      return {
        value:this.parent
      }
    },

    watch:{
      parent:{
        handle:function (value) {

        },
      }
    }

  }
</script>
<style scoped>

</style>


