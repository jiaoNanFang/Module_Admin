<template>
  <div class="warp">
    <!--第一种-->
    <el-row class="rowStyle">
      <el-tag style="margin-bottom: 20px">执行上下文</el-tag>
      <el-form>
        <el-form-item>
          <el-col :span="24">
            <div>当代码运行时，会产生一个对应的执行环境，在这个环境中，所有变量会被事先提出来（变量提升），有的直接赋值，有的为默认值 undefined，代码从上往下开始执行，就叫做执行上下文。</div>
          </el-col>
          <el-col>
            <div class="redClass">执行上下文有且只有三类:全局执行上下文，函数上下文，与eval上下文</div>
          </el-col>
        </el-form-item>
      </el-form>
    </el-row>
    <treeselect></treeselect>
    <el-divider></el-divider>
  </div>
</template>

<script>
  export default {
    name: "ZuoYongYu"
  }
</script>
<style lang="stylus" scoped>
  .warp{
    padding 20px
    .redClass{
      color: red
    }
  }

</style>


