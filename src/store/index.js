import Vue from 'vue'
import Vuex from 'vuex'

import loginPage from '../layouts/LoginPage/modules'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    loginPage,
  },
  strict: debug,
})
