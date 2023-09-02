<template>
  <GuardarEstudiante @cedulaIngresada="guardarCedula($event)" />
  <ListadoEstudiantes :lista="lista" />
</template>

<script>
import GuardarEstudiante from "../components/GuardarEstudiante.vue";
import ListadoEstudiantes from "../components/ListadoEstudiantes.vue";
export default {
  components: {
    GuardarEstudiante,
    ListadoEstudiantes,
  },
  data() {
    return {
      lista: [],
    };
  },
  methods: {
    guardarCedula(cedula) {
      //console.log(cedula);
      this.lista.push(cedula);
      console.log(this.lista);
    },
  },
};
</script>

<style>
</style>