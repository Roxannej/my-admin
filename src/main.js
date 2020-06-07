import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index.js'

import axios from '../src/config/httpConfig'

Vue.prototype.$http = axios
Vue.use(Element)
Vue.config.productionTip = false

// 首页的路由拦截
router.beforeEach((to, from, next) => {
  if (!store.state.UserToken) {
    if (
      to.matched.length > 0 &&
      !to.matched.some(record => record.meta.require)
    ) {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    if (!store.state.permission.permissionList) {
      store.dispatch('perssion/FETCH_PERMISSION').then(() => {
        next({ path: to.path })
      })
    } else {
      if (to.path !== '/login') {
        next()
      } else {
        next(from.fullPath)
      }
    }
  }
})

router.afterEach((to, from, next) => {
  // 这是什么？？？
  var routerList = to.matched
  store.commit('setCrumbList', routerList)
  store.commit('permission/SET_CURRENT_MENU', to.name)
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
