<script setup>
import { computed, ref } from "vue";
import { Motion } from "motion-v";

const timelineItems = ref([
  {
    category: "formation",
    year: "2024 - 2026",
    title: "Master en EISI option Développement Web",
    company: "Ecole des ingénieurs EPSI",
    location: "Montpellier, France",
    type: "Formation en Alternance",
    technologies: [ "Docker", "Kubernetes",  "Spring Boot", "MongoDB", "Flutter", "GitHub Actions", ],
    description:
      "Formation de niveau RNCP 7 axée sur la conception et le développement d’applications web et mobiles, l’architecture logicielle, le déploiement conteneurisé et l’automatisation des workflows. Renforcement des compétences en développement backend avec Spring Boot, en applications mobiles avec Flutter, en gestion de bases de données NoSQL avec MongoDB, ainsi qu’en environnement DevOps à travers Docker, Kubernetes et GitHub Actions.",
  },

  {
    category: "experience",
    year: "2024 - 2026",
    title: "Développeur Full-Stack en alternance : 2 ans",
    company: "Compétences & Développement",
    location: "Montpellier, France",
    type: "Alternance",
    technologies: [
      "Vue.js",
      "Nuxt.js",
      "Node.js",
      "PostgreSQL",
      "Strapi",
      "Docker",
      "GitHub Actions",
      "Kubernetes",
    ],
    description:
      "Développement et maintenance de plateformes web pour les 14 écoles du groupe Compétences & Développement, dans un environnement orienté multi-sites et mutualisation des composants. Contribution à l’intégration frontend avec Vue.js/Nuxt.js, au développement backend, à la gestion de contenus via Strapi, ainsi qu’aux pratiques de déploiement et d’automatisation avec Docker, Kubernetes et GitHub Actions.",
  },

  {
    category: "experience",
    year: "2023 - 2024",
    title: "Stage Développeur Full-stack : 6 mois",
    company: "Codi-one Agency",
    location: "Angers, France",
    type: "Stage",
    technologies: [
      "ReactJS",
      "WordPress",
      "Tailwind",
      "HTML",
      "JavaScript",
      "Symfony 6",
      "Intégration",
    ],
    description:
      "Intégration de maquettes Figma responsives, création de composants réutilisables et animations micro-interactions.",
  },

  {
    category: "experience",
    year: "2020 - 2022",
    title: "Développeur Web et Mobile • 1 an 6 mois",
    company: "FANELIT DIGITAL SOLUTIONS",
    location: "Yaoundé, Cameroun",
    type: "CDD",
    technologies: [
      "ReactJS",
      "Flutter",
      "Docker",
      "REST",
      "NodeJS",
      "MariaDB",
      "Intégration",
    ],
    description:
      "Développement d’interfaces web et mobiles responsives, intégration de maquettes UI, création de composants réutilisables et participation à la connexion entre le frontend et les API backend. Intervention sur des projets orientés React, Flutter, Node.js et REST, avec une attention particulière portée à l’expérience utilisateur, à la performance et à l’intégration applicative.",
  },

  {
    category: "formation",
    year: "2022 - 2023",
    title: "Bachelor Développement Web et Mobile",
    company: "Ecole des ingénieurs ESAIP",
    location: "Angers, France",
    type: "Formation initiale",
    technologies: ["React", "TypeScript", "REST API"],
    description:
      "Formation orientée développement web et mobile avec une montée en compétences sur la conception d’interfaces, la consommation d’API et le développement d’applications modernes.",
  },

  {
    category: "formation",
    year: "2016 - 2019",
    title: "Licence en Informatique",
    company: "Université de Douala",
    location: "Douala, Cameroun",
    type: "Formation initiale",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Bases de données", "POO"],
    description:
      "Formation universitaire en informatique avec une spécialisation progressive vers le développement logiciel et web. Acquisition de solides bases en programmation, modélisation, bases de données et réalisation de projets pratiques en équipe.",
  },
]);

const formations = computed(() =>
  timelineItems.value.filter((item) => item.category === "formation")
);

const experiences = computed(() =>
  timelineItems.value.filter((item) => item.category === "experience")
);
</script>

