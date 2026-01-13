<script setup>
const profile = {
  title: 'Ma mission',
  name: 'Alex Stephane KUETCHE',
  role: 'Software Engineer',
  intro: `En tant que développeur Full-Stack, ma mission est de vous accompagner dans la création de solutions web performantes, modernes et adaptées à vos objectifs.`,
  paragraph: `Je mets tout en œuvre pour exceller dans cette voie, tout en prenant du plaisir à travailler sur divers projets. Mon expérience acquise au fil des années me permet aujourd’hui de mieux comprendre les attentes et de répondre précisément à leurs besoins, quel que soit leur domaine d’activité.`,
  bullets: [
    'Conception des applications web sur mesure',
    "Optimisation des performances et de l’expérience utilisateur",
    'Assurance de la maintenance et de l’évolution des projets',
    'Collaboration étroite pour transformer vos idées en solutions concrètes'
  ],
  // change le chemin si besoin
  photo: new URL('@/assets/infos3.jpg', import.meta.url).href
}
</script>

<template>
  <section class="profile-section">
    <div class="profile-container">
      <!-- COLONNE TEXTE -->
      <div class="profile-text">
        <h2 class="profile-title">
          {{ profile.title }}
        </h2>

        <div class="profile-name-block">
          <p class="profile-name">
            {{ profile.name }}
          </p>
          <p class="profile-role">
            {{ profile.role }}
          </p>
        </div>

        <p class="profile-intro">
          {{ profile.intro }}
        </p>

        <p class="profile-paragraph">
          {{ profile.paragraph }}
        </p>

        <ul class="profile-list">
          <li
            v-for="(item, idx) in profile.bullets"
            :key="idx"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- COLONNE IMAGE (pleine largeur / hauteur) -->
      <div class="profile-photo-wrapper">
        <el-card shadow="never" class="profile-card">
          <img
            :src="profile.photo"
            :alt="profile.name"
            class="profile-photo"
          />
        </el-card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile-section {
  background: #050816;
  padding: 5rem 0;
  color: #f9fafb;
}

.profile-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  gap: 3.5rem;
  /* 🔥 aligne le haut du texte et de l’image (plus de centrage vertical) */
  align-items: flex-start;
}

/* ===== TEXTE ===== */

.profile-text {
  flex: 1.05;
}

.profile-title {
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 2rem;
}

.profile-name-block {
  margin-bottom: 1.4rem;
}

.profile-name {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
}

.profile-role {
  margin: 0.25rem 0 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: #facc15;
}

.profile-intro,
.profile-paragraph {
  font-size: 0.98rem;
  line-height: 1.7;
  margin-bottom: 1.1rem;
  color: #e5e7eb;
}

.profile-list {
  list-style: none;
  margin: 1.2rem 0 0;
  padding: 0;
  font-size: 0.96rem;
  line-height: 1.7;
  color: #e5e7eb;
}

.profile-list li {
  position: relative;
  padding-left: 1.4rem;
}

.profile-list li + li {
  margin-top: 0.3rem;
}

.profile-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  top: 0;
  color: #ffffff;
}

/* ===== IMAGE PLEINE COLONNE ===== */

.profile-photo-wrapper {
  flex: 1;
  /* prend toute la hauteur du bloc pour coller l’image en haut */
  align-self: stretch;
  display: flex;
}

/* Carte Element Plus totalement transparente et sans arrondi */
.profile-card {
  width: 100%;
  height: 100%;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 0;
  box-shadow: none;
  overflow: hidden; /* pour que l’image ne dépasse pas */
}

/* supprime le padding interne d’Element Plus + étire sur toute la hauteur */
.profile-card :deep(.el-card__body) {
  padding: 0;
  width: 100%;
  height: 100%;
}

/* L’image remplit toute la zone disponible (comme ton rectangle rouge) */
.profile-photo {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;   /* recadrage si besoin */
  border-radius: 0;   /* pas d’angles arrondis */
}

/* ===== RESPONSIVE ===== */

@media (max-width: 960px) {
  .profile-container {
    flex-direction: column;
  }

  .profile-photo-wrapper {
    width: 100%;
    height: auto;
  }

  .profile-card {
    height: auto;
  }

  .profile-photo {
    height: auto;
    max-height: 420px;
  }
}

@media (max-width: 600px) {
  .profile-title {
    font-size: 2rem;
  }

  .profile-name {
    font-size: 1.4rem;
  }
}
</style>
