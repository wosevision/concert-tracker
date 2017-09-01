import concertApi from '../../api/concert-api'
import * as types from '../types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allConcerts: state => state.all
}

// actions
const actions = {
  getAllConcerts ({ commit }) {
    concertApi.getConcerts(concerts => {
      commit(types.RECEIVE_CONCERTS, { concerts })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_CONCERTS] (state, { concerts }) {
    state.all = concerts
  },

  [types.ADD_CONCERT] (state, { year, month, day, bands }) {
    state.all.push({ year, month, day, bands })
  },

  [types.DELETE_CONCERT] (state, { concert }) {
    state.all.splice(state.all.indexOf(concert), 1)
  },

  [types.EDIT_CONCERT] (state, { concert, value }) {
    const { year, month, day, bands } = value
    Object.assign(concert, { year, month, day, bands })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
