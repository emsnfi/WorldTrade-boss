import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import VueRouter from 'vue-router'
//import trackService from '@/js/trackservice.js'
import test from '@/components/test'

Vue.use(Router)
// Vue.use(VueRouter)
var router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: test,
      meta: {
        label: '首頁',
      }
    },
    {
      path: '/login',
      name: 'login',
      component: test,
      meta: { trackedTitle: '登入頁' }
    }
  ]
})
//router.afterEach(route => {
  // 時間稍微延遲以避免抓取到前個 window.location.href 位置
  //setTimeout(() => {
    //pageUserTrack()
  //}, 500)
//})

export default router 
