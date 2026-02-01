<script setup>
import { computed } from "vue";
import { Motion } from "motion-v";

const props = defineProps({
  title: { type: String, default: "Développeur Full-Stack • Expertise et Passion" },
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
  primaryText: { type: String, default: "Voir mes projets" },
  secondaryText: { type: String, default: "Réserver un créneau" },
  primaryHref: { type: String, default: "" },
  secondaryHref: { type: String, default: "" },
});

const emit = defineEmits(["primary", "secondary"]);

const primaryIsLink = computed(() => !!props.primaryHref);
const secondaryIsLink = computed(() => !!props.secondaryHref);

const onPrimary = () => {
  if (!primaryIsLink.value) emit("primary");
};
const onSecondary = () => {
  if (!secondaryIsLink.value) emit("secondary");
};
</script>

<template>
  <Motion
    tag="section"
    class="hero-card-wrap"
    :initial="{ opacity: 0, y: 40, scale: 0.985 }"
    :whileInView="{ opacity: 1, y: 0, scale: 1 }"
    :transition="{ duration: 1.4, ease: 'easeOut' }"
    :viewport="{ once: true, amount: 0.35 }"
  >
    <el-card class="hero-card" shadow="never" :body-style="{ padding: '0' }">
      <!-- Le fond décor / image est derrière (transparent) -->
      <div class="hero-overlay" aria-hidden="true"></div>

      <div class="hero-content">
        <Motion
          tag="div"
          :initial="{ opacity: 0, y: 18 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 1.15, delay: 0.18, ease: 'easeOut' }"
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
          :transition="{ duration: 1.05, delay: 0.3, ease: 'easeOut' }"
          :viewport="{ once: true, amount: 0.5 }"
        >
          <component
            :is="primaryIsLink ? 'a' : 'button'"
            class="btn btn-primary"
            :href="primaryHref || undefined"
            @click="onPrimary"
          >
            {{ primaryText }}
          </component>

          <component
            :is="secondaryIsLink ? 'a' : 'button'"
            class="btn btn-secondary"
            :href="secondaryHref || undefined"
            @click="onSecondary"
          >
            {{ secondaryText }}
          </component>
        </Motion>

        <div class="hero-footer">{{ footer }}</div>
      </div>
    </el-card>
  </Motion>
</template>

<style scoped>
/* ===== Wrapper ===== */
.hero-card-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2.5rem 0 3rem;
}

/* ===== Card ===== */
.hero-card {
  width: min(1200px, 92vw);
  min-height: 440px; /* ✅ plus haute */
  border-radius: 24px;
  overflow: hidden;
  position: relative;

  /* card transparente */
  background: transparent !important;
  border: 1px solid rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(6px);
}

/* ⚠️ neutraliser Element Plus */
:deep(.el-card__body) {
  background: transparent !important;
  padding: 0 !important;
}

/* ===== Overlay EXACT (comme la référence) ===== */
.hero-overlay {
  position: absolute;
  inset: 0;

  /* gradient principal */
  background: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0.40),
    rgba(0, 0, 0, 0.60)
  );

  /* voile sombre supplémentaire */
  box-shadow: inset 0 0 0 9999px rgba(0, 0, 0, 0.30);
}

/* ===== Content ===== */
.hero-content {
  position: relative;
  padding: 3.2rem 2.6rem 2.4rem;
  text-align: center;
  color: #f9fafb;
}

/* ===== Typographies ===== */
.hero-title {
  font-size: clamp(1.8rem, 2.8vw, 2.8rem);
  font-weight: 800;
  margin: 0 0 1.2rem;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.55);
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

/* ===== Actions ===== */
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
    border-color 220ms ease;
}

/* bouton rouge */
.btn-primary {
  color: #ff6b6b;
  border: 1px solid rgba(255, 75, 75, 0.95);
  box-shadow: 0 10px 28px rgba(255, 75, 75, 0.12);
}

/* bouton jaune */
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

/* ===== Footer ===== */
.hero-footer {
  margin-top: 0.8rem;
  font-size: 0.98rem;
  color: rgba(255, 255, 255, 0.62);
}

/* ===== Responsive ===== */
@media (max-width: 700px) {
  .hero-card {
    min-height: unset;
  }

  .hero-content {
    padding: 2.2rem 1.3rem 1.7rem;
  }

  .btn {
    width: 100%;
    min-width: unset;
  }

  .hero-desc {
    font-size: 1rem;
  }
}

</style>
