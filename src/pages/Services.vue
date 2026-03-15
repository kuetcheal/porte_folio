<script setup>
import { ref, computed } from 'vue'
import { Motion } from 'motion-v'

const heroBg = new URL('@/assets/infos2.jpg', import.meta.url).href

const services = [
  {
    key: 'ecommerce',
    name: 'E-commerce sur mesure',
    icon: 'fa-cart-shopping',
    short: 'Vendez en ligne avec une solution adaptée à vos objectifs.',
    color: '#0d7aa8',
    gradientFrom: '#01506f',
    gradientTo: '#0ba4d3',
    duration: '4 à 8 semaines',
    budget: 'À négocier',
    intro:
      "Transformez votre vision en une boutique en ligne performante qui convertit vos visiteurs en clients fidèles.",
    featuresTitle: '✨ Fonctionnalités incluses',
    features: [
      'Interface utilisateur intuitive et moderne',
      'Gestion complète des produits et stocks',
      'Paiements sécurisés (Stripe, PayPal, etc.)',
      'Tableau de bord administrateur complet',
      'Optimisation mobile et performances',
      "Intégration des solutions de livraison"
    ],
    benefitsTitle: '🎯 Bénéfices pour vous',
    benefits: [
      'Augmentez vos ventes en ligne',
      'Réduisez vos coûts opérationnels',
      'Offrez une meilleure expérience à vos clients',
      'Gagnez du temps grâce à l’automatisation',
      'Accédez à de nouveaux marchés'
    ],
    processTitle: '🚀 Mon processus de travail',
    steps: [
      { num: 1, title: 'Analyse de vos besoins' },
      { num: 2, title: 'Conception UX/UI' },
      { num: 3, title: 'Développement & intégration' },
      { num: 4, title: 'Tests & optimisations' },
      { num: 5, title: 'Lancement & formation' }
    ],
    cta: 'Contactez moi '
  },
  {
    key: 'saas',
    name: 'Applications SaaS Métier',
    icon: 'fa-gears',
    short: 'Automatisez vos processus avec une solution SaaS qui colle à votre activité.',
    color: '#7c3aed',
    gradientFrom: '#581c87',
    gradientTo: '#a855f7',
    duration: 'Dépend du projet',
    budget: 'À négocier',
    intro:
      "Gagnez en productivité avec une application web qui répond exactement aux besoins de votre métier.",
    featuresTitle: '✨ Fonctionnalités incluses',
    features: [
      'Architecture scalable et sécurisée',
      'Gestion multi-utilisateurs et permissions',
      'Tableaux de bord et rapports en temps réel',
      'API REST pour intégrations tierces',
      'Synchronisation automatique des données',
      'Interface responsive et moderne'
    ],
    benefitsTitle: '🎯 Bénéfices pour vous',
    benefits: [
      'Automatisez vos tâches répétitives',
      'Centralisez vos données métier',
      "Améliorez la collaboration d’équipe",
      "Disposez d’indicateurs clés fiables",
      'Réduisez les erreurs manuelles'
    ],
    processTitle: '🚀 Mon processus de travail',
    steps: [
      { num: 1, title: 'Audit de vos processus' },
      { num: 2, title: 'Conception architecturale' },
      { num: 3, title: 'Développement itératif' },
      { num: 4, title: 'Tests & ajustements' },
      { num: 5, title: 'Déploiement & évolution' }
    ],
    cta: 'Parler de votre projet SaaS'
  },
  {
    key: 'automation',
    name: 'Automatiser et Intégrer',
    icon: 'fa-right-left',
    short: 'Connectez vos outils et automatisez vos workflows.',
    color: '#16a34a',
    gradientFrom: '#166534',
    gradientTo: '#22c55e',
    duration: '2 à 4 semaines',
    budget: 'À négocier',
    intro:
      "Faites communiquer vos systèmes entre eux pour éliminer les tâches manuelles et gagner un temps précieux.",
    featuresTitle: '✨ Fonctionnalités incluses',
    features: [
      'Intégration d’API tierces (CRM, ERP, etc.)',
      'Synchronisation automatique des données',
      'Scripts personnalisés pour vos besoins métier',
      'Webhooks & notifications en temps réel',
      'Migration et import/export de données',
      'Documentation technique complète'
    ],
    benefitsTitle: '🎯 Bénéfices pour vous',
    benefits: [
      'Éliminez les saisies manuelles',
      'Réduisez les erreurs humaines',
      'Accélérez vos processus métier',
      'Unifiez vos sources de données',
      'Gagnez en visibilité sur votre activité'
    ],
    processTitle: '🚀 Mon processus de travail',
    steps: [
      { num: 1, title: 'Cartographie de votre écosystème' },
      { num: 2, title: 'Identification des opportunités' },
      { num: 3, title: 'Développement des connecteurs' },
      { num: 4, title: 'Tests & monitoring' },
      { num: 5, title: 'Documentation & transfert' }
    ],
    cta: 'Mettre en place des automatisations'
  },
  {
    key: 'seo',
    name: 'Optimisation & SEO',
    icon: 'fa-chart-line',
    short: 'Boostez votre visibilité et vos performances.',
    color: '#ea580c',
    gradientFrom: '#9a3412',
    gradientTo: '#f97316',
    duration: '1 à 3 semaines',
    budget: 'À négocier',
    intro:
      "Améliorez la vitesse, le référencement et l’expérience utilisateur de votre site pour maximiser vos résultats.",
    featuresTitle: '✨ Fonctionnalités incluses',
    features: [
      'Audit technique et SEO complet',
      'Optimisation des temps de chargement',
      'Amélioration du Core Web Vitals',
      'Optimisation mobile (Mobile-First)',
      'Stratégie de contenu SEO',
      'Suivi et reporting des performances'
    ],
    benefitsTitle: '🎯 Bénéfices pour vous',
    benefits: [
      'Améliorez votre positionnement Google',
      'Augmentez votre trafic organique',
      'Réduisez votre taux de rebond',
      'Convertissez plus de visiteurs',
      'Améliorez la satisfaction des utilisateurs'
    ],
    processTitle: '✨ Mon processus de travail',
    steps: [
      { num: 1, title: 'Audit complet de votre site' },
      { num: 2, title: 'Rapport de recommandations' },
      { num: 3, title: 'Implémentation des optimisations' },
      { num: 4, title: 'Tests de performance' },
      { num: 5, title: 'Suivi mensuel' }
    ],
    cta: 'Booster la visibilité de mon site'
  }
]

