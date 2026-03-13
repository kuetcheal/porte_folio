<script setup>
import Navbar from '../components/menus/Navbar.vue'
import AppFooter from '../components/menus/Footer.vue'
</script>

<template>
  <div class="common-layout">
    <Navbar />

    <div class="app-shell">
      <main class="app-main">
        <div class="main-inner">
          <slot />
        </div>
      </main>

      <footer class="app-footer">
        <AppFooter />
      </footer>
    </div>
  </div>
</template>

<style scoped>
.common-layout {
  min-height: 100vh;
  background: #050816;
  color: #fff;
  overflow-x: hidden;
}

.app-shell {
  min-height: 100vh;
}

.app-main {
  padding: 0 1.5rem 2rem;
}

.main-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.app-footer {
  padding: 0;
  background: #1f2429;
  border-top: 1px solid #353b41;
}
</style>