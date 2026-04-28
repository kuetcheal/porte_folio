<template>
  <main class="projects-page">
    <section class="projects-hero" :style="{ backgroundImage: `url(${bgHero})` }">
      <div class="projects-hero-overlay"></div>

      <Motion
        tag="div"
        class="projects-hero-inner"
        :initial="{ opacity: 0, y: 28, scale: 0.985 }"
        :whileInView="{ opacity: 1, y: 0, scale: 1 }"
        :transition="{ duration: 0.9, ease: 'easeOut' }"
        :viewport="{ once: true, amount: 0.35 }"
      >
        <h1 class="projects-hero-title">
          Développement Web Moderne
        </h1>

        <p class="projects-hero-subtitle">
          Découvrez mes projets de création d'applications web et mobiles performantes
          et sur mesure, couvrant Front-End, Back-End, Déploiement et Automatisation.
        </p>
      </Motion>
    </section>

    <section class="projects-section">
      <div class="projects-container">
        <div class="titre-projet">
          <h2>Projets personnels et professionnels réalisés</h2>
        </div>

        <Motion
          v-for="(project, index) in projects"
          :key="project.id"
          tag="div"
          :initial="{ opacity: 0, y: 34, scale: 0.985 }"
          :whileInView="{ opacity: 1, y: 0, scale: 1 }"
          :transition="{ duration: 0.75, delay: index * 0.08, ease: 'easeOut' }"
          :viewport="{ once: true, amount: 0.2 }"
        >
          <el-card shadow="never" class="project-card">
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
                  <el-button
                    v-if="project.link"
                    type="danger"
                    size="large"
                    round
                    @click="openProject(project)"
                  >
                    <i class="fa-solid fa-up-right-from-square btn-icon" />
                    Consulter
                  </el-button>

                  <el-button
                    v-else
                    type="info"
                    size="large"
                    round
                    disabled
                  >
                    Lien indisponible
                  </el-button>
                </div>
              </div>
            </div>
          </el-card>
        </Motion>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Motion } from "motion-v"

const bgHero = new URL("@/assets/infos1.jpg", import.meta.url).href

const projects = [
  {
    id: 1,
    title: "EasyTravel : Application de reservation de billet de voyage",
    technologies:
      "Javascript, PHP 8, TailwindCSS, AJAX, MySQL, JQuery, Git, FileZilla, Microsoft Azure, FTPS, Websocket",
    features: [
      "Tableau de bord administrateur",
      "Interfaces responsives",
      "Timeline interactive des actions",
      "Intégration de nombreuses API tierces : paiement, Google Maps, etc."
    ],
    image: new URL('@/assets/easytravel-agency.png', import.meta.url).href,
    link: "https://www.easy-travel.app/Accueil.php"
  },
  {
    id: 2,
    title: "PayTonKaya : site E-commerce permettant la vente de café",
    technologies:
      "ReactJS, Vite, TailwindCSS, MySQL, Spring Boot, JUnit 5, Git, Github Actions, CI/CD, Kubernetes, Prometheus, JWT, Grafana, Sonarqube",
    features: [
      "Architecture Micro-services",
      "Achat du café en ligne",
      "Prise de rendez-vous en ligne",
      "Tableau de bord pour admins et utilisateurs"
    ],
    image: new URL('@/assets/infos1.jpg', import.meta.url).href,
    link: "https://monsite-easytravel.com"
  },
  {
    id: 3,
    title:
      "EventGO : application Mobile cross platform de souscription aux événements",
    technologies:
      "React, JavaScript, TailwindCSS, Node.js, Flutter, Cloudinary, MySQL, OVH, Render, Github, Docker, n8n",
    features: [
      "Gestion des rôles (RBAC) et authentification SSO",
      "Notifications en temps réel",
      "Tableau de bord personnalisable",
      "Suivi des activités et reporting avancé"
    ],
    image: new URL('@/assets/infos2.jpg', import.meta.url).href,
    link: "https://monsite-easytravel.com"
  },
  {
    id: 4,
    title:
      "Mobiliis : application d'accompagnement dans les procédures de voyages",
    technologies:
      "React, TypeScript, TailwindCSS, Java, Spring Boot, REST API, MySQL, Redis, Sequelize, Jest, Git, Docker, Nginx, JWT",
    features: [
      "Tableau de bord administrateur",
      "Interfaces responsives",
      "Timeline interactive des actions",
      "Lazy loading des composants lourds"
    ],
    image: new URL('@/assets/infos3.jpg', import.meta.url).href,
    link: "https://mobiliis.vercel.app"
  },
  {
    id: 5,
    title:
      "Conception de 14 sites écoles pour le groupe universitaire C&D",
    technologies:
      "React, TypeScript, TailwindCSS, NuxtJS, VueJS, REST API, PostgreSQL, Redis, Kubernetes, Jest, Git, Docker, Nginx, JWT",
    features: [
      "Tableau de bord administrateur",
      "Interfaces responsives",
      "Timeline interactive des actions",
      "Lazy loading des composants lourds"
    ],
    image: new URL('@/assets/cd.png', import.meta.url).href,
    link: "https://www.epsi.fr/"
  },
  {
    id: 6,
    title: "Mon portfolio : site vitrine décrivant mon parcours",
    technologies:
      "VueJS, JavaScript, Element Plus, Motion, REST API, MySQL, Kubernetes, Git, Hostinger, JWT",
    features: [
      "Tableau de bord administrateur",
      "Interfaces responsives",
      "Timeline interactive des actions",
      "Lazy loading des composants lourds"
    ],
    image: new URL('@/assets/cd.png', import.meta.url).href,
    link: "https://porte-folio-sooty.vercel.app/"
  },
  {
    id: 7,
    title: "Ayila'a : App mobile pour dénicher les bons coins",
    technologies:
      "Flutter, VueJS, Symfony, MariaDB, Cloudinary, Git, Hostinger, JWT, Element Plus",
    features: [
      "Interface administrateur",
      "Interfaces responsives",
      "Timeline interactive des actions",
      "Lazy loading des composants lourds"
    ],
    image: new URL('@/assets/ayila1.png', import.meta.url).href,
    link: "https://ayilaa.com/fr/"
  }
]

