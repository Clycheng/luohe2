import Vue from 'vue'
import Router from 'vue-router'
import '../assets/js/jquery.min.js';
import '../assets/js/bootstrap.min.js';
import '../assets/css/bootstrap.min.css';
import '../assets/css/jquery.fullPage.css';
import '../assets/css/animate注释.css';
import '../assets/css/index.css';
import '../assets/css/font-awesome.min.css';

// import '../assets/css/loading.css';
// import './node_modules/bootstrap/dist/js/bootstrap.min.js';
import Index from '@/components/Index'
import Loading from '@/components/child/Loading'
import Header from '@/components/child/Header'
import Banner from "@/components/Banner"
import About from "@/components/About"
import Service from "@/components/Service"


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
    }
  ]
})
