<template>
  <div class="warp">

    <!--第一种-->
    <el-row class="rowStyle">
      <el-tag style="margin-bottom: 20px">第一种 :data的方式</el-tag>
      <el-form>
        <el-form-item>
          <el-col :span="8">
            <el-input v-model="data_dome1" type="text" placeholder="请输入内容"></el-input>
            <Dome1 :dome_1 = data_dome1 />
          </el-col>
        </el-form-item>
      </el-form>
    </el-row>
    <el-divider></el-divider>

    <!--第二种-->
    <el-row class="rowStyle">
      <el-tag type="success" style="margin-bottom: 20px">第二种：v-model</el-tag>
      <el-form>
        <el-form-item>
          <el-col :span="8">
            <el-input v-model="data_dome2" type="text" placeholder="请输入内容"></el-input>
            <Dome2 v-model="data_dome2"  />
          </el-col>
        </el-form-item>
      </el-form>
    </el-row>
    <el-divider></el-divider>

    <!--第三种-->
    <el-row class="rowStyle">
      <el-tag type="info" style="margin-bottom: 20px">第三种 :data.sync</el-tag>
      <el-form>
        <el-form-item>
          <el-col :span="8">
            <el-input v-model="data_dome3" type="text" placeholder="请输入内容"></el-input>
            <el-button size="mini" type="primary" @click="handleClickDome3">父组件点击拼接I</el-button>
            <Dome3 :dome_3.sync="data_dome3" />
          </el-col>
        </el-form-item>
      </el-form>
    </el-row>

    <el-divider>待补充</el-divider>
    <el-row class="rowStyle">
      <el-tag type="warning">标签四</el-tag>
    </el-row>
    <el-row class="rowStyle">
      <el-tag type="danger">标签五</el-tag>
    </el-row>

  </div>
</template>

<script>
  import Dome1 from './FatherToSonDome/Dome1'
  import Dome2 from './FatherToSonDome/Dome2'
  import Dome3 from './FatherToSonDome/Dome3'
  export default {
    name: "Index",
    components:{
      Dome1,
      Dome2,
      Dome3,
    },
    data(){
      return {
        data_dome1:'',
        data_dome2:'',
        data_dome3:'',
      }
    },
    methods:{
      handleClickDome3(){
        this.data_dome3 += 'I'
      }
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


