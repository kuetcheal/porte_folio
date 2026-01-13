<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const mobileMenu = ref(false)
const scrolled = ref(false)

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

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- transparent au début, bg après 50px -->
  <header class="navbar" :class="{ scrolled }">
    <div class="navbar-inner">
      <div class="logo">
        <router-link to="/">K A S</router-link>
      </div>

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

      <button class="burger-btn" @click="mobileMenu = true">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>

    <!-- Menu mobile -->
    <div
      class="mobile-overlay"
      :class="{ 'is-open': mobileMenu }"
      @click.self="mobileMenu = false"
    >
      <div class="mobile-panel">
        <div class="mobile-header">
          <span class="mobile-logo">K A S</span>
          <button class="close-btn" @click="mobileMenu = false">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <nav class="mobile-menu">
          <button
            v-for="item in menuItems"
            :key="item.path"
            class="mobile-item"
            :class="{ active: route.path === item.path }"
            @click="goTo(item.path)"
          >
            {{ item.name }}
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* ===== NAVBAR ===== */

/* Transparent au début */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 50;
  background: transparent;
  box-shadow: none;
  transition: background 0.3s ease;
}

/* Quand on scroll > 50px */
.navbar.scrolled {
  background: #050814;
}

.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.2rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo KAS en écriture spéciale */
.logo a {
  font-family: 'Great Vibes', cursive;
  font-size: 2.4rem;
  font-weight: bold;
  letter-spacing: 0;
  color: #ffffff;
  text-decoration: none;
}

/* ==== MENU DESKTOP ==== */

.nav-links {
  display: flex;
  align-items: center;
  gap: 0;
}

.nav-link {
  position: relative;
  font-weight: bold;
  font-size: 1.25rem;
  letter-spacing: 0.05rem;
  text-decoration: none;
  color: #f5f5f5;
  padding: 0 1.4rem;
}

/* Trait vertical entre les éléments (sauf le premier) */
.nav-link + .nav-link {
  border-left: 1px solid rgba(255, 255, 255, 0.3);
}

/* lien actif */
.nav-link.router-link-exact-active {
  color: #ff4b4b;
}

/* soulignement animé */
.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.4rem;
  width: 0;
  height: 2px;
  background: #ff4b4b;
  transition: width 0.25s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* ==== BURGER MOBILE ==== */
.burger-btn {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  color: #ffffff;
}

/* ==== OVERLAY + PANNEAU MOBILE ==== */
.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: flex-start;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.25s ease;
  z-index: 40;
}

.mobile-overlay.is-open {
  pointer-events: auto;
  opacity: 1;
}

.mobile-panel {
  width: 75%;
  max-width: 360px;
  height: 100%;
  background: #12151b;
  padding: 1.5rem 1.75rem;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.mobile-overlay.is-open .mobile-panel {
  transform: translateX(0);
}

.mobile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
}

.mobile-logo {
  font-size: 1.7rem;
  font-weight: 700;
  color: #ffffff;
  font-family: 'Great Vibes', cursive;
}

.close-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  color: #ffffff;
}

/* ==== ITEMS DU MENU MOBILE ==== */
.mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}

.mobile-item {
  width: 100%;
  text-align: left;
  border: none;
  background: transparent;
  padding: 1rem 1.2rem;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.08rem;
  color: #ffffff;
  cursor: pointer;
}

.mobile-item.active {
  background: #2b2023;
  color: #ff4b4b;
}

.mobile-item:hover:not(.active) {
  background: #1a1e25;
}

/* ==== RESPONSIVE ==== */
@media (max-width: 900px) {
  .nav-links {
    display: none;
  }
  .burger-btn {
    display: block;
  }
}
</style>
