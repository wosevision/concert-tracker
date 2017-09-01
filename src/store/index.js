import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import concerts from './modules/concerts'
import plugins from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    concerts
  },
  plugins
})