<template>
  <section class="timeline-section">
    <div class="timeline-container">
      <Motion
        tag="header"
        class="timeline-header"
        :initial="{ opacity: 0, y: 28 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, ease: 'easeOut' }"
        :viewport="{ once: true, amount: 0.3 }"
      >
        <h2>Parcours universitaire et professionnel</h2>
      </Motion>

      <!-- FORMATIONS -->
      <Motion
        tag="div"
        class="timeline-block"
        :initial="{ opacity: 0, y: 30 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.85, ease: 'easeOut' }"
        :viewport="{ once: true, amount: 0.2 }"
      >
        <div class="block-title-wrap">
          <h3 class="block-title">Formations</h3>
        </div>

        <el-timeline class="timeline">
          <el-timeline-item
            v-for="item in formations"
            :key="item.year + item.title"
            :timestamp="item.year"
            placement="top"
            type="primary"
            size="large"
          >
            <Motion
              tag="div"
              :initial="{ opacity: 0, y: 24, scale: 0.985 }"
              :whileInView="{ opacity: 1, y: 0, scale: 1 }"
              :transition="{ duration: 0.7, ease: 'easeOut' }"
              :viewport="{ once: true, amount: 0.2 }"
            >
              <el-card shadow="hover" class="timeline-card">
                <div class="card-header">
                  <div class="card-main">
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
            </Motion>
          </el-timeline-item>
        </el-timeline>
      </Motion>

      <!-- EXPERIENCES -->
      <Motion
        tag="div"
        class="timeline-block"
        :initial="{ opacity: 0, y: 30 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.85, delay: 0.08, ease: 'easeOut' }"
        :viewport="{ once: true, amount: 0.2 }"
      >
        <div class="block-title-wrap">
          <h3 class="block-title">Expériences professionnelles</h3>
        </div>

        <el-timeline class="timeline">
          <el-timeline-item
            v-for="item in experiences"
            :key="item.year + item.title"
            :timestamp="item.year"
            placement="top"
            type="primary"
            size="large"
          >
            <Motion
              tag="div"
              :initial="{ opacity: 0, y: 24, scale: 0.985 }"
              :whileInView="{ opacity: 1, y: 0, scale: 1 }"
              :transition="{ duration: 0.7, ease: 'easeOut' }"
              :viewport="{ once: true, amount: 0.2 }"
            >
              <el-card shadow="hover" class="timeline-card">
                <div class="card-header">
                  <div class="card-main">
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
            </Motion>
          </el-timeline-item>
        </el-timeline>
      </Motion>
    </div>
  </section>
</template>

<style scoped>
.timeline-section {
  padding: 3.2rem 1rem 4rem;
  display: flex;
  justify-content: center;
  background: #050816;
}

.timeline-container {
  width: 100%;
  max-width: 1240px;
}

/* ===== HEADER ===== */
.timeline-header {
  text-align: left;
  margin-bottom: 2rem;
  color: #f9fafb;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.75rem;
  color: #f97373;
  margin-bottom: 0.45rem;
}

.timeline-header h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.subtitle {
  max-width: 760px;
  font-size: 0.95rem;
  color: #d1d5db;
  line-height: 1.7;
}

/* ===== BLOC ===== */
.timeline-block + .timeline-block {
  margin-top: 2.8rem;
}

.block-title-wrap {
  margin-bottom: 1rem;
}

.block-title {
  color: #f9fafb;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
}

/* ===== TIMELINE ===== */
.timeline {
  --el-timeline-node-size-large: 16px;
  --el-timeline-node-color: #ff4b4b;
}

:deep(.el-timeline-item__wrapper) {
  padding-left: 22px;
}

:deep(.el-timeline-item__tail) {
  border-left: 2px solid rgba(255, 75, 75, 0.65);
}

:deep(.el-timeline-item__node--large) {
  width: 16px;
  height: 16px;
}

:deep(.el-timeline-item__timestamp) {
  color: #fbbf24;
  font-weight: 700;
  font-size: 0.95rem;
  line-height: 1.2;
  margin-bottom: 0.55rem;
}

/* ===== CARD ===== */
.timeline-card {
  background: #222731;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.55);
  padding: 0.95rem 1rem;
}

