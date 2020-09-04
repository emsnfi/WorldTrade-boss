import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import VueRouter from 'vue-router'
//import trackService from '@/js/trackservice.js'
import layout from '@/components/layout'
import home from '@/components/home.vue'
import product from '@/components/product.vue'
import login from '@/components/customInfo'
Vue.use(Router)
// Vue.use(VueRouter)
var router = new Router({
  //mode:"history",
  routes: [
    {
      path: '/',
      name: 'layout',
      meta: {
        label: '首頁',
      },
      component: layout,
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'home',
          meta: {
            label: '首頁',
          },
          component: home,
        },
        {
          path: '/product',
          name: 'product',
          meta: {
            label: '產品',
          },
          component: product,
        },
        {
          path: '/login',
          name: 'login',
          meta: {
            label: '產品',
          },
          component: login,
        }
        ]
    }
  ]
})


export default router 
