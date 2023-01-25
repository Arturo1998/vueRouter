<script setup>
import { useRoute } from "vue-router";
import { consulta } from "../../shared/API/consultaLogin";
const route = useRoute();
console.log(route.fullPath);
console.log(route.params.nombre);
console.log(route.query.apellido);
consulta(route.params.nombre, route.query.apellido);
</script>

<template>
  <div>
    <h1>Usuario: {{ route.params.nombre }}</h1>
    <h1>Apellido: {{ route.query.apellido }}</h1>
  </div>
</template>
<style scoped></style>
