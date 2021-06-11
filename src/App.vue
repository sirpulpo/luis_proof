<template>
  <v-app>
    <app-bar
      @showMenu="drawer = $emit"
      class="mb-12 pb-12"
    />

    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>

  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import HelloWorld from './views/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    AppBar,
    HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
