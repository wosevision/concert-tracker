/**
 * Mocking client-server processing
 */
import _concerts from './concerts.json'

// localStorage key token
export const STORAGE_KEY = 'concert-tracker-storage'

// for testing
// window.localStorage.clear()

const concerts = [...(JSON.parse(window.localStorage.getItem(STORAGE_KEY) || null) || _concerts)]

export default {
  getConcerts (cb) {
    setTimeout(() => cb(concerts), 100)
  }
}
