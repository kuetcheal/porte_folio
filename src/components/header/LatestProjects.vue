<script setup>
import { Motion } from "motion-v"

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
      "EasyTravel : Application de covoiturage et reservation de Billet Bus",
    technologies:
      "Javascript , PHP 8 , TailwindCSS , AJAX ,  MySQL , JQuery, Git, FileZilla , Microsoft Azure , FTPS , Websocket",
    features: [
      "Tableau de bord administrateur",
      "Interfaces responsives",
      "Timeline interactive des actions",
      "Intégration de nombreux API tierces ( Paiement, Google Maps, Gmail, Whatsapp )"
    ],
    image: new URL('@/assets/easytravel-agency.png', import.meta.url).href,
    link: "https://www.easy-travel.app/Accueil.php"
  }
]

const openProject = (project) => {
  if (!project.link) return

  window.open(project.link, "_blank", "noopener,noreferrer")
}
</script>

<template>
  <section class="projects-section">
    <div class="projects-container">
      <Motion
        tag="h2"
        class="section-title"
        :initial="{ opacity: 0, y: 22 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.7, ease: 'easeOut' }"
        :viewport="{ once: true, amount: 0.35 }"
      >
        Derniers projets réalisés
      </Motion>

      <Motion
        v-for="(project, index) in projects"
        :key="project.id"
        tag="div"
        :initial="{ opacity: 0, y: 35, scale: 0.98 }"
        :whileInView="{ opacity: 1, y: 0, scale: 1 }"
        :transition="{ duration: 0.8, delay: index * 0.08, ease: 'easeOut' }"
        :viewport="{ once: true, amount: 0.2 }"
      >
        <el-card
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
                <el-button
                  type="danger"
                  size="large"
                  round
                  :disabled="!project.link"
                  @click="openProject(project)"
                >
                  <i class="fa-solid fa-up-right-from-square btn-icon" />
                  Consulter
                </el-button>
              </div>
            </div>
          </div>
        </el-card>
      </Motion>

      <Motion
        tag="div"
        class="view-more-wrapper"
        :initial="{ opacity: 0, y: 24 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.75, delay: 0.15, ease: 'easeOut' }"
        :viewport="{ once: true, amount: 0.4 }"
      >
        <el-button type="danger" size="large" round>
          Voir tous de projets
        </el-button>
      </Motion>
    </div>
  </section>
</template>

<style scoped>
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
  color: #f9fafb;
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
  align-items: stretch;
}

/* ===== IMAGE ===== */
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

/* ===== TEXTE ===== */

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
  line-height: 1.55;
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

/* boutons */
.project-actions :deep(.el-button),
.view-more-wrapper :deep(.el-button) {
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
    line-height: 1.45;
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

@media (max-width: 600px) {
  .projects-section {
    padding: 3rem 0;
  }

  .projects-container {
    padding: 0 0.8rem;
  }

  .section-title {
    font-size: 1.65rem;
    margin-bottom: 2rem;
  }

  .project-card {
    margin-bottom: 1.2rem;
  }

  .project-media {
    height: 210px;
  }

  .project-content {
    padding: 1rem 0.9rem 1.1rem;
  }

  .project-title {
    font-size: 0.98rem;
    margin-bottom: 0.65rem;
  }

  .project-technos {
    font-size: 0.88rem;
    line-height: 1.6;
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

  .project-actions :deep(.el-button),
  .view-more-wrapper :deep(.el-button) {
    width: 100%;
    justify-content: center;
    padding: 0.78rem 1.2rem;
    font-size: 0.92rem;
  }

  .view-more-wrapper {
    margin-top: 1.6rem;
  }
}
</style>