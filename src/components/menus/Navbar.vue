<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const mobileMenu = ref(false)

const menuItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Parcours', path: '/parcours' },
  { name: 'Projets', path: '/projets' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const goTo = (path) => {
  mobileMenu.value = false
  router.push(path)
}
</script>

<template>
  <header class="navbar">
    <div class="navbar-inner">
      <!-- Logo -->
      <div class="logo">
        <router-link to="/">GK</router-link>
      </div>

      <!-- Liens desktop -->
      <nav class="nav-links">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
        >
          {{ item.name }}
        </router-link>
      </nav>

      <!-- Bouton mobile -->
      <div class="mobile-button">
        <el-button
          icon="Menu"
          circle
          type="primary"
          @click="mobileMenu = true"
        />
      </div>
    </div>

    <!-- Drawer mobile -->
    <el-drawer
      v-model="mobileMenu"
      direction="ltr"
      size="70%"
      title="Menu"
    >
      <el-menu>
        <el-menu-item
          v-for="item in menuItems"
          :key="item.path"
          @click="goTo(item.path)"
        >
          {{ item.name }}
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </header>
</template>

<style scoped>
.navbar {
  width: 100%;
  background: #050814;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.6);
}

.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.2rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo a {
  font-size: 1.9rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  color: #ffffff;
  text-decoration: none;
}

/* liens desktop */
.nav-links {
  display: flex;
  gap: 2.2rem;
}

.nav-link {
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.05rem;
  text-decoration: none;
  color: #f5f5f5;
  position: relative;
}

/* lien actif = rouge comme sur le modèle */
.nav-link.router-link-exact-active {
  color: #ff4b4b;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.35rem;
  width: 0;
  height: 2px;
  background: #ff4b4b;
  transition: width 0.25s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Mobile */
.mobile-button {
  display: none;
}

@media (max-width: 900px) {
  .nav-links {
    display: none;
  }
  .mobile-button {
    display: block;
  }
}
</style>
