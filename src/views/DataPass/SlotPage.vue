<template>
  <div class="warp">

    <!--第一种-->
    <el-row class="rowStyle">
      <el-tag style="margin-bottom: 20px">第一种 :默认插槽</el-tag>
      <el-form>
        <el-form-item>
          <el-col :span="8">
            <Dome1>
              <span>菜单1</span>
              <span>菜单2</span>
              <span>菜单3</span>
            </Dome1>
          </el-col>
        </el-form-item>
      </el-form>
    </el-row>
    <el-divider></el-divider>
    <!--第二种-->
    <el-row class="rowStyle">
      <el-tag style="margin-bottom: 20px">第二种 :具名插槽</el-tag>
      <el-form>
        <el-form-item>
          <el-col :span="8">
            <Dome2>
              <template slot = dome1 ></template>
              <template slot = dome2 ></template>
              <template slot = dome3 ></template>
            </Dome2>
          </el-col>
        </el-form-item>
      </el-form>
    </el-row>
    <el-divider></el-divider>
    <!--第三种-->
    <el-row class="rowStyle">
      <el-tag style="margin-bottom: 20px">第三种 :传参插槽</el-tag>
      <el-form>
        <el-form-item>
          <el-col :span="8">
            <Dome3>
              <div slot-scope="Data">
                <p> <span>姓名：</span> {{Data.b}} </p>
                <p> <span>年龄：</span> {{Data.age}} </p>
              </div>
            </Dome3>
          </el-col>
        </el-form-item>
      </el-form>
    </el-row>
    <el-divider></el-divider>
  </div>
</template>

<script>
  import Dome1 from './SlotPageDome/Dome1'
  import Dome2 from './SlotPageDome/Dome2'
  import Dome3 from './SlotPageDome/Dome3'
  export default {
    components:{
      Dome1,
      Dome2,
      Dome3,
    },
    data(){
      return {

      }
    },
    methods:{
    }
  }
</script>
<style lang="stylus" scoped>
  .warp{
    .rowStyle{
      margin-bottom 20px
    }
    .colStyle{

    }
  }
</style>


