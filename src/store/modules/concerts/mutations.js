export const RECEIVE_CONCERTS = 'RECEIVE_CONCERTS'
export const ADD_CONCERT = 'ADD_CONCERT'
export const DELETE_CONCERT = 'DELETE_CONCERT'
export const EDIT_CONCERT = 'EDIT_CONCERT'

// mutations
export default {
  [RECEIVE_CONCERTS] (state, { concerts }) {
    state.all = concerts
  },

  [ADD_CONCERT] (state, { year, month, day, bands }) {
    state.all.push({ year, month, day, bands })
  },

  [DELETE_CONCERT] (state, { concert }) {
    state.all.splice(state.all.indexOf(concert), 1)
  },

  [EDIT_CONCERT] (state, { concert, value }) {
    const { year, month, day, bands } = value
    Object.assign(concert, { year, month, day, bands })
  }
}
