<template>
  <div v-if="!iniciado">
    <div>
      <h1>Login Usuarios</h1>
      <div>
        <input
          type="text"
          placeholder="Nombre"
          ref="inputNombre"
          v-model="nombre"
        />
        <input type="text" placeholder="Apellido" v-model="apellido" />
      </div>
      <div class="">
        <button @click="verDatos">LOG IN</button>
      </div>
    </div>
  </div>
  <div v-else>
    <button @click="cerrarSesion">Log Out</button>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref, watchEffect } from "vue";
import {
  leeLocalStorage,
  borraLocalStorage,
} from "../../shared/LocalStorage/LocalStorage";

let iniciado = ref(false);

watchEffect(() => {
  if (leeLocalStorage("permitido") == "Sí") {
    return (iniciado.value = true);
  } else {
    return (iniciado.value = false);
  }
});

function cerrarSesion() {
  borraLocalStorage("permitido");
  router.push({
    name: "Inicio",
  });
}

const router = useRouter();
let nombre = ref("");
let apellido = ref("");
const verDatos = () =>
  router.push({
    name: "Usuario",
    params: { nombre: nombre.value },
    query: { apellido: apellido.value },
  });
</script>
<style></style>
