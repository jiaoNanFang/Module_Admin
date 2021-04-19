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


    <!--<div>{{lastThirtyDays}}</div>-->

  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    name: "demo1",
    data(){
      return {
        list:[],
        num:'',
        data1:'',
        lastThirtyDays:[],
        arrList:[],
        Object_:[
          {
            a:11,
            b:333,
            c:555,
          },
          {
            a:55,
            b:666,
            c:777,
          },
          {
            a:88,
            b:999,
            c:563,
          },
        ]
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
      },
      // 获取日期列表
      getMomentList() {
        let newDataList =  [...new Array(30)].map( (item,index) => moment(moment().startOf("day").add(index, "days")).format('YYYY-MM-DD'))
        newDataList.forEach((item ,index) => {
          this.lastThirtyDays.push({
            data:item,
            week:this.getWeek(item),
            weekId: moment(item).day(),
          })
        })
        const NullObject = {
          data:'',
          week:'',
          weekId: 9999999,
        }
        switch (this.lastThirtyDays[0].week) {
          case '周一':
            this.addDataObject(0,NullObject)
            break
          case '周二':
            this.addDataObject(1,NullObject)
            break
          case '周三':
            this.addDataObject(2,NullObject)
            break
          case '周四':
            this.addDataObject(3,NullObject)
            break
          case '周五':
            this.addDataObject(4,NullObject)
            break
          case '周六':
            this.addDataObject(5,NullObject)
            break
          case '周日':
            this.addDataObject(6,NullObject)
            break
        }
        this.arrList = this.group(this.lastThirtyDays, 7)
        if(this.arrList[this.arrList.length-1].length<7){
          for (let i = 0; i <this.arrList[this.arrList.length-1].length%7 ; i++) {
            this.arrList[this.arrList.length-1].push(NullObject)
          }

        }
      },
      // 获取星期几
      getWeek (date) { // 参数时间戳
        let week = moment(date).day()
        switch (week) {
          case 1:
            return '周一'
          case 2:
            return '周二'
          case 3:
            return '周三'
          case 4:
            return '周四'
          case 5:
            return '周五'
          case 6:
            return '周六'
          case 0:
            return '周日'
        }
      },
      // 补充日期
      addDataObject(val,obj) {
        [...new Array(val)].forEach((item,index) => {
          this.lastThirtyDays.unshift(obj)
        })
      },
      //将一个数组等分成多个数组
      group(array, subGroupLength) {
        //数组，一组有多少个数据
        let index = 0;
        let newArray = [];
        while(index < array.length) {
          newArray.push(array.slice(index, index += subGroupLength));
        }
        return newArray;
      },

      // 点击单元格
      handleClickScheduling(val,index,time) {
        if(!val.week) {
          return
        }
        console.log(val.data,index,time);

      },

    },
    mounted() {
      this.getMomentList()
      console.log(this.Object_);
      let ddd = this.Object_.map((item,index) => {
        delete item.a;
        delete item.b;
        return item
      })
      console.log(this.Object_);
      console.log(ddd);

    },
  }
</script>
<style lang="stylus" scoped>
  .warp{
    padding 20px
    .redClass{
      color: red
    }
    .table-Item {
      width: 70%;
      margin:auto;
      text-align: center
      margin-bottom 10px
    }
    table,tr,th,td {
      border:1px solid #000
    }
    th{
      width: 60px
      height: 60px
      line-height:60px
      font-weight  900
    }
    td{
      width: 90px
      height: 40px
      line-height: 40px
    }
  }

</style>


