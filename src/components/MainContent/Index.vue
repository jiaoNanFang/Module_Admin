<template>
<div class="main-container">
  <!-- 主内容区域 -->
  <div class="main-content">
    <keep-alive>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </keep-alive>
  </div>
</div>
</template>

<script>
  export default {
    name: "Index"
  }
</script>
<style lang="stylus" scoped>
  .main-container{
    padding: 15px 5px 15px 5px;
    position: absolute;
    top: 60px;
    left: 210px;
    right: 1px;
    bottom: 0px;
  }
</style>


