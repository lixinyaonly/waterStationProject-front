<template>
  <div id="app">
	  <h1>鑫利康源</h1>
    <menu-nav></menu-nav>
    <router-view/>
  </div>
</template>

<script>
import menuNav from './components/menu.vue'
export default {
  name: "App",
  components: {
    menuNav
  }
};
</script>

<style>
body{
	margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
