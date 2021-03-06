// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

//Vuex store
import store from './store'

Vue.config.productionTip = false

//Setup axios to be available globally through Vue
Vue.axios = Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:8081/api'
})

Vue.use(BootstrapVue)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
