import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import A from '@/views/page_a'
import B from '@/views/page_b'
import pageIndex from '@/views/index'
import ModuleA from '@/views/moduleA/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '/index',
        component: pageIndex,
        children: [{
          path: 'a',
          component: A
        }, {
          path: 'b',
          component: B
        }]
      }, {
        path: '/module-a',
        component: ModuleA
      }]
    }
  ]
})
