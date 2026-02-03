<template>
  <main class="projects-page">
    <!-- ========= HERO ========= -->
    <section
      class="projects-hero"
      :style="{ backgroundImage: `url(${bgHero})` }"
    >
      <div class="projects-hero-overlay"></div>

      <div class="projects-hero-inner">
        <h1 class="projects-hero-title">
          Développement Web Moderne
        </h1>

        <p class="projects-hero-subtitle">
          Découvrez mes projets de création d'applications web performantes
          et sur mesure, couvrant Front-End, Back-End et Déploiement.
        </p>
      </div>
    </section>

    <section class="projects-section">
    <div class="projects-container">
      <el-card
        v-for="project in projects"
        :key="project.id"
        shadow="never"
        class="project-card"
      >
        <div class="project-row">
          <!-- COLONNE IMAGE -->
          <div class="project-media">
            <img :src="project.image" :alt="project.title" />
          </div>

          <!-- COLONNE TEXTE -->
          <div class="project-content">
            <h3 class="project-title">
              {{ project.title }}
            </h3>

            <p class="project-technos">
              <span>Technologies :</span>
              {{ project.technologies }}
            </p>

            <p class="project-subtitle">
              Fonctionnalités principales :
            </p>

            <ul class="project-features">
              <li v-for="(feature, idx) in project.features" :key="idx">
                {{ feature }}
              </li>
            </ul>

            <div class="project-actions">
              <el-button type="danger" size="large" round>
                <i class="fa-solid fa-up-right-from-square btn-icon" />
                Consulter
              </el-button>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </section>
  </main>
</template>


<script setup>
const bgHero = new URL("@/assets/infos1.jpg", import.meta.url).href

const projects = [
  {
    id: 1,
    title: "Application web de locations immobilières",
    technologies:
      "Next.js, TypeScript, TailwindCSS, PostgreSQL, Prisma, Jest, Git, GitLab, AWS, Nginx, HTTPS/SSL, JWT",
    features: [
      "Notifications en temps réel",
      "Prise de rendez-vous en ligne",
      "Tableau de bord pour admins et utilisateurs",
      "Gestion complète des logements et réservations"
    ],
    image: new URL('@/assets/infos1.jpg', import.meta.url).href
  },
  {
    id: 2,
    title:
      "maestroSIGRAI : application Web Multi-Tenant (SaaS) de gestion des risques",
    technologies:
      "React, TypeScript, TailwindCSS, Node.js, NestJS, REST API, WebSockets, PostgreSQL, Prisma, Jest, GitLab, CI/CD, Docker",
    features: [
      "Gestion des rôles (RBAC) et authentification SSO",
      "Notifications en temps réel",
      "Tableau de bord personnalisable",
      "Suivi des activités et reporting avancé"
    ],
    image: new URL('@/assets/infos2.jpg', import.meta.url).href
  },
  {
    id: 3,
    title:
      "maestroRGPD : refonte d’une application SaaS de conformité RGPD",
    technologies:
      "React, TypeScript, TailwindCSS, Java, Spring Boot, REST API, MySQL, Redis, Sequelize, Jest, Git, Docker, Nginx, JWT",
    features: [
      "Tableau de bord administrateur",
      "Interfaces responsives",
      "Timeline interactive des actions",
      "Lazy loading des composants lourds"
    ],
    image: new URL('@/assets/infos3.jpg', import.meta.url).href
  }
]
</script>

<style scoped>
.projects-page {
  background: #050816;
  color: #f9fafb;
}

/* ========= HERO ========= */

.projects-hero {
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  height: 380px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.projects-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.65),
    rgba(0, 0, 0, 0.9)
  );
}

.projects-hero-inner {
  position: relative;
  max-width: 900px;
  padding: 0 1.5rem;
  text-align: center;
}

.projects-hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.projects-hero-subtitle {
  font-size: 1.35rem;
  line-height: 1.7;
  color: #e5e7eb;
}

/* ========= SECTION PROJECTS ========= */

.projects-section {
  padding: 3rem 0 4rem;
}

/* ========= RESPONSIVE ========= */

@media (max-width: 900px) {
  .projects-hero {
    height: 240px;
  }

  .projects-hero-title {
    font-size: 2.2rem;
  }

  .projects-hero-subtitle {
    font-size: 1.1rem;
  }
}

@media (max-width: 600px) {
  .projects-hero-title {
    font-size: 1.9rem;
  }
}


.projects-section {
  padding: 4rem 0;
  background: #050816;
}

.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-title {
  text-align: center;
  font-size: 1.9rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
}

/* ===== CARD ===== */

.project-card {
  background: #222731;
  border-radius: 0;
  border: 1px solid #2f3640;
  margin-bottom: 1.5rem;
  padding: 0;
  overflow: hidden;
}

/* supprime le padding d’Element Plus */
.project-card :deep(.el-card__body) {
  padding: 0;
}

/* ===== ROW ===== */
.project-row {
  display: flex;
  align-items: stretch; /* -> tous les enfants ont la même hauteur */
}

/* ===== IMAGE ===== */

/* La colonne image prend 260px de large,
   et sa hauteur suit celle du contenu grâce à align-items:stretch */
.project-media {
  flex: 0 0 260px;
  display: flex;        /* pour que l'img prenne 100% en hauteur */
}

.project-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;    /* recadre proprement l’image */
}

/* ===== TEXTE ===== */

.project-content {
  flex: 1;
  color: #f9fafb;
  padding: 1.2rem 1.6rem;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
}

.project-technos {
  font-size: 0.86rem;
  line-height: 1.5;
  margin-bottom: 0.8rem;
  color: #e5e7eb;
}

.project-technos span {
  font-weight: 700;
}

.project-subtitle {
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
}

.project-features {
  margin: 0;
  padding-left: 1.1rem;
  font-size: 0.86rem;
  line-height: 1.45;
  color: #e5e7eb;
}

.project-features li + li {
  margin-top: 0.15rem;
}

.project-actions {
  margin-top: 1.1rem;
  display: flex;
  justify-content: flex-end;
}

/* bouton un peu plus massif */
.project-actions :deep(.el-button) {
  padding: 0.75rem 2rem;
  font-size: 0.95rem;
  font-weight: 600;
}

.btn-icon {
  margin-right: 0.5rem;
}

/* ===== BOUTON GLOBAL ===== */

.view-more-wrapper {
  margin-top: 2rem;
  text-align: center;
}

/* ===== RESPONSIVE ===== */

@media (max-width: 900px) {
  .project-row {
    flex-direction: column;
  }

  .project-media {
    flex: none;
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
    height: 220px; /* carré sur mobile */
  }

  .project-media img {
    width: 100%;
    height: 100%;
  }

  .project-actions {
    justify-content: flex-start;
  }
}
</style>
