// store.js
import Vue from 'vue';
import Vuex from 'vuex';

import state from './userStates.js';
import getters from './userGetters.js';
import mutations from './userMutations.js';
import actions from './userActions.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});