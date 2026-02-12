<script setup>
const bgHero = new URL("@/assets/infos1.jpg", import.meta.url).href;
</script>

<template>
  <section
    class="contact-hero"
    :style="{ backgroundImage: `url(${bgHero})` }"
  >
    <div class="contact-hero-overlay"></div>

    <div class="contact-hero-inner">
      <h1 class="contact-hero-title">Actualités Tech, Articles & Tutoriels</h1>
      <p class="contact-hero-subtitle">
    Découvrez des analyses approfondies et des retours d'expérience sur mes projets informatiques.
      </p>
    </div>
  </section>
</template>

<style scoped>
/* ========= HERO ========= */

.contact-hero {
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  height: 400px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.85)
  );
}

.contact-hero-inner {
  position: relative;
  text-align: center;
  max-width: 720px;
  padding: 0 1.5rem;
}

.contact-hero-title {
  font-size: 2.7rem;
  font-weight: 800;
  margin-bottom: 0.7rem;
}

.contact-hero-subtitle {
  font-size: 1.7rem;
  line-height: 1.7;
  color: #e5e7eb;
}

/* ========= RESPONSIVE ========= */

@media (max-width: 900px) {
  .contact-hero {
    height: 350px;
  }

  .contact-hero-title {
    font-size: 1.5rem !important;
  }
}

@media (max-width: 600px) {
  .contact-hero-title {
    font-size: 1.6rem !important;
  }
  .contact-hero-subtitle{
     font-size: 1.2rem !important;
  }
}
</style>
