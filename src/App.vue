<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import GuardarEstudiantePage from "./modules/inscripcion/pages/GuardarEstudiantePage.vue";
import NavBar from "./modules/inscripcion/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
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
