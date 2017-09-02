<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li v-for="(concert, index) in concerts" :key="index">
        <strong>Year:</strong> {{ concert.year }}
        |
        <strong>Month:</strong> {{ concert.month }}
        |
        <strong>Day:</strong> {{ concert.day }}
        |
        <strong>Bands:</strong> {{ concert.bands }}
      </li>
    </ul>
    <concert-form @addConcert="addConcert"></concert-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ConcertForm from './components/ConcertForm'

import * as actions from './store/modules/concerts/actions'
import * as getters from './store/modules/concerts/store'

export default {
  name: 'app',
  components: {
    ConcertForm
  },
  computed: mapGetters({
    concerts: getters.allConcerts
  }),
  methods: mapActions([
    actions.addConcert
  ]),
  created () {
    this.$store.dispatch(actions.getAllConcerts)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
