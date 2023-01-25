<script setup>
import { RouterView, RouterLink } from "vue-router";
import { onBeforeUnmount } from "vue";
import { borraLocalStorage } from "@/shared/LocalStorage/LocalStorage";
import NavBar from "@/elementos/components/NavBar.vue";

onBeforeUnmount(() => {
                    borraLocalStorage("permitido")
                    console.log("Nos vamos")});
</script>

<template>
 <div>
  <header>
    <NavBar titulo="Menú Principal" :links="['Inicio', 'Sobre Nosotros', 'SubMenu']"/>
    <RouterLink 
    :to="{ name: 'Usuario',
           params:{ nombre: 'Pedro'},
           query:{ apellido1 : 'Pereda', apellido2: 'Mellado' } }"
    > Usuario </RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
  
 </div>
</template>

<style scoped>

</style>
