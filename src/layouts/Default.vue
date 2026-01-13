<script setup>
import Navbar from '../components/menus/Navbar.vue'
import AppFooter from '../components/menus/Footer.vue'
</script>

<template>
  <div class="common-layout">
    <el-container direction="vertical" class="app-shell">
      <!-- HEADER -->
      <el-header class="app-header">
        <Navbar />
      </el-header>

      <!-- CONTENU PRINCIPAL -->
      <el-main class="app-main">
        <div class="main-inner">
          <slot />
        </div>
      </el-main>

      <!-- FOOTER -->
      <el-footer class="app-footer">
        <AppFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout {
  min-height: 100vh;
  background: #050816;
  color: #fff;
}

.app-header {
  padding: 0; /* padding géré dans le composant Navbar */
  background: #1f2429;
  border-bottom: 1px solid #353b41;
}

.app-main {
  padding: 2rem 1.5rem;
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
