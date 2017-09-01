import { STORAGE_KEY } from '../api/concert-api'
import createLogger from 'vuex/src/plugins/logger'

const localStoragePlugin = store => {
  store.subscribe((mutation, { concerts }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(concerts))
  })
}

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin]
