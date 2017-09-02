import Vue from 'vue'
import Vuex from 'vuex'

import concerts from './modules/concerts/store'
import plugins from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    concerts
  },
  plugins
})
