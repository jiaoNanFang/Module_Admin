<template>
<div class="menu-bar-container">
  <!--logo-->
  <div class="logo">
    <!--<img src="../../assets/images/one.png" alt="">-->
    <div>测试后台管理</div>
  </div>
  <!--列表-->
  <div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :unique-opened=true
      :collapse-transition="false"
      @open="handleOpen"
      @close="handleClose">
      <MenuTree v-for="(item,index) in navTree" :key="item.id"  :menu = item />
    </el-menu>
  </div>
</div>
</template>

<script>
  import MenuTree from './MenuTree'

  export default {
    components:{
      MenuTree,
    },
    data(){
      return {
        navTree:''
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted() {
      setTimeout(()=>{
        let listTree = sessionStorage.getItem('ListTree')
        this.navTree = JSON.parse(listTree)
      },200)

    }
  }
</script>
<style lang="stylus" scoped>
  .menu-bar-container{
    position: fixed;
    top: 0px;
    left: 0;
    bottom: 0;
    z-index: 1040;
    .logo{
      width: 210px
      height: 60px
      display flex
      align-items center
      justify-content center
      background: rgb(9, 60, 144)
      color: #fff
      >div{
        width: 180px
      }
    }
  }
</style>


