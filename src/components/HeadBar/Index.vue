<template>
  <div>
    <div class="headbar">
      <div class="header">
        <div class="left_div">
          <el-menu :default-active="activeIndex" background-color="rgb(9, 60, 144)" text-color="#fff" active-text-color="#fff"  class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1" @click="$router.push('/')">
              <i class="fa fa-home fa-lg"></i>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="right_div">
          <el-menu background-color="rgb(9, 60, 144)"
                   text-color="#fff"
                   active-text-color="#fff"
                   class="el-menu-demo"
                   @select="selectList"
                   mode="horizontal" >
            <el-menu-item>
              <img style="width: 40px; border-radius: 50%;margin-right: 10px" src="../../assets/images/one.png" alt="">
              <span>王德发</span>
            </el-menu-item>
            <el-menu-item>
              <el-menu-item index="5" v-popover:popover-personal>
                <el-popover
                  style="background: #000;"
                  ref="popover-personal"
                  placement="bottom"
                  trigger="click">
                  <div slot="reference">账号管理</div>
                  <div style="display: flex; flex-direction:column;align-items: center">
                    <img style="width: 100px;" src="../../assets/images/one.png" />
                    <div style="margin-top: 10px; cursor: pointer;" @click="logout">退出登录 <li class="fa fa-sign-out"></li></div>
                  </div>
                </el-popover>
              </el-menu-item>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Index",
    data(){
      return {
        activeIndex:'1',
      }
    },
    methods:{
      logout(){
        alert('退出登录')
      } ,
      selectList(val){
      }
    }
  }
</script>
<style lang="stylus" scoped>
  //父级的类名
  .el-submenu__title:hover{
    //background-color: rgb(9, 60, 144)!important;
  }

  //子级的类名
  .el-menu-item:hover {
    background-color: rgb(9, 60, 144)!important;
  }
  .headbar {
    position: fixed;
    top: 0;
    right 0;
    left:210px
    z-index: 1030;
    height: 60px;
    line-height: 60px;
    border-color: rgba(180, 190, 190, 0.8);
    border-left-width: 1px;
    border-left-style: solid;
    background: rgb(9, 60, 144)
    .header{
      padding 0 10px
      display flex
      align-items center
      justify-content space-between
      .left_div, .right_div{
      }
    }
  }
</style>


