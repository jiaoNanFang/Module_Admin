<template>
  <div>
    <el-form>
      <el-form-item>
        <el-col>
          <span>我是子组件dome2 &nbsp&nbsp</span>
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          <el-button size="mini" type="primary" @click.enter="handleClick">点击传递I HATE YOU</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Dome2",
    props:{
      getData: Function
    },
    data(){
      return {
        love:'I HATE YOU'
      }
    },
   methods:{
     /**
      * $refs, $root, $parent, $children
      * $root 获取根组件
      * $parent 获取父组件
      * $children 获取子组件(所有的子组件，不保证顺序)
      * $refs 组件获取组件实例，元素获取元素
      * 以上都为一类，这里写一个
      * 注意！！
      * 用此方法，保证在父组件中，子组件没有在插件标签的包裹中
      * 比如el-row下，是不行的
      * 要在div下调用子组件
      *
      * 这类方法是隐式的，如果直接更新父组件中的data，父组件是不知情的情况下更新的，容易出问题
      */
     handleClick(){
       this.$parent.getDataOne(this.love)
     }
   }
  }
</script>
<style scoped>

</style>


