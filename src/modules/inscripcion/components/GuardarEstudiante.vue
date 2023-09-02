<template>
  <div>
    <div>
      <h1>Estudiante</h1>

      <div class="form-floating mb-3">
        <input type="text" class="form-control" v-model="token" />
        <label for="floatingInputDisabled">Token</label>
      </div>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" v-model="nombre" />
        <label for="floatingInputDisabled">Nombre</label>
      </div>
      <div class="form-floating mb-3">
        <textarea class="form-control" v-model="apellido"></textarea>
        <label for="floatingTextareaDisabled">Apellido</label>
      </div>
      <div class="form-floating mb-3">
        <textarea class="form-control" v-model="cedula"></textarea>
        <label for="floatingTextareaDisabled">Cedula</label>
      </div>

      <button
        type="button"
        class="btn btn-primary btn-lg"
        @click="insertarEstudiante"
      >
        Guardar
      </button>
    </div>
  </div>
</template>

<script>
import { ingresarEstudianteFachada } from "../helpers/estudianteClient";
export default {
  data() {
    return {
      nombre: "",
      apellido: "",
      cedula: "",
      token: "",
    };
  },
  methods: {
    insertarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
      };
      ingresarEstudianteFachada(data);

      this.$emit("cedulaIngresada", this.cedula);

      this.clean();
    },
    clean() {
      this.nombre = "";
      this.apellido = "";
      this.cedula = "";
    },
  },
};
</script>

<style>
</style>