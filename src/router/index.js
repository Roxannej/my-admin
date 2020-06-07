import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/index.vue'
import Login from '../views/login/Login.vue'
import NotFund from '@/views/errorPage/404'
import ForBidden from '@/views/errorPage/403'
import Layout from '@views/layout/index'

Vue.use(Router)

/* 初始路由 */

/* 以下是错误的 */

// const router = new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       component: Home
//     },
//     {
//       path: '/login',
//       name: 'Login',
//       component: Login
//     }
//   ]
// })
export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    }
  ]
})

/* 准备动态添加的路由 */
export const DynamicRoutes = [
  {
    path: '',
    component: Layout,
    name: 'Container',
    redirect: 'home',
    meta: {
      requiresAuth: true,
      name: '首页'
    },
    children: [
      {
        path: 'home',
        component: Home,
        name: 'home',
        meta: {
          name: '首页',
          icon: 'icon-home'
        }
      }
    ]
  },
  {
    path: '/403',
    component: ForBidden
  },
  {
    path: '*',
    component: NotFund
  }
]
