<script setup>
import { ref } from 'vue'

const timelineItems = ref([
  {
    year: '2025',
    title: 'Développeur Full-Stack Freelance',
    company: 'KAS Dev Studio',
    location: 'Montpellier, France',
    type: 'Freelance',
    technologies: ['Vue.js', 'Nuxt', 'Node.js', 'MongoDB'],
    description:
      "Accompagnement de PME dans la création de plateformes web sur mesure : sites vitrines, dashboards métier et API sécurisées."
  },
  {
    year: '2024',
    title: 'Alternant Développeur Web',
    company: 'TechNova Solutions',
    location: 'Lyon, France',
    type: 'Alternance',
    technologies: ['React', 'TypeScript', 'REST API'],
    description:
      "Refonte d'une application interne de gestion de projets : optimisation des performances et amélioration de l’UX."
  },
  {
    year: '2023',
    title: 'Stage Développeur Front-End',
    company: 'DigitalWave Agency',
    location: 'Paris, France',
    type: 'Stage',
    technologies: ['Vue 3', 'Element Plus', 'SCSS'],
    description:
      "Intégration de maquettes Figma responsives, création de composants réutilisables et animations micro-interactions."
  },
  {
    year: '2022',
    title: 'Formation Développeur Web',
    company: 'École du Web',
    location: 'France',
    type: 'Formation',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description:
      "Apprentissage des bases du développement web, travail sur plusieurs projets pédagogiques en équipe."
  }
])
</script>

<template>
  <section class="timeline-section">
    <div class="timeline-container">
      <header class="timeline-header">
        <p class="eyebrow">Parcours</p>
        <h2>Mon évolution dans le développement web</h2>
        <p class="subtitle">
          Un chemin construit entre formations, stages, alternance et missions freelance,
          avec un focus constant sur la qualité et la performance.
        </p>
      </header>

      <el-timeline class="timeline">
        <el-timeline-item
          v-for="item in timelineItems"
          :key="item.year + item.title"
          :timestamp="item.year"
          placement="top"
          type="primary"
          size="large"
        >
          <el-card shadow="hover" class="timeline-card">
            <div class="card-header">
              <div>
                <h3 class="card-title">{{ item.title }}</h3>
                <p class="card-company">
                  {{ item.company }}
                  <span class="card-location">· {{ item.location }}</span>
                </p>
              </div>

              <el-tag
                type="danger"
                effect="dark"
                size="small"
                class="card-tag"
              >
                {{ item.type }}
              </el-tag>
            </div>

            <p class="card-description">
              {{ item.description }}
            </p>

            <div class="card-footer">
              <span class="tech-label">Technos :</span>
              <div class="tech-chips">
                <el-tag
                  v-for="tech in item.technologies"
                  :key="tech"
                  size="small"
                  effect="plain"
                  class="tech-tag"
                >
                  {{ tech }}
                </el-tag>
              </div>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </section>
</template>

<style scoped>
.timeline-section {
  padding: 4rem 1.5rem;
  background: radial-gradient(circle at top left, #1b1029 0, #050814 48%, #02030a 100%);
  display: flex;
  justify-content: center;
}

.timeline-container {
  width: 100%;
  max-width: 1000px;
}

.timeline-header {
  text-align: left;
  margin-bottom: 2.5rem;
  color: #f9fafb;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.75rem;
  color: #f97373;
  margin-bottom: 0.4rem;
}

.timeline-header h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.subtitle {
  max-width: 640px;
  font-size: 0.95rem;
  color: #d1d5db;
}

/* timeline Element Plus */

.timeline {
  --el-timeline-node-size-large: 16px;
  --el-timeline-node-color: #ff4b4b;
}

:deep(.el-timeline-item__timestamp) {
  color: #fbbf24;
  font-weight: 600;
  font-size: 0.9rem;
}

/* cards */

.timeline-card {
  background: #050814;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.8);
  padding: 1.4rem 1.5rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 0.6rem;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #f9fafb;
  margin-bottom: 0.15rem;
}

.card-company {
  font-size: 0.9rem;
  color: #e5e7eb;
}

.card-location {
  font-size: 0.83rem;
  color: #9ca3af;
  margin-left: 0.25rem;
}

.card-tag {
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* description */

.card-description {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #d1d5db;
  margin: 0.5rem 0 1rem;
}

/* footer / technologies */

.card-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.6rem;
}

.tech-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #9ca3af;
}

.tech-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.tech-tag {
  border-radius: 999px;
  border-color: rgba(249, 250, 251, 0.15);
  background: rgba(15, 23, 42, 0.9);
  color: #e5e7eb;
  font-size: 0.75rem;
}

/* responsive */

@media (max-width: 768px) {
  .timeline-section {
    padding: 3rem 1rem;
  }

  .timeline-header h2 {
    font-size: 1.6rem;
  }

  .timeline-card {
    padding: 1.2rem 1.1rem;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
