// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import userStore from './store/User/userStore.js'

import axios from 'axios'
Vue.prototype.$http = axios

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify);

import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify : new Vuetify(),
  store : userStore,
  components: { App },
  template: '<App/>'
})
