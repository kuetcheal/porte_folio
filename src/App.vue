<script setup>
import DefaultLayout from "./layouts/Default.vue";
import Cookies from "./components/cookies.vue";
</script>

<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
  <Cookies />
</template>

<style scoped>

</style>
