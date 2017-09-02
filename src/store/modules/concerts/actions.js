import concertApi from '../../../api/concert-api'
import * as mutations from './mutations'

export const getAllConcerts = 'getAllConcerts'
export const addConcert = 'addConcert'

// actions
export default {

  [getAllConcerts] ({ commit }) {
    concertApi.getConcerts(concerts => {
      commit(mutations.RECEIVE_CONCERTS, { concerts })
    })
  },

  [addConcert] ({ commit }, { year, month, day, bands }) {
    if (year && month && day && bands) {
      commit(mutations.ADD_CONCERT, { year, month, day, bands })
    }
  }

}
