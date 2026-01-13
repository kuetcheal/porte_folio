<script setup>
import DefaultLayout from './layouts/Default.vue'
</script>

<template>
  <DefaultLayout>
    <!-- Ici s’affichent tes pages (Accueil, Parcours, etc.) -->
    <router-view />
  </DefaultLayout>
</template>

<style scoped>
/* Tu pourras enlever tout ce qui venait du template Vite */
</style>
