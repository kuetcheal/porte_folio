<script setup lang="ts">
import Header from '../components/parcours/header.vue';
import CareerTimeline from '../components/parcours/CareerTimeline.vue'
import { Motion } from "motion-v"

</script>

<template>
  <div>
    <Header />
     <Motion
      tag="section"
      :initial="{ opacity: 0, y: 40 }"
      :whileInView="{ opacity: 1, y: 0 }"
      :transition="{ duration: 1.2, delay: 0.15, ease: 'easeOut' }"
      :viewport="{ once: true, amount: 0.25 }"
    >
      <CareerTimeline />
    </Motion>
  </div>
</template>