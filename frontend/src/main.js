// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './plugin/vee-validate'
import './plugin/base'
import vuetify from './plugin/vuetify'
import axios from 'axios'

Vue.prototype.$http = axios

// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
// Vue.use(Vuetify);

import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  store : store,
  components: { App },
  template: '<App/>'
})
