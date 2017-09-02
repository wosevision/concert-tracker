import concertApi from '../../../api/concert-api'
import * as types from './mutation-types'

// actions
export default {

  getAllConcerts ({ commit }) {
    concertApi.getConcerts(concerts => {
      commit(types.RECEIVE_CONCERTS, { concerts })
    })
  },

  addConcert ({ commit }, { year, month, day, bands }) {
    if (year && month && day && bands) {
      commit(types.ADD_CONCERT, { year, month, day, bands })
    }
  }

}
