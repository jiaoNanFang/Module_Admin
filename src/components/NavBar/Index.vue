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
      style="overflow: auto;"
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
  import store from '@/store'
  import { mapState } from 'vuex'
  export default {
    components:{
      MenuTree,
    },
    data(){
      return {
      }
    },
    computed:{
      ...mapState({
        navTree: state=>state.navTree
      })
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
    .el-menu {
      position:absolute;
      top: 60px;
      bottom: 0px;
      text-align: left;
      // background-color: #2968a30c;
      width: 210px
    }
    .logo{
      position:absolute;
      top: 0px;
      height: 60px;
      line-height: 60px;
      cursor:pointer;
      color: #fff;
      background: rgb(9, 60, 144)
      width: 210px
      display flex
      align-items center
      justify-content center
      >div{
        width: 100%
        display flex
        align-items center
        justify-content center
      }
    }
  }
</style>


