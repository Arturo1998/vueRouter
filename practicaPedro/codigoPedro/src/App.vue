<script setup>
import { RouterView, RouterLink, useRouter } from "vue-router";
//import { onBeforeUnmount } from "vue";
//import { borraLocalStorage } from "@/shared/LocalStorage/LocalStorage";
import NavBar from "@/elementos/components/NavBar.vue";

/*
onBeforeUnmount(() => {
  borraLocalStorage("permitido");
  console.log("Nos vamos");
});
*/
const router = useRouter();
</script>

<template>
  <div>
    <header>
      <NavBar
        titulo="Menú Principal"
        :links="[
          { name: 'Inicio' },
          { name: 'Sobre Nosotros' },
          { name: 'Login' },
          { name: 'SubMenu' },
        ]"
      />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
