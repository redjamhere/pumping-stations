import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import Login from '@/components/Auth/login'
import Registration from '@/components/Auth/registration'
import Calculate from '@/components/calculate'
import Doc from '@/components/doc'
import About from '@/components/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/doc',
      name: 'doc',
      component: Doc
    },
    {
      path: '/calculate',
      name: 'calculate',
      component: Calculate
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
