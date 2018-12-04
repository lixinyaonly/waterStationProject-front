<template>
  <div id="app">
    <el-container>
    <el-aside width="200px"><menu-nav></menu-nav></el-aside>
    <el-container>
      <el-header>vue测试</el-header>
      <el-main><router-view/></el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
import menuNav from "./components/menu.vue";
export default {
  name: "App",
  components: {
    menuNav
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
  min-width: 150px;
}
</style>