.timeline-card :deep(.el-card__body) {
  padding: 0 !important;
}

.card-header {
  display: flex;
  justify-content: space-between;
  gap: 0.9rem;
  align-items: flex-start;
  margin-bottom: 0.45rem;
}

.card-main {
  flex: 1;
  min-width: 0;
}

.card-title {
  font-size: 1.06rem;
  font-weight: 700;
  color: #f9fafb;
  margin: 0 0 0.2rem;
  line-height: 1.35;
}

.card-company {
  font-size: 0.9rem;
  color: #e5e7eb;
  line-height: 1.5;
  margin: 0;
}

.card-location {
  font-size: 0.83rem;
  color: #9ca3af;
  margin-left: 0.25rem;
}

.card-tag {
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  flex-shrink: 0;
}

/* ===== DESCRIPTION ===== */
.card-description {
  font-size: 0.9rem;
  line-height: 1.7;
  color: #d1d5db;
  margin: 0.7rem 0 0.9rem;
}

/* ===== FOOTER / TECHNOLOGIES ===== */
.card-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 0.45rem 0.55rem;
}

.tech-label {
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #9ca3af;
  margin-top: 0.18rem;
}

.tech-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  flex: 1;
}

.tech-tag {
  border-radius: 999px;
  border-color: rgba(249, 250, 251, 0.15);
  background: rgba(15, 23, 42, 0.9);
  color: #e5e7eb;
  font-size: 0.74rem;
}

/* ===== TABLETTE ===== */
@media (max-width: 900px) {
  .timeline-section {
    padding: 2.8rem 0.9rem 3.2rem;
  }

  .timeline-container {
    max-width: 100%;
  }

  .timeline-header {
    margin-bottom: 1.7rem;
  }

  .timeline-header h2 {
    font-size: 1.75rem;
  }

  .subtitle {
    max-width: 100%;
  }

  .timeline-block + .timeline-block {
    margin-top: 2.2rem;
  }
}

/* ===== MOBILE ===== */
@media (max-width: 768px) {
  .timeline-section {
    padding: 2.5rem 0.7rem 3rem;
  }

  .timeline-header h2 {
    font-size: 1.55rem;
    margin-bottom: 0.6rem;
  }

  .subtitle {
    font-size: 0.92rem;
    line-height: 1.7;
  }

  .block-title {
    font-size: 1.12rem;
  }

  :deep(.el-timeline-item__wrapper) {
    padding-left: 18px;
  }

  :deep(.el-timeline-item__timestamp) {
    font-size: 0.9rem;
    margin-bottom: 0.45rem;
  }

  .timeline-card {
    padding: 0.85rem 0.85rem;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.55rem;
  }

  .card-title {
    font-size: 1rem;
  }

  .card-company {
    font-size: 0.88rem;
  }

  .card-location {
    display: inline;
    margin-left: 0.2rem;
  }

  .card-description {
    font-size: 0.89rem;
    line-height: 1.68;
    margin: 0.65rem 0 0.85rem;
  }

  .card-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.45rem;
  }

  .tech-label {
    margin-top: 0;
  }

  .tech-chips {
    width: 100%;
  }
}

/* ===== PETIT MOBILE ===== */
@media (max-width: 480px) {
  .timeline-section {
    padding: 2.2rem 0.55rem 2.8rem;
  }

  .eyebrow {
    font-size: 0.72rem;
  }

  .timeline-header h2 {
    font-size: 1.4rem;
  }

  .subtitle {
    font-size: 0.9rem;
  }

  .block-title {
    font-size: 1.05rem;
  }

  :deep(.el-timeline-item__wrapper) {
    padding-left: 15px;
  }

  :deep(.el-timeline-item__node--large) {
    width: 14px;
    height: 14px;
  }

  .timeline-card {
    padding: 0.78rem 0.78rem;
  }

  .card-title {
    font-size: 0.96rem;
    line-height: 1.4;
  }

  .card-company {
    font-size: 0.85rem;
  }

  .card-description {
    font-size: 0.87rem;
  }

  .tech-tag {
    font-size: 0.72rem;
  }
}
</style>