const activeKey = ref('ecommerce')

const currentService = computed(() =>
  services.find((s) => s.key === activeKey.value) ?? services[0]
)

const selectService = (key) => {
  activeKey.value = key
}
</script>

<template>
  <main class="services-page">
    <section
      class="services-hero"
      :style="{ backgroundImage: `url(${heroBg})` }"
    >
      <div class="services-hero-overlay"></div>

      <Motion
        tag="div"
        class="services-hero-inner"
        :initial="{ opacity: 0, y: 26, scale: 0.985 }"
        :whileInView="{ opacity: 1, y: 0, scale: 1 }"
        :transition="{ duration: 0.9, ease: 'easeOut' }"
        :viewport="{ once: true, amount: 0.35 }"
      >
        <h1 class="services-hero-title">
          Mes Compétences de Développement Web
        </h1>
        <p class="services-hero-subtitle">
          Je conçois des solutions techniques sur mesure pour transformer vos idées en
          applications web performantes et rentables.
        </p>
      </Motion>
    </section>

    <section class="services-section">
      <div class="services-container">
        <div class="services-tabs">
          <Motion
            v-for="(service, index) in services"
            :key="service.key"
            tag="button"
            class="service-tab"
            :class="{ active: activeKey === service.key }"
            @click="selectService(service.key)"
            :initial="{ opacity: 0, y: 26, scale: 0.97 }"
            :whileInView="{ opacity: 1, y: 0, scale: 1 }"
            :transition="{ duration: 0.65, delay: index * 0.07, ease: 'easeOut' }"
            :viewport="{ once: true, amount: 0.2 }"
          >
            <div
              class="service-tab-inner"
              :style="{
                backgroundImage: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`
              }"
            >
              <div class="tab-head">
                <div class="tab-icon-wrapper">
                  <i :class="['fa-solid', service.icon]"></i>
                </div>
                <h3 class="tab-title">{{ service.name }}</h3>
              </div>

              <p class="tab-short">
                {{ service.short }}
              </p>
            </div>
          </Motion>
        </div>

        <Motion
          tag="section"
          class="service-details"
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, ease: 'easeOut' }"
          :viewport="{ once: true, amount: 0.15 }"
        >
          <header
            class="service-header"
            :style="{ '--accent': currentService.color }"
          >
            <div class="service-header-top">
              <Motion
                tag="h2"
                class="service-title"
                :key="currentService.key + '-title'"
                :initial="{ opacity: 0, y: 18 }"
                :animate="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.45, ease: 'easeOut' }"
              >
                {{ currentService.name }}
              </Motion>

              <Motion
                tag="p"
                class="service-intro"
                :key="currentService.key + '-intro'"
                :initial="{ opacity: 0, y: 16 }"
                :animate="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.5, delay: 0.05, ease: 'easeOut' }"
              >
                {{ currentService.intro }}
              </Motion>
            </div>

            <Motion
              tag="div"
              class="service-badges"
              :key="currentService.key + '-badges'"
              :initial="{ opacity: 0, y: 12 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.45, delay: 0.08, ease: 'easeOut' }"
            >
              <span class="badge badge-outline">
                <i class="fa-solid fa-handshake-angle badge-icon" />
                {{ currentService.budget }}
              </span>
              <span class="badge badge-filled">
                <i class="fa-solid fa-clock badge-icon" />
                {{ currentService.duration }}
              </span>
            </Motion>
          </header>

          <div class="service-columns">
            <Motion
              tag="div"
              class="service-col"
              :key="currentService.key + '-features'"
              :initial="{ opacity: 0, x: -18 }"
              :animate="{ opacity: 1, x: 0 }"
              :transition="{ duration: 0.45, ease: 'easeOut' }"
            >
              <h3>{{ currentService.featuresTitle }}</h3>
              <ul>
                <li v-for="(item, i) in currentService.features" :key="i">
                  {{ item }}
                </li>
              </ul>
            </Motion>

            <Motion
              tag="div"
              class="service-col"
              :key="currentService.key + '-benefits'"
              :initial="{ opacity: 0, x: 18 }"
              :animate="{ opacity: 1, x: 0 }"
              :transition="{ duration: 0.45, delay: 0.04, ease: 'easeOut' }"
            >
              <h3>{{ currentService.benefitsTitle }}</h3>
              <ul>
                <li v-for="(item, i) in currentService.benefits" :key="i">
                  {{ item }}
                </li>
              </ul>
            </Motion>
          </div>

          <section class="service-process">
            <Motion
              tag="h3"
              class="process-title"
              :key="currentService.key + '-process-title'"
              :initial="{ opacity: 0, y: 14 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.45, ease: 'easeOut' }"
            >
              {{ currentService.processTitle }}
            </Motion>

            <div class="process-timeline">
              <Motion
                v-for="(step, idx) in currentService.steps"
                :key="currentService.key + '-' + step.num"
                tag="article"
                class="process-item"
                :initial="{ opacity: 0, y: 18, scale: 0.985 }"
                :animate="{ opacity: 1, y: 0, scale: 1 }"
                :transition="{ duration: 0.4, delay: idx * 0.05, ease: 'easeOut' }"
              >
                <div class="process-top">
                  <div class="process-badge">
                    {{ step.num }}
                  </div>

                  <div
                    v-if="idx !== currentService.steps.length - 1"
                    class="process-connector"
                    aria-hidden="true"
                  ></div>
                </div>

                <div class="process-card">
                  <h4 class="process-step-title">{{ step.title }}</h4>
                  <p class="process-step-desc" v-if="step.desc">{{ step.desc }}</p>
                </div>
              </Motion>
            </div>
          </section>

          <Motion
            tag="footer"
            class="service-cta"
            :key="currentService.key + '-cta'"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.45, delay: 0.08, ease: 'easeOut' }"
          >
            <h3>Prêt à travailler avec moi ?</h3>
            <p class="service-summary">
              si mon profil vous intéresse et vous souhaitez travailler avec moi.
            </p>

            <button class="cta-button">
              <i class="fa-solid fa-paper-plane" />
              {{ currentService.cta }}
            </button>
          </Motion>
        </Motion>
      </div>
    </section>
  </main>
</template>

<style scoped>
.services-page {
  background: #050816;
  color: #f9fafb;
}

.services-hero {
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  height: 400px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.services-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.9));
}

.services-hero-inner {
  position: relative;
  text-align: center;
  max-width: 780px;
  padding: 0 1.5rem;
}

.services-hero-title {
  font-size: 2.4rem;
  font-weight: 900;
  margin-bottom: 0.7rem;
  line-height: 1.2;
}

.services-hero-subtitle {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #e5e7eb;
}

.services-section {
  padding: 3.5rem 0 4.5rem;
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.services-tabs {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.1rem;
  margin-bottom: 3rem;
}

.service-tab {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;
  width: 100%;
}

.service-tab-inner {
  border-radius: 0.75rem;
  padding: 1.1rem 1.15rem 1rem;
  color: #f9fafb;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.45);
  opacity: 0.85;
  transition: transform 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease;
  min-height: 150px;
}

.service-tab.active .service-tab-inner,
.service-tab-inner:hover {
  transform: translateY(-5px);
  box-shadow: 0 22px 50px rgba(0, 0, 0, 0.55);
  opacity: 1;
}

.tab-head {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.tab-icon-wrapper {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tab-icon-wrapper i {
  font-size: 1.15rem;
}

.tab-title {
  font-size: 1.05rem;
  font-weight: 800;
  line-height: 1.35;
  margin: 0;
}

.tab-short {
  font-size: 0.85rem;
  line-height: 1.5;
  color: #e5e7eb;
  margin: 0;
}

.service-details {
  border-radius: 1.1rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
}

.service-header {
  --accent: #06b6d4;
  position: relative;
  justify-content: start;
  padding: 2.6rem 2.4rem 2rem;
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--accent) 70%, #000 30%),
    color-mix(in srgb, var(--accent) 45%, #000 55%)
  );
}

.service-header::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.45));
}

.service-header::after {
  content: "";
  position: absolute;
  inset: -20%;
  background: radial-gradient(700px 260px at 20% 20%, rgba(255, 255, 255, 0.18), transparent 60%);
  opacity: 0.6;
}

.service-header-top,
.service-badges {
  position: relative;
  z-index: 1;
  text-align: start;
  justify-content: start !important;
}

.service-title {
  font-size: 2.4rem;
  font-weight: 900;
  margin-bottom: 0.8rem;
  text-align: start;
  line-height: 1.15;
}

.service-intro {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.95);
  max-width: 920px;
  line-height: 1.7;
  text-align: start;
}

.service-badges {
  margin-top: 1.4rem;
  display: flex;
  justify-content: center;
  gap: 0.9rem;
  flex-wrap: wrap;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  border-radius: 999px;
  padding: 0.6rem 1.25rem;
  font-size: 0.9rem;
  backdrop-filter: blur(6px);
}

.badge-outline {
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.45);
  color: white;
}

.badge-filled {
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  font-weight: 800;
}

.service-columns {
  background: #0b1222;
  padding: 2.4rem 2.4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.service-col h3 {
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.service-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-col li {
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  padding-left: 1.2rem;
  position: relative;
}

.service-col li + li {
  margin-top: 0.35rem;
}

.service-col li::before {
  content: "•";
  position: absolute;
  left: 0;
  top: 0;
  color: #ffb020;
}

.service-process {
  background: #0b1222;
  padding: 0.2rem 2.4rem 2.6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.process-title {
  font-size: 1.25rem;
  font-weight: 900;
  margin: 1.2rem 0 1.2rem;
}

.process-timeline {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;
}

.process-item {
  position: relative;
}

.process-top {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.65rem;
}

.process-badge {
  width: 34px;
  height: 34px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 0.95rem;
  color: #f9fafb;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
}

.process-connector {
  height: 2px;
  flex: 1;
  border-radius: 999px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.22),
    rgba(255, 255, 255, 0.06)
  );
}

.process-card {
  background: #3A3F45;
  border-radius: 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.10);
  padding: 1.05rem 1rem 1.15rem;
  min-height: 84px;
  transition: transform 0.18s ease, border-color 0.18s ease, background 0.18s ease;
}

.process-card:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.18);
  background: rgba(2, 6, 23, 0.72);
}

.process-step-title {
  font-size: 0.95rem;
  font-weight: 900;
  margin-bottom: 0.35rem;
  line-height: 1.35;
}

.process-step-desc {
  font-size: 0.9rem;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.75);
}

.service-cta {
  background: #3A3F45;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 2.2rem;
  text-align: center;
}

.service-cta h3 {
  font-size: 1.6rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
}

.service-cta p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1.2rem;
}

.cta-button {
  border: none;
  border-radius: 999px;
  padding: 1rem 3rem;
  font-size: 1.05rem;
  font-weight: 900;
  background: var(--accent, #06b6d4);
  color: #020617;
  cursor: pointer;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.45);
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}

@media (max-width: 1024px) {
  .services-tabs {
    grid-template-columns: repeat(2, 1fr);
  }

  .process-timeline {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .services-hero {
    height: 350px;
  }

  .services-hero-title {
    font-size: 1.8rem;
  }

  .services-hero-subtitle {
    font-size: 1rem;
  }

  .services-tabs {
    grid-template-columns: 1fr;
    gap: 0.9rem;
  }

  .service-tab-inner {
    min-height: 132px;
    padding: 1rem 1rem 0.95rem;
  }

  .service-columns {
    grid-template-columns: 1fr;
    padding: 2rem 1.5rem;
    gap: 2rem;
  }

  .service-header {
    padding: 2rem 1.5rem 1.6rem;
  }

  .service-title {
    font-size: 1.9rem;
  }

  .service-process {
    padding: 0.2rem 1.5rem 2rem;
  }
}

@media (max-width: 600px) {
  .services-hero {
    height: 320px;
  }

  .services-hero-inner {
    padding: 0 0.9rem;
    max-width: 100%;
  }

  .services-hero-title {
    font-size: 1.45rem;
    line-height: 1.3;
    margin-bottom: 0.8rem;
  }

  .services-hero-subtitle {
    font-size: 0.98rem;
    line-height: 1.75;
  }

  .services-section {
    padding: 2.6rem 0 3.2rem;
  }

  .services-container {
    padding: 0 0.75rem;
  }

  .services-tabs {
    gap: 0.8rem;
    margin-bottom: 1.8rem;
  }

  .service-tab {
    width: 100%;
  }

  .service-tab-inner {
    width: 90%;
    min-height: 118px;
    padding: 0.9rem 0.95rem 0.9rem;
    gap: 0.55rem;
    border-radius: 0.95rem;
  }

  .tab-head {
    gap: 0.7rem;
    align-items: center;
  }

  .tab-icon-wrapper {
    width: 2.15rem;
    height: 2.15rem;
  }

  .tab-icon-wrapper i {
    font-size: 0.95rem;
  }

  .tab-title {
    font-size: 0.95rem;
    line-height: 1.3;
  }

  .tab-short {
    font-size: 0.83rem;
    line-height: 1.45;
    max-width: 92%;
  }

  .service-details {
    border-radius: 0.95rem;
  }

  .service-header {
    padding: 1.45rem 1rem 1.25rem;
  }

  .service-title {
    font-size: 1.45rem;
    margin-bottom: 0.65rem;
  }

  .service-intro {
    font-size: 0.94rem;
    line-height: 1.7;
  }

  .service-badges {
    margin-top: 1rem;
    gap: 0.6rem;
  }

  .badge {
    font-size: 0.82rem;
    padding: 0.52rem 0.95rem;
  }

  .service-columns {
    padding: 1.35rem 1rem 1.1rem;
    gap: 1.35rem;
  }

  .service-col h3 {
    font-size: 1.02rem;
    margin-bottom: 0.75rem;
  }

  .service-col li {
    font-size: 0.92rem;
    line-height: 1.68;
    padding-left: 1rem;
  }

  .service-process {
    padding: 0.1rem 1rem 1.4rem;
  }

  .process-title {
    font-size: 1.02rem;
    margin: 0.95rem 0 0.9rem;
  }

  .process-timeline {
    grid-template-columns: 1fr;
    gap: 0.85rem;
  }

  .process-top {
    margin-bottom: 0.45rem;
  }

  .process-badge {
    width: 30px;
    height: 30px;
    font-size: 0.86rem;
  }

  .process-connector {
    display: none;
  }

  .process-card {
    min-height: auto;
    padding: 0.85rem 0.85rem 0.9rem;
  }

  .process-step-title {
    font-size: 0.9rem;
    margin-bottom: 0;
  }

  .process-step-desc {
    font-size: 0.84rem;
    line-height: 1.5;
  }

  .service-cta {
    padding: 1.4rem 1rem 1.5rem;
  }

  .service-cta h3 {
    font-size: 1.2rem;
  }

  .service-cta p {
    font-size: 0.93rem;
    line-height: 1.65;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
    padding: 0.9rem 1rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 420px) {
  .services-container {
    padding: 0 0.65rem;
  }

  .service-tab-inner {
    min-height: 112px;
    padding: 0.85rem 0.9rem 0.85rem;
  }

  .tab-title {
    font-size: 0.9rem;
  }

  .tab-short {
    font-size: 0.79rem;
    max-width: 90%;
  }

  .service-header {
    padding: 1.25rem 0.9rem 1.1rem;
  }

  .service-title {
    font-size: 1.32rem;
  }

  .service-intro {
    font-size: 0.9rem;
  }

  .service-columns {
    padding: 1.2rem 0.9rem 1rem;
  }

  .service-process {
    padding: 0.1rem 0.9rem 1.25rem;
  }

  .service-cta {
    padding: 1.25rem 0.9rem 1.35rem;
  }
}
</style>