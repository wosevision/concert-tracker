<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li v-for="(concert, index) in concerts" :key="index">{{ concert.bands }}</li>
    </ul>
    <concert-form @addConcert="addConcert"></concert-form>
  </div>
</template>

<script>
import ConcertForm from './components/ConcertForm'

export default {
  name: 'app',
  components: {
    ConcertForm
  },
  computed: {
    concerts () {
      return this.$store.state.concerts
    }
  },
  methods: {
    addConcert ({ year, month, day, bands }) {
      // const year = e.target.value
      // console.log(e)
      // if (year.trim()) {
      this.$store.commit('addConcert', { year, month, day, bands })
      // }
      // e.target.value = ''
    }
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
