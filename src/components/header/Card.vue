<script setup>
import { useRouter } from "vue-router";
import { Motion } from "motion-v";

const router = useRouter();

const props = defineProps({
  title: {
    type: String,
    default: "Développeur Full-Stack • Expertise et Passion",
  },
  subtitle: {
    type: String,
    default:
      "Création d'applications modernes, performantes et sécurisées pour répondre à vos besoins.",
  },
  description: {
    type: String,
    default:
      "Avec 5 années d'expérience dans le développement web, je conçois des solutions sur mesure en combinant les meilleures technologies du moment. De la conception frontend à la gestion backend, en passant par le déploiement et la maintenance, je m'engage à fournir des résultats de qualité.",
  },
  footer: {
    type: String,
    default: "5 années d'expérience • Technologies modernes • Solutions sur mesure",
  },

  primaryTo: { type: String, default: "" },
  secondaryTo: { type: String, default: "" },

  primaryText: { type: String, default: "Voir mes projets" },
  secondaryText: { type: String, default: "Découvrir mon profil" },
});

const goTo = (to) => {
  if (!to) return;

  if (/^https?:\/\//.test(to)) {
    window.open(to, "_blank", "noopener,noreferrer");
    return;
  }

  router.push(to);
};

const onPrimary = () => goTo(props.primaryTo);
const onSecondary = () => goTo(props.secondaryTo);
</script>

<template>
  <Motion
    tag="section"
    class="hero-card-wrap"
    :initial="{ opacity: 0, y: 40, scale: 0.985 }"
    :whileInView="{ opacity: 1, y: 0, scale: 1 }"
    :transition="{ duration: 1.1, ease: 'easeOut' }"
    :viewport="{ once: true, amount: 0.35 }"
  >
    <el-card class="hero-card" shadow="never" :body-style="{ padding: '0' }">
      <div class="hero-overlay" aria-hidden="true"></div>

      <div class="hero-content">
        <Motion
          tag="div"
          :initial="{ opacity: 0, y: 18 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.95, delay: 0.12, ease: 'easeOut' }"
          :viewport="{ once: true, amount: 0.5 }"
        >
          <h1 class="hero-title">{{ title }}</h1>
          <p class="hero-subtitle">{{ subtitle }}</p>
          <p class="hero-desc">{{ description }}</p>
        </Motion>

        <Motion
          tag="div"
          class="hero-actions"
          :initial="{ opacity: 0, y: 12 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.9, delay: 0.22, ease: 'easeOut' }"
          :viewport="{ once: true, amount: 0.5 }"
        >
          <button
            class="btn btn-primary"
            type="button"
            @click="onPrimary"
            :disabled="!primaryTo"
            :aria-disabled="!primaryTo"
          >
            {{ primaryText }}
          </button>

          <button
            class="btn btn-secondary"
            type="button"
            @click="onSecondary"
            :disabled="!secondaryTo"
            :aria-disabled="!secondaryTo"
          >
            {{ secondaryText }}
          </button>
        </Motion>

        <Motion
          tag="div"
          class="hero-footer"
          :initial="{ opacity: 0, y: 10 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, delay: 0.3, ease: 'easeOut' }"
          :viewport="{ once: true, amount: 0.5 }"
        >
          {{ footer }}
        </Motion>
      </div>
    </el-card>
  </Motion>
</template>

<style scoped>
.hero-card-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2.5rem 0 3rem;
}

.hero-card {
  width: min(1200px, 92vw);
  min-height: 440px;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  background: transparent !important;
  border: 1px solid rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(6px);
}

:deep(.el-card__body) {
  background: transparent !important;
  padding: 0 !important;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0.40),
    rgba(0, 0, 0, 0.60)
  );
  box-shadow: inset 0 0 0 9999px rgba(0, 0, 0, 0.30);
}

.hero-content {
  position: relative;
  padding: 3.2rem 2.6rem 2.4rem;
  text-align: center;
  color: #f9fafb;
}

.hero-title {
  font-size: clamp(1.8rem, 2.8vw, 2.8rem);
  font-weight: 800;
  margin: 0 0 1.2rem;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.55);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: clamp(1.05rem, 1.35vw, 1.25rem);
  color: rgba(255, 255, 255, 0.90);
  line-height: 1.85;
  margin: 0 auto 1.6rem;
  max-width: 1000px;
}

.hero-desc {
  font-size: 1.06rem;
  line-height: 1.95;
  color: rgba(255, 255, 255, 0.82);
  max-width: 1000px;
  margin: 0 auto 2.2rem;
}

.hero-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.3rem;
  flex-wrap: wrap;
  margin-bottom: 1.4rem;
}

.btn {
  appearance: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  background: transparent;
  padding: 1.1rem 2.7rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: 0.2px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 245px;
  transition:
    transform 220ms ease,
    box-shadow 220ms ease,
    border-color 220ms ease,
    opacity 220ms ease;
}

.btn-primary {
  color: #ff6b6b;
  border: 1px solid rgba(255, 75, 75, 0.95);
  box-shadow: 0 10px 28px rgba(255, 75, 75, 0.12);
}

.btn-secondary {
  color: #ffd24d;
  border: 1px solid rgba(255, 210, 77, 0.90);
  box-shadow: 0 10px 28px rgba(255, 210, 77, 0.10);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.45);
}

.btn:active {
  transform: translateY(0);
}

.btn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.hero-footer {
  margin-top: 0.8rem;
  font-size: 0.98rem;
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.7;
}

/* ===== TABLETTE ===== */
@media (max-width: 900px) {
  .hero-card {
    width: min(1200px, 94vw);
    min-height: unset;
  }

  .hero-content {
    padding: 2.6rem 1.6rem 2rem;
  }

  .hero-subtitle {
    line-height: 1.75;
  }

  .hero-desc {
    line-height: 1.8;
  }
}

/* ===== MOBILE ===== */
@media (max-width: 700px) {
  .hero-card-wrap {
    padding: 2rem 0 2.4rem;
  }

  .hero-card {
    width: 96vw;
    min-height: unset;
    border-radius: 18px;
  }

  .hero-content {
    padding: 2rem 0.95rem 1.6rem;
  }

  .hero-title {
    font-size: 1.65rem;
    margin-bottom: 0.9rem;
  }

  .hero-subtitle {
    font-size: 0.98rem;
    line-height: 1.7;
    margin-bottom: 1.1rem;
  }

  .hero-desc {
    font-size: 0.96rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  .hero-actions {
    gap: 0.9rem;
    margin-bottom: 1rem;
  }

  .btn {
    width: 100%;
    min-width: unset;
    padding: 0.95rem 1.2rem;
    font-size: 0.96rem;
  }

  .hero-footer {
    font-size: 0.9rem;
    line-height: 1.6;
  }
}

/* ===== PETIT MOBILE ===== */
@media (max-width: 480px) {
  .hero-card {
    width: 97vw;
    border-radius: 16px;
  }

  .hero-content {
    padding: 1.8rem 0.8rem 1.4rem;
  }

  .hero-title {
    font-size: 1.45rem;
  }

  .hero-subtitle {
    font-size: 0.94rem;
  }

  .hero-desc {
    font-size: 0.93rem;
  }

  .btn {
    font-size: 0.93rem;
    padding: 0.9rem 1rem;
  }

  .hero-footer {
    font-size: 0.86rem;
  }
}
</style>