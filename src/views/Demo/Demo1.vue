<template>
  <div class="warp">
    <!--第一种-->
    <el-row class="rowStyle">
      <el-tag style="margin-bottom: 20px">一个数上下50范围中的随机数</el-tag>
    </el-row>
    <el-input v-model="data1"></el-input>
    <el-button @click="handleClick">点击获取某个数的上下50位</el-button>
    <div> 这个数组是{{list}}</div>
    <el-divider></el-divider>
    <el-button @click="handleClickOnly">点击随机获取某个数上下50中的一个</el-button>
    <div>这个数是{{num}}</div>
    <el-divider></el-divider>
  </div>
</template>

<script>
  export default {
    name: "demo1",
    data(){
      return {
        list:[],
        num:'',
        data1:'',
      }
    },
    methods:{
      _initNum(value) {
        let number = value
        let number1 = value
        let UpList = []
        let DownList = []
        for (let i = 0; i <50 ; i++) {
          UpList.push(++number)
          DownList.push(--number1)
        }
        let concatList = UpList.concat(DownList)
        // 顺序打乱
        for (let i = 1; i < concatList.length; i++) {
          const random = Math.floor(Math.random() * (i + 1));
          [concatList[i], concatList[random]] = [concatList[random], concatList[i]];
        }
        this.list = Object.assign([],concatList)
      },
      RandomNumBoth(Min,Max){
        let Range = Max - Min;
        let Rand = Math.random();
        let number_ = Min + Math.round(Rand * Range); //四舍五入
        return number_;
      },
      handleClick() {
        this._initNum(this.data1)
      } ,
      handleClickOnly() {
        let index_ = this.RandomNumBoth(0,this.list.length)
        this.num = this.list[index_]
      }
    },
    mounted() {

    },
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


