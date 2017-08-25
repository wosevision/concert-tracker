<template>
  <form @submit.prevent="addConcert">
    <label>
      Year
      <input type="number" value="2000" name="year" />
    </label>
    <label>
      Month
      <input type="number" value="9" name="month" />
    </label>
    <label>
      Day
      <input type="number" value="22" name="day" />
    </label>
    <fieldset>
      <label>Bands
        <input v-for="(band, index) in bands" :key="index" name="bands" placeholder="e.g. modest mouse" @keydown.prevent.enter="newBand" />
      </label>
    </fieldset>
    <button type="submit">Add concert</button>
  </form>
</template>

<script>
export default {
  name: 'concert-form',
  data () {
    return {
      bands: ['']
    }
  },
  methods: {
    newBand () {
      this.bands.push('')
    },
    addConcert (e) {
      const { year, month, day, bands } = e.target.elements
      const elements = { year, month, day, bands }
      const concert = Object.keys(elements).reduce((acc, key) => {
        let value
        switch (key) {
          case 'bands':
            value = Array.from(elements[key], v => v.value)
            break
          default:
            value = parseInt(elements[key].value)
        }
        if (value) {
          acc[key] = value
        }
        return acc
      }, {})
      this.$emit('addConcert', concert)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
