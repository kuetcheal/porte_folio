<template>
  <section class="services" id="competences">
    <div class="container">
      <Motion
        tag="h2"
        class="title"
        :initial="{ opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.7, ease: 'easeOut' }"
        :viewport="{ once: true, amount: 0.35 }"
      >
        Mes services
      </Motion>

      <Motion
        tag="h3"
        class="subtitle"
        :initial="{ opacity: 0, y: 24 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.08, ease: 'easeOut' }"
        :viewport="{ once: true, amount: 0.35 }"
      >
        Développeur web full-stack, je conçois des solutions sur mesure, performantes et
        évolutives, en utilisant les technologies les plus adaptées à vos objectifs.
      </Motion>

      <div class="grid">
        <Motion
          v-for="(item, index) in services"
          :key="item.title"
          tag="article"
          class="card"
          :initial="{ opacity: 0, y: 30, scale: 0.97 }"
          :whileInView="{ opacity: 1, y: 0, scale: 1 }"
          :transition="{ duration: 0.75, delay: index * 0.08, ease: 'easeOut' }"
          :viewport="{ once: true, amount: 0.2 }"
        >
          <div class="card-header">
            <div class="icon" v-html="item.icon"></div>
            <h3 class="card-title">{{ item.title }}</h3>
          </div>

          <p class="card-desc">{{ item.desc }}</p>
        </Motion>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Motion } from "motion-v"

const services = [
  {
    title: "Site E-commerce sur mesure",
    desc: "Création de solutions e-commerce sur mesure avec gestion des produits, paiements en ligne et optimisation des performances",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2ZM6.2 6l.8 4h10.7c.8 0 1.5-.5 1.8-1.2l1.6-3.6A1 1 0 0 0 20.2 4H6.3l-.2-1H3V1h2.6c.5 0 .9.3 1 .8L7 4h13.2v2H6.2Zm1.2 6h10.9l-.7 1.5a2 2 0 0 1-1.8 1.1H8.2a2 2 0 0 1-2-1.6L4.3 4.5H2V3h3.2l2.0 9Z"/>
      </svg>
    `,
  },
  {
    title: "Applications SaaS\nMétier",
    desc: "Conception de solutions SaaS sur mesure pour automatiser vos processus métier et améliorer votre productivité",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.4 13a7.9 7.9 0 0 0 0-2l2-1.5-2-3.4-2.3 1a8.2 8.2 0 0 0-1.7-1l-.4-2.5H9l-.4 2.5c-.6.2-1.2.5-1.7 1l-2.3-1-2 3.4 2 1.5a7.9 7.9 0 0 0 0 2l-2 1.5 2 3.4 2.3-1c.5.4 1.1.7 1.7 1L9 21h6l.4-2.5c.6-.2 1.2-.5 1.7-1l2.3 1 2-3.4-2-1.5ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5Z"/>
      </svg>
    `,
  },
  {
    title: "Automatisation &\nintégration",
    desc: "Scripts d’automatisation et connexion de vos systèmes à des services (CRM, ERP, e-mailing) via des API",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.7 16.3 4.4 12l4.3-4.3L7.3 6.3 1.6 12l5.7 5.7 1.4-1.4Zm6.6 0 4.3-4.3-4.3-4.3 1.4-1.4 5.7 5.7-5.7 5.7-1.4-1.4Z"/>
      </svg>
    `,
  },
  {
    title: "Application Mobile cross-platform",
    desc: "Conception d’applications mobiles cross-platform sur mesure, déployables sur iOS et Android à partir d’une base de code unique",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 17h3v4H3v-4Zm5-6h3v10H8V11Zm5 3h3v7h-3v-7Zm5-10h3v17h-3V4ZM4 13l4-4 4 4 7-7 1.4 1.4-8.4 8.4-4-4-2.6 2.6L4 13Z"/>
      </svg>
    `,
  },
];
</script>

<style scoped>
.services {
  padding: 50px 0;
  background: #050816;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
}

.title {
  font-size: clamp(28px, 3vw, 42px);
  font-weight: 700;
  margin-bottom: 10px;
  color: #f9fafb;
}

.subtitle {
  max-width: 1200px;
  margin: 0 auto 50px;
  opacity: 0.85;
  line-height: 1.6;
  color: #e5e7eb;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  align-items: stretch;
}

.card {
  background: rgba(12, 16, 26, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 14px;
  padding: 22px 20px;
  min-height: 190px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  transition:
    transform 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
  backdrop-filter: blur(6px);
}

.card:hover {
  background: rgba(70, 110, 165, 0.22);
  border-color: rgba(255, 255, 255, 0.28);
  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.55);
  transform: translateY(-6px) scale(1.02);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  width: 100%;
}

.icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon :deep(svg) {
  width: 28px;
  height: 28px;
  fill: rgba(255, 255, 255, 0.9);
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.card:hover .icon :deep(svg) {
  transform: scale(1.05);
  opacity: 1;
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  white-space: pre-line;
  color: #f9fafb;
  line-height: 1.3;
}

.card-desc {
  opacity: 0.85;
  font-size: 15px;
  line-height: 1.6;
  max-width: 100%;
  margin: 0;
  color: #e5e7eb;
}

@media (max-width: 1100px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .services {
    padding: 3rem 0;
  }

  .container {
    padding: 0 0.8rem;
  }

  .title {
    margin-bottom: 12px;
  }

  .subtitle {
    margin: 0 auto 2rem;
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .card {
    min-height: auto;
    padding: 20px 16px;
    border-radius: 12px;
  }

  .card-header {
    gap: 10px;
    margin-bottom: 12px;
  }

  .icon {
    width: 24px;
    height: 24px;
  }

  .icon :deep(svg) {
    width: 24px;
    height: 24px;
  }

  .card-title {
    font-size: 18px;
    margin: 0;
  }

  .card-desc {
    font-size: 0.94rem;
    line-height: 1.7;
  }
}
</style>