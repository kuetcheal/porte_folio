<script setup>
import { Motion } from "motion-v"
import { useRouter } from "vue-router"

const router = useRouter()

const profile = {
  title: "Ma mission",
  name: "Alex Stephane KUETCHE",
  role: "Software Engineer",
  intro: `En tant que développeur Full-Stack, ma mission est de vous accompagner dans la création de solutions web performantes, modernes et adaptées à vos objectifs.`,
  paragraph: `Je mets tout en œuvre pour exceller dans cette voie, tout en prenant du plaisir à travailler sur divers projets. Mon expérience acquise au fil des années me permet aujourd’hui de mieux comprendre les attentes et de répondre précisément à leurs besoins, quel que soit leur domaine d’activité.`,
  bullets: [
    "Conception des applications web sur mesure",
    "Optimisation des performances et de l’expérience utilisateur",
    "Assurance de la maintenance et de l’évolution des projets",
    "Collaboration étroite pour transformer vos idées en solutions concrètes",
  ],
  photo: new URL("@/assets/photo_Alex1.png", import.meta.url).href,
}

function goToParcours() {
  router.push("/parcours")
}
</script>

<template>
  <section class="profile-section">
    <div class="profile-container">
      <!-- COLONNE TEXTE -->
      <Motion
        tag="div"
        class="profile-text"
        :initial="{ opacity: 0, x: -40, y: 20 }"
        :whileInView="{ opacity: 1, x: 0, y: 0 }"
        :transition="{ duration: 0.9, ease: 'easeOut' }"
        :viewport="{ once: true, amount: 0.3 }"
      >
        <Motion
          tag="h2"
          class="profile-title"
          :initial="{ opacity: 0, y: 18 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.7, delay: 0.05, ease: 'easeOut' }"
          :viewport="{ once: true, amount: 0.4 }"
        >
          {{ profile.title }}
        </Motion>

        <Motion
          tag="div"
          class="profile-name-block"
          :initial="{ opacity: 0, y: 18 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.75, delay: 0.12, ease: 'easeOut' }"
          :viewport="{ once: true, amount: 0.4 }"
        >
          <p class="profile-name">{{ profile.name }}</p>
          <p class="profile-role">{{ profile.role }}</p>
        </Motion>

        <Motion
          tag="p"
          class="profile-intro"
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, delay: 0.2, ease: 'easeOut' }"
          :viewport="{ once: true, amount: 0.35 }"
        >
          {{ profile.intro }}
        </Motion>

        <Motion
          tag="p"
          class="profile-paragraph"
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.85, delay: 0.28, ease: 'easeOut' }"
          :viewport="{ once: true, amount: 0.35 }"
        >
          {{ profile.paragraph }}
        </Motion>

        <Motion
          tag="ul"
          class="profile-list"
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.9, delay: 0.35, ease: 'easeOut' }"
          :viewport="{ once: true, amount: 0.35 }"
        >
          <li
            v-for="(item, idx) in profile.bullets"
            :key="idx"
          >
            {{ item }}
          </li>
        </Motion>

        <Motion
          tag="div"
          class="profile-button-row"
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.95, delay: 0.42, ease: 'easeOut' }"
          :viewport="{ once: true, amount: 0.35 }"
        >
          <button class="profile-btn" @click="goToParcours">
            En savoir plus
          </button>
        </Motion>
      </Motion>

      <!-- COLONNE IMAGE -->
      <Motion
        tag="div"
        class="profile-photo-wrapper"
        :initial="{ opacity: 0, x: 40, y: 20, scale: 0.96 }"
        :whileInView="{ opacity: 1, x: 0, y: 0, scale: 1 }"
        :transition="{ duration: 1, delay: 0.12, ease: 'easeOut' }"
        :viewport="{ once: true, amount: 0.3 }"
      >
        <el-card shadow="never" class="profile-card">
          <div class="profile-image-box">
            <img
              :src="profile.photo"
              :alt="profile.name"
              class="profile-photo"
            />

            <!-- Overlay corrigé -->
            <div class="profile-overlay-main"></div>
            <div class="profile-overlay-highlight"></div>
            <div class="profile-overlay-bottom"></div>
          </div>
        </el-card>
      </Motion>
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
  align-items: stretch;
}

