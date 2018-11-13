import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/cm_user'
import task from './modules/cm_task'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    task
  }
})
