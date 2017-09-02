<template>
  <fieldset>
    <label>Bands
      <input v-for="(band, index) in bands" :key="index" name="bands" placeholder="e.g. modest mouse" @keydown.prevent.enter="addBand" />
    </label>
  </fieldset>
</template>

<script>
export default {
  name: 'concert-form-bands',
  props: ['bands'],
  methods: {
    addBand () {
      this.$emit('addBand')
    }
  }
}
</script>

<style scoped>
</style>
