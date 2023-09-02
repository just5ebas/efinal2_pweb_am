<template>
  <div>
    <div>
      <h1>Token</h1>

      <div class="form-floating mb-3">
        <input type="text" class="form-control" v-model="semilla" />
        <label for="floatingInputDisabled">Semilla</label>
      </div>
      <div class="form-floating mb-3">
        <textarea class="form-control" v-model="tiempo"></textarea>
        <label for="floatingTextareaDisabled">Tiempo de vigencia</label>
      </div>

      <div class="form-floating mb-3">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2Disabled"
          style="height: 100px"
          v-model="token"
          disabled
        ></textarea>
        <label for="floatingTextarea2Disabled">Token</label>
      </div>

      <button
        type="button"
        class="btn btn-primary btn-lg"
        @click="obtenerToken"
      >
        Generar
      </button>
    </div>
  </div>
</template>

<script>
import { obtenerTokenFachada } from "../helpers/tokenClient";
export default {
  data() {
    return {
      semilla: "",
      tiempo: "",
      token: "",
    };
  },
  methods: {
    async obtenerToken() {
      const data = {
        semilla: this.semilla,
        tiempo: this.tiempo,
      };
      this.token = await obtenerTokenFachada(data);
    },
  },
};
</script>

<style>
</style>