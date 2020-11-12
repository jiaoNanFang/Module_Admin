<template>
  <div class="warp">

    <!--第一种-->
    <el-row class="rowStyle">
      <el-tag style="margin-bottom: 20px">第一种自定义事件</el-tag>
      <el-form>
        <el-form-item>
          <el-col :span="8">
            <el-input disabled v-model="data_dome1" type="text" placeholder="请输入内容"></el-input>
            <Dome1 @getData="getData_" />
          </el-col>
        </el-form-item>
      </el-form>
    </el-row>
    <el-divider></el-divider>

    <!--第二种-->
    <el-row class="rowStyle">
      <el-tag style="margin-bottom: 20px">第二种利用父子关系</el-tag>
      <el-form>
        <el-form-item>
          <el-col :span="8">
            <el-input disabled v-model="data_dome2" type="text" placeholder="请输入内容"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
    </el-row>
    <Dome2/>
    <el-divider></el-divider>

    <!--第三种-->
    <el-row class="rowStyle">
      <el-tag style="margin-bottom: 20px">第三种 使用 props</el-tag>
      <el-form>
        <el-form-item>
          <el-col :span="8">
            <el-input disabled v-model="data_dome3.name" type="text" placeholder="请输入内容"></el-input>
            <Dome3 :enter="getDataTwo" />
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
  import Dome1 from './SonToFatherDome/Dome1'
  import Dome2 from './SonToFatherDome/Dome2'
  import Dome3 from './SonToFatherDome/Dome3'
  export default {
    name: "SonToFather",
    components:{
      Dome1,
      Dome2,
      Dome3,
    },
    data(){
      return {
        data_dome1:'准备接收子组件数据',
        data_dome2:'准备接收子组件数据',
        data_dome3:{
          name:'哈哈'
        },

      }
    },
    methods:{
      getData_(data){
        this.data_dome1 = data
      },
      getDataOne(data){
        this.data_dome2 = data
      },
      getDataTwo(data) {
        console.log(data);
        this.data_dome3.name = data.name
      },
    },
  }
</script>
<style scoped>

</style>


