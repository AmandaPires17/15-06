<script setup>
import ListaComp from "@/components/ListaComp.vue";
import MenuLateral from "@/components/MenuLateral.vue";
</script>
<template>
  <ListaComp />
  <main>
    <RouterView />
  </main>
  <MenuLateral />
</template>

<style>
@import "@/assets/base.css";
#app {
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;
  font-weight: normal;
  background-color: #fcaee1;
}

main {
  height: 100%;
}
</style>
