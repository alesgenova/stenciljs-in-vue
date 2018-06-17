<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div style="display: flex;">
      <div style="width: 50%; height: 40rem; position:relative">
        <oc-molecule-moljs v-bind:cjson.prop="molecules[0]" />
      </div>
      <div style="width: 50%; height: 40rem; position:relative">
        <oc-molecule-moljs v-bind:cjson.prop="molecules[1]" />
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { BenzeneWithHomo, Caffeine } from '@openchemistry/sample-data'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data: function() {
    return {
      molecules: [
        BenzeneWithHomo,
        Caffeine
      ]
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
