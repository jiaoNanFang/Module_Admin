<template>
  <div class="container">
    <!-- 导航菜单栏 -->
    <nav-bar></nav-bar>
    <!-- 头部区域 -->
    <head-bar></head-bar>
    <!-- 主内容区域 -->
    <main-content></main-content>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  import HeadBar from '@/components/HeadBar'
  import MainContent from '@/components/MainContent'
  export default {
    components:{
      NavBar,
      HeadBar,
      MainContent,
    },
    data() {
      return {

      }
    },
    methods:{
    },
    mounted() {

    },
  }
</script>
<style lang="stylus" >
  .container {
    position:absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    // background: rgba(224, 234, 235, 0.1);
  }
</style>


