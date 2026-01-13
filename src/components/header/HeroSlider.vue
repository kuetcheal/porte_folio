<script setup>
import { ref } from 'vue'

const carouselRef = ref(null)
const activeIndex = ref(0)
const intervalMs = 4000 // 4 secondes

const slides = [
  {
    id: 1,
    title: "Bonjour, je suis Alex Stephane KUETCHE",
    subtitle: "Développeur Web Full-Stack expérimenté",
    description:
      "Je conçois et développe des applications modernes, performantes et sécurisées pour les entreprises et les particuliers.",
    ctaLabel: "Voir mes projets",
    image: new URL('@/assets/infos1.jpg', import.meta.url).href
  },
  {
    id: 2,
    title: "Création d'applications modernes et évolutives",
    subtitle: "Front-end & Back-end sur mesure",
    description:
      "De l’idée au déploiement, je t’accompagne sur toutes les étapes de ton projet avec des technologies modernes.",
    ctaLabel: "Découvrir mes services",
    image: new URL('@/assets/infos2.jpg', import.meta.url).href
  },
  {
    id: 3,
    title: "Des solutions adaptées à tes objectifs",
    subtitle: "Performance • Sécurité • Design",
    description:
      "Chaque projet est conçu pour être performant, sécurisé et agréable à utiliser, sur desktop comme sur mobile.",
    ctaLabel: "Me contacter",
    image: new URL('@/assets/infos3.jpg', import.meta.url).href
  }
]

const handleChange = (newIndex) => {
  activeIndex.value = newIndex
}

const goToSlide = (index) => {
  if (carouselRef.value) {
    carouselRef.value.setActiveItem(index)
    activeIndex.value = index
  }
}
</script>

<template>
  <section class="hero-section">
    <!-- SLIDER ELEMENT PLUS -->
    <el-carousel
      ref="carouselRef"
      :interval="intervalMs"
      arrow="never"
      indicator-position="none"
      height="100vh"
      @change="handleChange"
      class="hero-carousel"
    >
      <el-carousel-item
        v-for="(slide, index) in slides"
        :key="slide.id"
      >
        <div
          class="hero-slide"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div class="hero-overlay"></div>

          <!-- container centré -->
          <div class="hero-inner">
            <!-- contenu texte -->
            <div class="hero-content">
              <p class="hero-eyebrow">
                Développeur Full-Stack • Expertise et passion
              </p>
              <h1 class="hero-title">
                {{ slide.title }}
              </h1>
              <p class="hero-subtitle">
                {{ slide.subtitle }}
              </p>
              <p class="hero-description">
                {{ slide.description }}
              </p>

              <div class="hero-actions">
                <el-button
                  type="danger"
                  size="large"
                  round
                >
                  {{ slide.ctaLabel }}
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>

    <!-- PAGINATION EN BARRES DANS LE CONTAINER -->
    <div class="hero-pagination-wrapper">
      <div class="hero-pagination">
        <button
          v-for="(slide, index) in slides"
          :key="slide.id"
          class="hero-bar"
          :class="{
            active: index === activeIndex,
            completed: index < activeIndex
          }"
          :style="{ '--duration': intervalMs + 'ms' }"
          @click="goToSlide(index)"
        >
          <span class="hero-bar-fill"></span>
        </button>
      </div>
    </div>

    <!-- ICÔNE SCROLL DOWN AU CENTRE AVEC DOUBLE FLÈCHE -->
    <div class="scroll-indicator">
      <div class="mouse">
        <i class="fa-solid fa-angles-down"></i>
      </div>
      <span class="scroll-text">Scroll</span>
    </div>
  </section>
</template>

<style scoped>
/* FULL BLEED : la section prend toute la largeur écran */
.hero-section {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin-left: calc(50% - 50vw);
}

/* carousel plein écran */
.hero-carousel {
  height: 100%;
}

/* slide avec image de fond */
.hero-slide {
  position: relative;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

/* overlay sombre */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.7) 35%,
      rgba(0, 0, 0, 0.4) 60%,
      rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 1;
}

/* container centré (comme ton site) */
.hero-inner {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
}

/* contenu texte à gauche */
.hero-content {
  max-width: 550px;
  color: #ffffff;
}

.hero-eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.78rem;
  margin-bottom: 0.9rem;
  color: #f97373;
}

.hero-title {
  font-size: 2.6rem;
  line-height: 1.15;
  font-weight: 800;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.05rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.hero-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #e5e7eb;
  max-width: 480px;
  margin-bottom: 1.7rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

/* ====== PAGINATION BARRES DANS LE CONTAINER ====== */
.hero-pagination-wrapper {
  position: absolute;
  left: 0;
  bottom: 3.5rem;
  width: 100%;
  z-index: 3;
}

.hero-pagination {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  gap: 0.6rem;
}

.hero-bar {
  position: relative;
  width: 70px;
  height: 3px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.25); /* fond gris clair */
  padding: 0;
}

/* barre de remplissage rouge */
.hero-bar-fill {
  position: absolute;
  inset: 0;
  width: 0;
  background: #ff4b4b;
  transform-origin: left center;
}

/* slide en cours : anim de 0 à 100% sur la durée du slide */
.hero-bar.active .hero-bar-fill {
  animation: barProgress var(--duration, 6000ms) linear forwards;
}

/* slides déjà passés : barre remplie */
.hero-bar.completed .hero-bar-fill {
  width: 100%;
}

/* animation de remplissage */
@keyframes barProgress {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* ====== SCROLL INDICATOR AVEC DOUBLE FLÈCHE ====== */
.scroll-indicator {
  position: absolute;
  left: 50%;
  bottom: 4rem;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  color: #f9fafb;
}

.mouse {
  width: 36px;
  height: 60px;
  border-radius: 20px;
  border: 2px solid #f9fafb;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.mouse i {
  font-size: 1.1rem;
  animation: scrollArrow 1.2s infinite;
}

.scroll-text {
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

@keyframes scrollArrow {
  0% {
    opacity: 0;
    transform: translateY(-4px);
  }
  40% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(6px);
  }
}

/* ====== RESPONSIVE ====== */
@media (max-width: 900px) {
  .hero-inner {
    padding: 0 1.5rem;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    max-width: 100%;
  }

  .hero-pagination {
    padding: 0 1.5rem;
  }
}
</style>
