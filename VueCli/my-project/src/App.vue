<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <CompHeader />
    <CompFooter />
  </div>
</template>

<script>
import CompHeader from './components/CompHeader.vue';
import CompFooter from './components/CompFooter.vue';
export default {
  name: 'App',
  components: {
    CompHeader,
    CompFooter
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
