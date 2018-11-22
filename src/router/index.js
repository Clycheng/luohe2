import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Loading from '@/components/child/Loading'
import Header from '@/components/child/Header'
import Banner from "@/components/Banner"
import About from "@/components/About"
import Service from "@/components/Service"
import Case from "@/components/Case"
import Customer from "@/components/Customer"
import Contact from "@/components/Contact"
import Modal from "@/components/Modal"
import PageOne from '@/components/page/PageOne'



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
    },
    {
      path:'/Banner',
      name:"Banner",
      component:Banner
    },
    {
      path:'/About',
      name:"About",
      component:About
    },
    {
      path:'/Service',
      name:"Service",
      component:Service
    },
    {
      path:'/Case',
      name:"Case",
      component:Case
    },
    {
      path:'/Customer',
      name:"Customer",
      component:Customer
    },
    {
      path:'/Contact',
      name:"Contact",
      component:Contact
    },
    {
      path:'/page1',
      name:"PageOne",
      component:PageOne
    }
  ]
})
