<template>
  <div>
    <div>
      <h1 style="margin-top: 40px">Listado</h1>

      <table class="table table-striped">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Cedula</th>
        </tr>
        <tr v-for="estudiante in listaEstudiantes" :key="estudiante.div">
          <td>{{ estudiante.id }}</td>
          <td>{{ estudiante.nombre }}</td>
          <td>{{ estudiante.apellido }}</td>
          <td>{{ estudiante.cedula }}</td>
        </tr>
      </table>

      <button
        type="button"
        class="btn btn-primary btn-lg"
        @click="agregarEstudiante"
      >
        Actualizar
      </button>
    </div>
  </div>
</template>

<script>
import { buscarEstudianteFachada } from "../helpers/estudianteClient";

export default {
  data() {
    return {
      listaEstudiantes: [],
    };
  },
  methods: {
    async agregarEstudiante() {
      this.listaEstudiantes = [];
      console.log("Hijo " + this.lista);
      this.lista.forEach(async (cedula) => {
        const data = await buscarEstudianteFachada(cedula);
        this.listaEstudiantes.push(data);
      });
    },
  },
  props: {
    lista: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>