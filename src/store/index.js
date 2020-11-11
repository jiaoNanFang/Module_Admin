

import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
  state:{
    //存放的键值对就是所要管理的状态
    navFlag:false,  // 路由菜单标示
    navTree:[],  // 路由菜单
  },
  mutations:{
    //es6语法，等同edit:funcion(){...}
    TreeListFlag(state,data){
      state.navFlag = data
    },
    TreeListData(state,data){
      state.navTree = data
    },
  }
})

export default store
