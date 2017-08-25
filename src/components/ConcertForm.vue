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
    <button type="submit">Add concert</button>
  </form>
</template>

<script>
export default {
  name: 'concert-form',
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // },
  methods: {
    addConcert (e) {
      console.log(e)
      const { year, month, day, bands } = e.target.elements
      const elements = { year, month, day, bands }
      // this.$emit('addConcert', { year, month, day, bands })
      // const elements = e.target.elements
      const concert = Object.keys(elements).reduce((acc, key) => {
        const value = elements[key] ? elements[key].value : null
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
