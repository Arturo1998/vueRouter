<script setup>
import { RouterView } from "vue-router";
import navBar from "./components/navBar.vue";
</script>

<template>
  <navBar />
  <h1>Esta es nuestra app</h1>
  <RouterView />
</template>

<style scoped></style>
