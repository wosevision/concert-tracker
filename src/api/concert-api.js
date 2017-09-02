/**
 * Mocking client-server processing
 */
import all from './concerts.json'

// localStorage key token
export const STORAGE_KEY = 'concert-tracker-storage'

// for testing
// window.localStorage.clear()
const localStorage = (JSON.parse(window.localStorage.getItem(STORAGE_KEY) || null) || { all })

export default {
  getConcerts (cb) {
    setTimeout(() => cb(localStorage.all), 100)
  }
}
