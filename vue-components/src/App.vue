<template>
  <div id="app">
      <v-button label="Hello Button" color="white"></v-button>
  </div>
</template>

<script>
import Button from './components/Button/Button.vue';
export default {
  name: 'app',
  components: {
      vButton: Button,
  }
}
</script>

<style lang="scss">
</style>
