<template>
  <div>
    <!-- Hero : souvent on l’anime moins, ou juste un fade -->
    <Motion
      tag="section"
      :initial="{ opacity: 0 }"
      :whileInView="{ opacity: 1 }"
      :transition="{ duration: 0.6 }"
      :viewport="{ once: true, amount: 0.3 }"
    >
      <HeroSlider />
    </Motion>

    <Motion
      tag="section"
      :initial="{ opacity: 0, y: 40 }"
      :whileInView="{ opacity: 1, y: 0 }"
      :transition="{ duration: 1.2, ease: 'easeOut' }"
      :viewport="{ once: true, amount: 0.25 }"
    >
      <ProfilHeader />
    </Motion>

    <Motion
      tag="section"
      :initial="{ opacity: 0, y: 40, scale: 0.97 }"
      :whileInView="{ opacity: 1, y: 0, scale: 1 }"
      :transition="{ duration: 1.4, ease: 'easeOut' }"
      :viewport="{ once: true, amount: 0.25 }"
    >
      <LatestProjects />
    </Motion>

    <Motion
      tag="section"
      :initial="{ opacity: 0, y: 30 }"
      :whileInView="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6, delay: 0.15, ease: 'easeOut' }"
      :viewport="{ once: true, amount: 0.25 }"
    >
      <Competences />
    </Motion>

    <!-- ✅ SECTION CARD FULL WIDTH avec image + fondu haut/bas -->
    <section class="card-bg-section">
      <!-- 🖼️ Background -->
      <div class="card-bg" aria-hidden="true"></div>

      <!-- 🌫️ Fondu haut -->
      <div class="card-bg-fade-top" aria-hidden="true"></div>

      <!-- 🌫️ Fondu bas -->
      <div class="card-bg-fade-bottom" aria-hidden="true"></div>

      <!-- Contenu au-dessus -->
      <div class="card-bg-content">
       <Card
  primaryText="Voir mes projets"
  secondaryText="Découvrir mon parcours"
  primaryTo="/projets"
  secondaryTo="/parcours"
/>

      </div>
    </section>
  </div>
</template>

<script setup>
import { Motion } from "motion-v";

import HeroSlider from "@/components/header/HeroSlider.vue";
import LatestProjects from "@/components/header/LatestProjects.vue";
import ProfilHeader from "@/components/header/ProfilHeader.vue";
import Competences from "@/components/header/competences.vue";
import Card from "@/components/header/Card.vue";

const goProjects = () => {
  console.log("Voir mes projets");
};

const bookSlot = () => {
  console.log("Réserver un créneau");
};
</script>

<style scoped>
/* ===== SECTION FULL WIDTH ===== */
.card-bg-section {
  position: relative;

  /* ✅ FULL WIDTH même si ton layout est centré ailleurs */
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  padding: 5rem 0 5rem;
  overflow: hidden;

  /* ⚠️ Mets ici EXACTEMENT la couleur de fond globale de ta page */
  background: #020617;
}

/* ===== IMAGE ===== */
.card-bg {
  position: absolute;
  inset: 0;

  background-image: url("@/assets/infos1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  transform: scale(1.05);
  opacity: 0.95;
}

/* ===== FONDU VERS LE HAUT ===== */
.card-bg-fade-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 180px;

  background: linear-gradient(
    to bottom,
    #020617 0%,
    rgba(2, 6, 23, 0.85) 40%,
    rgba(2, 6, 23, 0) 100%
  );

  pointer-events: none;
}

/* ===== FONDU VERS LE BAS ===== */
.card-bg-fade-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 220px;

  background: linear-gradient(
    to top,
    #020617 0%,
    rgba(2, 6, 23, 0.85) 40%,
    rgba(2, 6, 23, 0) 100%
  );

  pointer-events: none;
}

/* ===== CONTENU ===== */
.card-bg-content {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
}
</style>
