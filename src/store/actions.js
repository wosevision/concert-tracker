import * as types from './types'

export const addConcert = ({ commit }, { year, month, day, bands }) => {
  if (year && month && day && bands) {
    commit(types.ADD_CONCERT, { year, month, day, bands })
  }
}
