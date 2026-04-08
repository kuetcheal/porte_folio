<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Motion } from 'motion-v'

const router = useRouter()

const carouselRef = ref(null)
const activeIndex = ref(0)
const intervalMs = ref(6000)
const textAnimKey = ref(0)

const slides = [
  {
    id: 1,
    title: "Bonjour, je suis Alex Stephane KUETCHE",
    subtitle: "Développeur Web Full-Stack",
    description:
      "Je conçois et développe des applications modernes, performantes et sécurisées ainsi que les hebergements.",
    ctaLabel: "Voir mes projets",
    ctaRoute: "/Projets",
    image: new URL('@/assets/infos1.jpg', import.meta.url).href
  },
  {
    id: 2,
    title: "Création d'applications web et mobiles modernes et évolutives",
    subtitle: "Front-end & Back-end sur mesure",
    description:
      "De l’idée au déploiement, je t’accompagne sur toutes les étapes de ton projet avec des technologies modernes.",
    ctaLabel: "Voir mes compétences",
    ctaRoute: "/services",
    image: new URL('@/assets/bureau.jpeg', import.meta.url).href
  },
  {
    id: 3,
    title: "Des solutions adaptées à tes objectifs",
    subtitle: "Performance • Sécurité • Design",
    description:
      "Chaque projet est conçu pour être performant, sécurisé et agréable à utiliser, sur desktop comme sur mobile.",
    ctaLabel: "Me contacter",
    ctaRoute: "/contact",
    image: new URL('@/assets/infos3.jpg', import.meta.url).href
  }
]

const handleChange = (newIndex) => {
  activeIndex.value = newIndex
  textAnimKey.value++
}

const goToSlide = (index) => {
  if (carouselRef.value) {
    carouselRef.value.setActiveItem(index)
    activeIndex.value = index
    textAnimKey.value++
  }
}

const handleCtaClick = (slide) => {
  if (slide?.ctaRoute) {
    router.push(slide.ctaRoute)
  }
}
</script>

<template>
  <section class="hero-section">
    <el-carousel
      ref="carouselRef"
      :interval="intervalMs"
      :pause-on-hover="false"
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

          <div class="hero-inner">
            <div
              class="hero-content"
              :key="`${slide.id}-${textAnimKey}`"
            >
              <Motion
                tag="h1"
                class="hero-title"
                :initial="{ opacity: 0, y: 28 }"
                :animate="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.55, delay: 0.1, ease: 'easeOut' }"
              >
                {{ slide.title }}
              </Motion>

              <Motion
                tag="p"
                class="hero-subtitle"
                :initial="{ opacity: 0, y: 28 }"
                :animate="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.55, delay: 0.35, ease: 'easeOut' }"
              >
                {{ slide.subtitle }}
              </Motion>

              <Motion
                tag="p"
                class="hero-description"
                :initial="{ opacity: 0, y: 28 }"
                :animate="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.55, delay: 0.6, ease: 'easeOut' }"
              >
                {{ slide.description }}
              </Motion>

              <Motion
                tag="div"
                class="hero-actions"
                :initial="{ opacity: 0, y: 28 }"
                :animate="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.55, delay: 0.85, ease: 'easeOut' }"
              >
                <el-button
                  type="danger"
                  size="large"
                  round
                  class="hero-btn"
                  @click="handleCtaClick(slide)"
                >
                  {{ slide.ctaLabel }}
                </el-button>
              </Motion>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>

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

    <div class="scroll-indicator">
      <div class="mouse">
        <i class="fa-solid fa-angles-down"></i>
      </div>
      <span class="scroll-text">Scroll</span>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin-left: calc(50% - 50vw);
}

.hero-carousel {
  height: 100%;
}

.hero-slide {
  position: relative;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scale(1.01);
}

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

.hero-content {
  max-width: 550px;
  color: #fff;
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
}

.hero-btn {
  min-width: 170px;
  font-weight: 700;
 
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.hero-btn:hover {
  transform: translateY(-2px);
 
}

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
  background: rgba(255, 255, 255, 0.25);
}

.hero-bar-fill {
  position: absolute;
  inset: 0;
  width: 0;
  background: #ff4b4b;
}

.hero-bar.active .hero-bar-fill {
  animation: barProgress var(--duration, 4000ms) linear forwards;
}

.hero-bar.completed .hero-bar-fill {
  width: 100%;
}

@keyframes barProgress {
  from { width: 0 }
  to { width: 100% }
}

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
  0% { opacity: 0; transform: translateY(-4px) }
  40% { opacity: 1; transform: translateY(0) }
  100% { opacity: 0; transform: translateY(6px) }
}

@media (max-width: 900px) {
  .hero-title { font-size: 2rem; }
  .hero-content { max-width: 100%; }
  .hero-description { max-width: 100%; }
}
</style>