const openProject = (project) => {
  if (!project.link) return

  window.open(project.link, "_blank", "noopener,noreferrer")
}
</script>

<style scoped>
.projects-page {
  background: #050816;
  color: #f9fafb;
}

/* HERO */
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
  line-height: 1.2;
}

.projects-hero-subtitle {
  font-size: 1.35rem;
  line-height: 1.7;
  color: #e5e7eb;
}

/* SECTION */
.projects-section {
  padding: 4rem 0;
  background: #050816;
}

.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.titre-projet {
  font-size: 25px;
  margin-bottom: 2rem;
}

.titre-projet h2 {
  margin: 0;
}

/* CARD */
.project-card {
  background: #222731;
  border-radius: 0;
  border: 1px solid #2f3640;
  margin-bottom: 1.5rem;
  padding: 0;
  overflow: hidden;
}

.project-card :deep(.el-card__body) {
  padding: 0;
}

/* ROW */
.project-row {
  display: flex;
  align-items: stretch;
}

/* IMAGE */
.project-media {
  flex: 0 0 260px;
  display: flex;
}

.project-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* TEXTE */
.project-content {
  flex: 1;
  color: #f9fafb;
  padding: 1.2rem 1.6rem;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  line-height: 1.45;
}

.project-technos {
  font-size: 0.86rem;
  line-height: 1.55;
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
  line-height: 1.5;
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

.project-actions :deep(.el-button) {
  padding: 0.75rem 2rem;
  font-size: 0.95rem;
  font-weight: 600;
}

.btn-icon {
  margin-right: 0.5rem;
}

/* TABLETTE */
@media (max-width: 900px) {
  .projects-hero {
    height: 340px;
  }

  .projects-hero-inner {
    padding: 0 1rem;
  }

  .projects-hero-title {
    font-size: 1.85rem;
    margin-bottom: 0.8rem;
  }

  .projects-hero-subtitle {
    font-size: 1rem;
    line-height: 1.75;
  }

  .projects-container {
    padding: 0 1rem;
  }

  .project-row {
    flex-direction: column;
  }

  .project-media {
    flex: none;
    width: 100%;
    max-width: 100%;
    height: 240px;
    margin: 0;
  }

  .project-media img {
    width: 100%;
    height: 100%;
  }

  .project-content {
    padding: 1.1rem 1rem 1.2rem;
  }

  .project-title {
    font-size: 1.02rem;
  }

  .project-technos,
  .project-features {
    font-size: 0.9rem;
  }

  .project-subtitle {
    font-size: 0.95rem;
  }

  .project-actions {
    justify-content: flex-start;
  }
}

/* MOBILE */
@media (max-width: 600px) {
  .projects-hero {
    height: 300px;
  }

  .projects-hero-inner {
    padding: 0 0.85rem;
    max-width: 100%;
  }

  .projects-hero-title {
    font-size: 1.45rem;
    line-height: 1.3;
    margin-bottom: 0.75rem;
  }

  .projects-hero-subtitle {
    font-size: 0.96rem;
    line-height: 1.75;
  }

  .projects-section {
    padding: 2.7rem 0 3rem;
  }

  .projects-container {
    padding: 0 0.75rem;
  }

  .project-card {
    margin-bottom: 1.15rem;
  }

  .project-media {
    height: 210px;
    width: 100%;
    max-width: 100%;
  }

  .project-content {
    padding: 1rem 0.9rem 1.1rem;
  }

  .project-title {
    font-size: 0.98rem;
    margin-bottom: 0.65rem;
    line-height: 1.45;
  }

  .titre-projet {
    font-size: 15px;
  }

  .project-technos {
    font-size: 0.88rem;
    line-height: 1.6;
    margin-bottom: 0.7rem;
  }

  .project-subtitle {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
  }

  .project-features {
    font-size: 0.88rem;
    line-height: 1.6;
    padding-left: 1rem;
  }

  .project-actions {
    margin-top: 1rem;
    justify-content: flex-start;
  }

  .project-actions :deep(.el-button) {
    width: 100%;
    justify-content: center;
    padding: 0.78rem 1.2rem;
    font-size: 0.92rem;
  }
}

/* PETIT MOBILE */
@media (max-width: 420px) {
  .projects-container {
    padding: 0 0.65rem;
  }

  .project-media {
    height: 190px;
  }

  .project-content {
    padding: 0.95rem 0.82rem 1rem;
  }

  .project-title {
    font-size: 0.94rem;
  }

  .project-technos,
  .project-features {
    font-size: 0.84rem;
  }

  .project-subtitle {
    font-size: 0.87rem;
  }
}
</style>