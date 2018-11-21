// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import '@/assets/js/jquery.min.js'
// import '@/assets/js/bootstrap.min.js'
// import '@/assets/js/jquery.fullPage.min.js'
// import '@/assets/js/fullpage.easing.js'
// import '@/assets/js/wow.min.js'
// import '@/assets/js/index.js'
// import '@/assets/js/jquery.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})