<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div style="width: 100%; height: 20rem;">
      <split-me n="2">
        <oc-molecule-vtkjs slot="0" v-bind:cjson.prop="molecules[0]" />
        <oc-molecule-vtkjs slot="1" v-bind:cjson.prop="molecules[1]" />
      </split-me>
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
