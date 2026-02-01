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
     <Card
    @primary="goProjects"
    @secondary="bookSlot"
  />
  </div>
</template>

<script setup>
import { Motion } from "motion-v";

import HeroSlider from "@/components/header/HeroSlider.vue";
import LatestProjects from "@/components/header/LatestProjects.vue";
import ProfilHeader from "@/components/header/ProfilHeader.vue";

import Competences from "../components/header/competences.vue";
import Card from "@/components/header/Card.vue";

const goProjects = () => {
  // exemple : scroller vers la section projets ou router push
  // router.push('/projects')
  console.log("Voir mes projets");
};

const bookSlot = () => {
  console.log("Réserver un créneau");
};
</script>
