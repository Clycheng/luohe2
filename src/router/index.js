import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Loading from '@/components/Loading'
import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Loading',
      name: 'Loading',
      component: Loading
    }
  ]
})
