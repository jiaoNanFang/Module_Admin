<template>
  <div>
    <el-row>

    </el-row>
    <el-form>
      <el-form-item>
        <el-col>
          <span>我是子组件dome3 &nbsp&nbsp</span>
          <span>参数:{{dome_3}}</span>
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          <el-button size="mini" type="primary" @click="handleClick">点击拼接LOVE</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Dome3",
    props:{
      dome_3: {  // 按钮显示文本
        type: String,
        default: ''
      },
    },
    methods:{
      //这是 update:dome_3 自定义事件会告诉父组件将父组件的 dome_3值改为this.dome_3+'LOVE'，并传回给子组件
      handleClick(){
        this.$emit('update:dome_3', this.dome_3+'LOVE')
      }
    },
  }
</script>
<style scoped>

</style>


