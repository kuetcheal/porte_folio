<script setup>
import { ref, computed } from 'vue'

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

    featuresTitle: 'Fonctionnalités incluses',
    features: [
      'Interface utilisateur intuitive et moderne',
      'Gestion complète des produits et stocks',
      'Paiements sécurisés (Stripe, PayPal, etc.)',
      'Tableau de bord administrateur complet',
      'Optimisation mobile et performances',
      "Intégration des solutions de livraison"
    ],

    benefitsTitle: 'Bénéfices pour vous',
    benefits: [
      'Augmentez vos ventes en ligne',
      'Réduisez vos coûts opérationnels',
      'Offrez une meilleure expérience à vos clients',
      'Gagnez du temps grâce à l’automatisation',
      'Accédez à de nouveaux marchés'
    ],

    processTitle: 'Mon processus de travail',
    steps: [
      {
        num: 1,
        title: 'Analyse de vos besoins',
        desc: 'Compréhension de votre activité, de vos produits et de vos objectifs.'
      },
      {
        num: 2,
        title: 'Conception UX/UI',
        desc: 'Maquettes et parcours client optimisés pour la conversion.'
      },
      {
        num: 3,
        title: 'Développement & intégration',
        desc: 'Mise en place de la boutique, des paiements et des outils métier.'
      },
      {
        num: 4,
        title: 'Tests & optimisations',
        desc: 'Tests fonctionnels, sécurité et performance, ajustements finaux.'
      },
      {
        num: 5,
        title: 'Lancement & formation',
        desc: 'Mise en production et accompagnement pour la prise en main.'
      }
    ],
    cta: 'Demander un devis gratuit'
  },

  {
    key: 'saas',
    name: 'Applications SaaS Métier',
    icon: 'fa-gears',
    short:
      'Automatisez vos processus avec une solution SaaS qui colle à votre activité.',
    color: '#7c3aed',
    gradientFrom: '#581c87',
    gradientTo: '#a855f7',
    duration: 'Dépend du projet',
    budget: 'À négocier',
    intro:
      "Gagnez en productivité avec une application web qui répond exactement aux besoins de votre métier.",

    featuresTitle: 'Fonctionnalités incluses',
    features: [
      'Architecture scalable et sécurisée',
      'Gestion multi-utilisateurs et permissions',
      'Tableaux de bord et rapports en temps réel',
      'API REST pour intégrations tierces',
      'Synchronisation automatique des données',
      'Interface responsive et moderne'
    ],

    benefitsTitle: 'Bénéfices pour vous',
    benefits: [
      'Automatisez vos tâches répétitives',
      'Centralisez vos données métier',
      "Améliorez la collaboration d’équipe",
      "Disposez d’indicateurs clés fiables",
      'Réduisez les erreurs manuelles'
    ],

    processTitle: 'Mon processus de travail',
    steps: [
      {
        num: 1,
        title: 'Audit de vos processus',
        desc: 'Analyse de l’existant et des irritants métier.'
      },
      {
        num: 2,
        title: 'Conception de l’architecture',
        desc: 'Modélisation des données et choix techniques.'
      },
      {
        num: 3,
        title: 'Développement itératif',
        desc: 'Sprints courts, démos régulières et retours utilisateurs.'
      },
      {
        num: 4,
        title: 'Tests & ajustements',
        desc: 'Stabilisation, performance, sécurité, conformité.'
      },
      {
        num: 5,
        title: 'Déploiement & évolution',
        desc: 'Mise en production, support et évolutions continues.'
      }
    ],
    cta: 'Parler de votre projet SaaS'
  },

  {
    key: 'automation',
    name: 'Automatisation & Intégration',
    icon: 'fa-right-left',
    short: 'Connectez vos outils et automatisez vos workflows.',
    color: '#16a34a',
    gradientFrom: '#166534',
    gradientTo: '#22c55e',
    duration: '2 à 4 semaines',
    budget: 'À négocier',
    intro:
      "Faites communiquer vos systèmes entre eux pour éliminer les tâches manuelles et gagner un temps précieux.",

    featuresTitle: 'Fonctionnalités incluses',
    features: [
      'Intégration d’API tierces (CRM, ERP, etc.)',
      'Synchronisation automatique des données',
      'Scripts personnalisés pour vos besoins métier',
      'Webhooks & notifications en temps réel',
      'Migration et import/export de données',
      'Documentation technique complète'
    ],

    benefitsTitle: 'Bénéfices pour vous',
    benefits: [
      'Éliminez les saisies manuelles',
      'Réduisez les erreurs humaines',
      'Accélérez vos processus métier',
      'Unifiez vos sources de données',
      'Gagnez en visibilité sur votre activité'
    ],

    processTitle: 'Mon processus de travail',
    steps: [
      {
        num: 1,
        title: 'Cartographie de votre écosystème',
        desc: 'Inventaire des outils utilisés et de leurs contraintes.'
      },
      {
        num: 2,
        title: 'Identification des opportunités',
        desc: 'Repérage des tâches automatisables à fort impact.'
      },
      {
        num: 3,
        title: 'Développement des connecteurs',
        desc: 'Implémentation des scénarios d’intégration.'
      },
      {
        num: 4,
        title: 'Tests & monitoring',
        desc: 'Validation et surveillance des flux automatisés.'
      },
      {
        num: 5,
        title: 'Documentation & transfert',
        desc: 'Documentation claire et accompagnement de vos équipes.'
      }
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

    featuresTitle: 'Fonctionnalités incluses',
    features: [
      'Audit technique et SEO complet',
      'Optimisation des temps de chargement',
      'Amélioration du Core Web Vitals',
      'Optimisation mobile (Mobile-First)',
      'Stratégie de contenu SEO',
      'Suivi et reporting des performances'
    ],

    benefitsTitle: 'Bénéfices pour vous',
    benefits: [
      'Améliorez votre positionnement Google',
      'Augmentez votre trafic organique',
      'Réduisez votre taux de rebond',
      'Convertissez plus de visiteurs',
      'Améliorez la satisfaction des utilisateurs'
    ],

    processTitle: 'Mon processus de travail',
    steps: [
      {
        num: 1,
        title: 'Audit complet de votre site',
        desc: 'Analyse technique, SEO et UX.'
      },
      {
        num: 2,
        title: 'Rapport de recommandations',
        desc: 'Liste des actions classées par priorité et impact.'
      },
      {
        num: 3,
        title: 'Implémentation des optimisations',
        desc: 'Corrections techniques et améliorations de contenu.'
      },
      {
        num: 4,
        title: 'Tests de performance',
        desc: 'Mesure des gains (PageSpeed, Core Web Vitals, etc.).'
      },
      {
        num: 5,
        title: 'Suivi mensuel',
        desc: 'Monitoring des résultats et ajustements réguliers.'
      }
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
    <!-- ========= HERO ========= -->
    <section
      class="services-hero"
      :style="{ backgroundImage: `url(${heroBg})` }"
    >
      <div class="services-hero-overlay"></div>

      <div class="services-hero-inner">
        <h1 class="services-hero-title">
          Mes Services de Développement Web
        </h1>
        <p class="services-hero-subtitle">
          Des solutions techniques sur mesure pour transformer vos idées en
          applications web performantes et rentables.
        </p>
      </div>
    </section>

    <!-- ========= CONTENU ========= -->
    <section class="services-section">
      <div class="services-container">
        <!-- ====== TABS (4 CARTES) ====== -->
        <div class="services-tabs">
          <button
            v-for="service in services"
            :key="service.key"
            class="service-tab"
            :class="{ active: activeKey === service.key }"
            @click="selectService(service.key)"
          >
            <div
              class="service-tab-inner"
              :style="{
                backgroundImage: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`
              }"
            >
              <div class="tab-icon-wrapper">
                <i :class="['fa-solid', service.icon]"></i>
              </div>
              <h3 class="tab-title">{{ service.name }}</h3>
              <p class="tab-short">
                {{ service.short }}
              </p>
            </div>
          </button>
        </div>

        <!-- ====== BLOC DÉTAIL ====== -->
        <section class="service-details">
          <header
            class="service-header"
            :style="{ '--accent': currentService.color }"
          >
            <div class="service-header-top">
              <h2 class="service-title">
                {{ currentService.name }}
              </h2>
              <p class="service-intro">
                {{ currentService.intro }}
              </p>
            </div>

            <div class="service-badges">
              <span class="badge badge-outline">
                <i class="fa-solid fa-handshake-angle badge-icon" />
                {{ currentService.budget }}
              </span>
              <span class="badge badge-filled">
                <i class="fa-solid fa-clock badge-icon" />
                {{ currentService.duration }}
              </span>
            </div>
          </header>

          <div class="service-columns">
            <div class="service-col">
              <h3>{{ currentService.featuresTitle }}</h3>
              <ul>
                <li v-for="(item, i) in currentService.features" :key="i">
                  {{ item }}
                </li>
              </ul>
            </div>

            <div class="service-col">
              <h3>{{ currentService.benefitsTitle }}</h3>
              <ul>
                <li v-for="(item, i) in currentService.benefits" :key="i">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>

          <!-- ====== PROCESSUS ====== -->
          <section class="service-process">
            <h3>{{ currentService.processTitle }}</h3>
            <div class="process-cards">
              <article
                v-for="step in currentService.steps"
                :key="step.num"
                class="process-card"
              >
                <div class="process-step-number">
                  {{ step.num }}
                </div>
                <h4 class="process-step-title">{{ step.title }}</h4>
                <p class="process-step-desc">
                  {{ step.desc }}
                </p>
              </article>
            </div>
          </section>

          <!-- ====== CTA FINAL ====== -->
          <footer class="service-cta">
            <h3>Prêt à démarrer votre projet&nbsp;?</h3>
            <p>
              Discutons de vos besoins et je vous proposerai une solution
              adaptée à votre budget et vos objectifs.
            </p>

            <button class="cta-button">
              <i class="fa-solid fa-paper-plane" />
              {{ currentService.cta }}
            </button>
          </footer>
        </section>
      </div>
    </section>
  </main>
</template>

<style scoped>
.services-page {
  background: #050816;
  color: #f9fafb;
}

/* ========= HERO ========= */

.services-hero {
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw); /* full-bleed */
  height: 260px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.services-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.78),
    rgba(0, 0, 0, 0.9)
  );
}

.services-hero-inner {
  position: relative;
  text-align: center;
  max-width: 780px;
  padding: 0 1.5rem;
}

.services-hero-title {
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 0.7rem;
}

.services-hero-subtitle {
  font-size: 1rem;
  line-height: 1.7;
  color: #e5e7eb;
}

/* ========= CONTENU ========= */

.services-section {
  padding: 3rem 0 4rem;
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem 0;
}

/* ====== TABS ====== */

.services-tabs {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.service-tab {
  background: transparent;
  border: none;
  padding: 0;
  text-align: left;
  cursor: pointer;
}

.service-tab-inner {
  border-radius: 0.5rem;
  padding: 1.2rem 1.2rem 1rem;
  color: #f9fafb;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease,
    opacity 0.15s ease;
  opacity: 0.85;
}

.service-tab.active .service-tab-inner,
.service-tab-inner:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45);
  opacity: 1;
}

.tab-icon-wrapper {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.4rem;
}

.tab-icon-wrapper i {
  font-size: 1.1rem;
}

.tab-title {
  font-size: 0.95rem;
  font-weight: 700;
}

.tab-short {
  font-size: 0.78rem;
  line-height: 1.4;
  color: #e5e7eb;
}

/* ====== BLOC DÉTAIL ====== */

.service-details {
  background: #111827;
  border-radius: 0.75rem;
  border: 1px solid #1f2933;
  padding: 1.6rem 1.8rem 2rem;
  box-shadow: 0 18px 55px rgba(0, 0, 0, 0.45);
}

.service-header {
  border-bottom: 1px solid #1f2933;
  padding-bottom: 1.2rem;
  margin-bottom: 1.5rem;
}

.service-header-top {
  margin-bottom: 1rem;
}

.service-title {
  font-size: 1.3rem;
  font-weight: 800;
  margin-bottom: 0.35rem;
}

.service-intro {
  font-size: 0.88rem;
  color: #e5e7eb;
}

.service-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 999px;
  font-size: 0.75rem;
  padding: 0.35rem 0.9rem;
  white-space: nowrap;
}

.badge-outline {
  border: 1px solid var(--accent);
  color: var(--accent);
  background: rgba(15, 23, 42, 0.7);
}

.badge-filled {
  border: 1px solid var(--accent);
  background: var(--accent);
  color: #0f172a;
  font-weight: 600;
}

.badge-icon {
  font-size: 0.75rem;
}

/* Colonnes texte */

.service-columns {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.1fr);
  gap: 2.5rem;
  margin-bottom: 2.2rem;
}

.service-col h3 {
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
}

.service-col ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.service-col li {
  font-size: 0.86rem;
  line-height: 1.6;
  color: #e5e7eb;
  position: relative;
  padding-left: 1.1rem;
}

.service-col li + li {
  margin-top: 0.25rem;
}

.service-col li::before {
  content: '•';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--accent, #f97316);
}

/* Processus */

.service-process h3 {
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.process-cards {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.7rem;
}

.process-card {
  background: #0b1120;
  border-radius: 0.5rem;
  border: 1px solid #1f2933;
  padding: 0.75rem 0.8rem 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.process-step-number {
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 999px;
  background: #1f2937;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: #f9fafb;
}

.process-step-title {
  font-size: 0.82rem;
  font-weight: 600;
}

.process-step-desc {
  font-size: 0.78rem;
  line-height: 1.45;
  color: #d1d5db;
}

/* CTA */

.service-cta {
  margin-top: 0.3rem;
  border-radius: 0.75rem;
  background: #020617;
  border: 1px solid #1f2933;
  padding: 1.4rem 1.6rem;
  text-align: center;
}

.service-cta h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

.service-cta p {
  font-size: 0.86rem;
  color: #e5e7eb;
  margin-bottom: 0.9rem;
}

.cta-button {
  border: none;
  border-radius: 999px;
  padding: 0.75rem 2.4rem;
  font-size: 0.9rem;
  font-weight: 600;
  background: var(--accent, #f97316);
  color: #020617;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.45);
}

.cta-button i {
  font-size: 0.9rem;
}

/* ========= RESPONSIVE ========= */

@media (max-width: 1024px) {
  .services-tabs {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .process-cards {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .services-hero {
    height: 220px;
  }

  .services-hero-title {
    font-size: 2rem;
  }

  .services-tabs {
    grid-template-columns: 1fr;
  }

  .service-columns {
    grid-template-columns: 1fr;
  }

  .process-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .process-cards {
    grid-template-columns: 1fr;
  }
}
</style>
