// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
console.log(123)

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
console.log(123)
  
  const isLogin = window.localStorage.token
  if (to.path === '/login') {
    if (isLogin) {
      next({
        path: '/index'
      })
    } else {
      next()
    }
  } else {
    if (isLogin) {
      next()
    } else {
      const toPath = to.path
      next({
        path: '/login',
        query: {
          url: toPath
        }
      })
    }
  }
})
// router.beforeEach((to, from, next) => {
//   const isLogin = window.localStorage.token
  
//   if (to.path === 'login') {
//     if (isLogin) {
//       next({
//         path: '/index'
//       })
//     } else {
//       next()
//     }
//   } else {
//     if (isLogin) {
//       next()
//     } else {
//       const toPath = to.path
//       next({
//         path: 'login',
//         query: {
//           url: toPath
//         }
//       })
//     }
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
