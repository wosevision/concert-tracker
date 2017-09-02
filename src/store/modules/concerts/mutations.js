import * as types from './mutation-types'

// mutations
export default {
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