/* ===== TEXTE ===== */

.profile-text {
  flex: 1.05;
  display: flex;
  flex-direction: column;
}

.profile-title {
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
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
  content: "•";
  position: absolute;
  left: 0;
  top: 0;
  color: #ffffff;
}

.profile-button-row {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;
}

.profile-btn {
  border: none;
  outline: none;
  cursor: pointer;
  background: #f26d6d;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.95rem 1.9rem;
  border-radius: 999px;
  box-shadow: 0 12px 28px rgba(242, 109, 109, 0.28);
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
}

.profile-btn:hover {
  background: #ef5d5d;
  transform: translateY(-2px);
  box-shadow: 0 16px 32px rgba(242, 109, 109, 0.34);
}

/* ===== IMAGE ===== */

.profile-photo-wrapper {
  flex: 1;
  display: flex;
}

.profile-card {
  width: 100%;
  height: 100%;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 0;
  box-shadow: none;
  overflow: hidden;
}

.profile-card :deep(.el-card__body) {
  padding: 0;
  width: 100%;
  height: 100%;
}

.profile-image-box {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 530px;
  overflow: hidden;
  border-radius: 8px;
}

.profile-photo {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 530px;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
  filter: brightness(0.9) saturate(1.02);
}

/* voile global plus visible */
.profile-overlay-main {
  position: absolute;
  inset: 0;
  background: rgba(7, 10, 24, 0.14);
  z-index: 1;
  pointer-events: none;
}

/* léger halo lumineux en haut/gauche pour un effet plus premium */
.profile-overlay-highlight {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at 22% 18%,
      rgba(255, 255, 255, 0.22) 0%,
      rgba(255, 255, 255, 0.1) 18%,
      rgba(255, 255, 255, 0.03) 34%,
      rgba(255, 255, 255, 0) 52%
    );
  z-index: 2;
  pointer-events: none;
}

/* dégradé bas plus fort */
.profile-overlay-bottom {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to top,
      rgba(5, 8, 22, 0.58) 0%,
      rgba(5, 8, 22, 0.36) 18%,
      rgba(5, 8, 22, 0.18) 34%,
      rgba(5, 8, 22, 0.04) 55%,
      rgba(5, 8, 22, 0) 74%
    );
  z-index: 3;
  pointer-events: none;
}

/* ===== RESPONSIVE ===== */

@media (max-width: 960px) {
  .profile-container {
    flex-direction: column;
    padding: 0 1rem;
    gap: 2rem;
  }

  .profile-text {
    width: 100%;
  }

  .profile-photo-wrapper {
    width: 100%;
    height: auto;
  }

  .profile-card {
    height: auto;
    width: 100%;
  }

  .profile-image-box {
    min-height: auto;
  }

  .profile-photo {
    width: 100%;
    height: auto;
    min-height: auto;
    max-height: 420px;
    object-fit: cover;
    object-position: center;
  }

  .profile-button-row {
    margin-top: 1.6rem;
  }
}

@media (max-width: 600px) {
  .profile-section {
    padding: 3rem 0;
  }

  .profile-container {
    padding: 0 0.8rem;
    gap: 1.6rem;
  }

  .profile-text {
    width: 100%;
  }

  .profile-title {
    font-size: 2rem;
    margin-bottom: 0.4rem;
  }

  .profile-name {
    font-size: 1.4rem;
  }

  .profile-role {
    font-size: 1rem;
  }

  .profile-intro,
  .profile-paragraph {
    font-size: 0.97rem;
    line-height: 1.8;
  }

  .profile-list {
    font-size: 0.95rem;
    line-height: 1.75;
  }

  .profile-photo {
    width: 100%;
    max-height: 320px;
    object-fit: cover;
    object-position: center;
  }

  .profile-btn {
    font-size: 0.92rem;
    padding: 0.82rem 1.45rem;
  }
}
</style>