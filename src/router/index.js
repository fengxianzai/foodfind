import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Index from '@/components/index/index'
import Order from '@/components/order/order'
import Mine from '@/components/mine/mine'
import login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App, //顶层路由，对应index.html
      children: [
        // 根路径
        {
          path: '',
          redirect: '/index'
        },
        // 首页
        {
          path: '/index',
          component: Index
        },

        // 订单
        {
          path: '/order',
          component: Order
        },
        // 我的
        {
          path: '/mine',
          component: Mine
        },
      ]
    },
    {
      path: '/login',
      component: login 
    }  
  ]
})
