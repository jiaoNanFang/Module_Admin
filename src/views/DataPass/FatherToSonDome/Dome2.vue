<template>
  <div>
    <el-form>
      <el-form-item>
        <el-row>
          <el-col :span="24">
            <span>我是子组件dome2 &nbsp&nbsp</span>
            <span>参数:{{msg}}</span>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="子组件修改父组" label-width="110px">
        <el-row>
          <el-input v-model="val" type="text" placeholder="请输入内容" @input="handleChange"></el-input>
        </el-row>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  export default {
    name: "Dome2",
    // 使用model，这儿2个属性，
    // prop属性说，我要将msg作为该组件被使用时（此处为子组件被父组件调用）v-model能取到的值， 但是msg也要props声明
    // event说，我emit ‘val’ 的时候，参数的值就是父组件v-model收到的值
    model:{
      prop: 'msg',
      event: 'val'
    },
    props: {
      msg: ''
    },
    data(){
      return {
        val:''
      }
    },
    methods:{
      handleChange(val){
        this.$emit('val',val)
      }
    }
  }
</script>
<style scoped>

</style>


