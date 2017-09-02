import mutations from './mutations'
import actions from './actions'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allConcerts: state => state.all
}

export default {
  state,
  getters,
  actions,
  mutations
}
