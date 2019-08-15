import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./layouts/HomePage')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./layouts/LoginPage')
    },
  ]
})
