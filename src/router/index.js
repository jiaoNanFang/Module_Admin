/**
 * 插件引入
 */
import Vue from 'vue'
import Router from 'vue-router'
import api from '@/api/api'
import store from '@/store'

/**
 * 注册路由
 */
Vue.use(Router)

const router = new Router({
   // mode:'history',
  routes: [
    {
      path: '/',
      component: resolve=>require(['@/views/Home.vue'],resolve),
      children:[
        {
          path: '',
          name: '系统介绍',
          component: resolve=>require(['@/views/Intro.vue'],resolve),
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  addDynamicMenuAndRoutes('',to,from)
  next()
  // 登录界面登录成功之后，会把用户信息保存在会话
  // 存在时间为会话生命周期，页面关闭即失效。
  // let userName = sessionStorage.getItem('user')
  // if (to.path === '/login') {
  //   // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
  //   if(userName) {
  //     next({ path: '/' })
  //   } else {
  //     next()
  //   }
  // } else {
  //   if (!userName) {
  //     // 如果访问非登录界面，且户会话信息不存在，代表未登录，则跳转到登录界面
  //     next({ path: '/login' })
  //   } else {
  //     // 加载动态菜单和路由
  //     addDynamicMenuAndRoutes(userName, to, from)
  //     next()
  //   }
  //}
})

/**
 * 加载动态菜单和路由
 */
function addDynamicMenuAndRoutes(userName, to, from) {
  if(store.state.navFlag) {
     // console.log('动态菜单和路由已经存在.')
    return
  }
  api.mock.findListTree() .then(res => {
    if(res.code == '000000'){
      let dynamicRoutes = addDynamicRoutes(res.list)
      // 处理静态组件绑定路由
      handleStaticComponent(router, dynamicRoutes)
      router.addRoutes(router.options.routes)
      store.commit('TreeListFlag',true)
      store.commit('TreeListData',res.list)
    }
  })
}

/**
 * 添加动态(菜单)路由
 * @param {*} menuList 菜单列表
 * @param {*} routes 递归创建的动态(菜单)路由
 */
function addDynamicRoutes (menuList = [], routes = []) {
  let temp = []
  for (let i = 0; i < menuList.length; i++) {
    if (menuList[i].children && menuList[i].children.length >= 1) {
      temp = temp.concat(menuList[i].children)
    } else if (menuList[i].url && /\S/.test(menuList[i].url)) {
      menuList[i].url = menuList[i].url.replace(/^\//, '')
      // 创建路由配置
      let route = {
        path: menuList[i].url,
        component: null,
        name: menuList[i].name,
        meta: {
          icon: menuList[i].icon,
          index: menuList[i].id
        }
      }
      try {
        // 根据菜单URL动态加载vue组件，这里要求vue组件须按照url路径存储
        // 如url="sys/user"，则组件路径应是"@/views/sys/user.vue",否则组件加载不到
        let array = menuList[i].url.split('/')
        let url = ''
        for(let i=0; i<array.length; i++) {
          url += array[i].substring(0,1).toUpperCase() + array[i].substring(1) + '/'
        }
        url = url.substring(0, url.length - 1)
        route.component = resolve =>  require([`@/views/${url}`], resolve)
      } catch (e) {}
      routes.push(route)
    }
  }
  if (temp.length >= 1) {
    addDynamicRoutes(temp, routes)
  } else {
    //  console.log('动态路由加载...')
    //  console.log(routes)
     console.log('动态路由加载完成.')
  }
  return routes
}


function handleStaticComponent(router, dynamicRoutes) {
  for(let j=0;j<dynamicRoutes.length; j++) {
    if(dynamicRoutes[j].name == '代码生成') {
      dynamicRoutes[j].component = Generator
      break
    }
  }
  router.options.routes[0].children = router.options.routes[0].children.concat(dynamicRoutes)
}


export default router


















/**
 * 全局添加
 * push replace 回调参数
 */
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = Router.prototype.replace
Router.prototype.replace = function push(location) {
  return originalReplace.call(this, location).catch(err => err)
}

