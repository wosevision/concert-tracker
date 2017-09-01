import * as types from './types'
import concerts from './concerts.json'

// localStorage key token
export const STORAGE_KEY = 'concert-tracker-storage'
// for testing
// if (navigator.userAgent.indexOf('PhantomJS') > -1) {
window.localStorage.clear()
// }

export const state = {
  concerts: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || null) || concerts
}

export const mutations = {
  [types.ADD_CONCERT] (state, { year, month, day, bands }) {
    state.concerts.push({ year, month, day, bands })
  },

  [types.DELETE_CONCERT] (state, { concert }) {
    state.concerts.splice(state.concerts.indexOf(concert), 1)
  },

  [types.EDIT_CONCERT] (state, { concert, value }) {
    const { year, month, day, bands } = value
    Object.assign(concert, { year, month, day, bands })
  }
}
