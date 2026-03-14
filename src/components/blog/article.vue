<script setup>
import { computed, ref } from "vue"

const categories = [
  { key: "all", label: "Tous les articles" },
  { key: "web", label: "Développement Web" },
  { key: "cyber", label: "Cybersécurité" },
  { key: "mindset", label: "Mindset" },
  { key: "seo", label: "Optimisation / SEO" },
]

const activeCategory = ref("all")

/**
 * TOTAL = 8
 * Répartition: web(1), cyber(2), mindset(3), seo(2)
 */
const ARTICLES = [
  // WEB (1)
  {
    id: "w1",
    category: "web",
    title: "Stack React + NestJS + PostgreSQL : le trio gagnant pour un SaaS",
    author: "Alex Stephane KUETCHE",
    ago: "il y a 15 jours",
    views: 289,
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=70",
  },

  // CYBER (2)
  {
    id: "c1",
    category: "cyber",
    title: "RBAC accessible : guide complet pour rôles et permissions",
     author: "Alex Stephane KUETCHE",
    ago: "il y a 16 jours",
    views: 225,
    cover:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "c2",
    category: "cyber",
    title: "Sécuriser son site web sans être expert : checklist pragmatique",
    author: "Alex Stephane KUETCHE",
    ago: "il y a 28 jours",
    views: 493,
    cover:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=70",
  },

  // MINDSET (3)
  {
    id: "m1",
    category: "mindset",
    title: "Routine dev : apprendre vite sans s’épuiser (plan 30 jours)",
     author: "Alex Stephane KUETCHE",
    ago: "il y a 3 jours",
    views: 388,
    cover:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "m2",
    category: "mindset",
    title: "Focus : méthode simple pour sortir du multitâche",
    author: "Alex Stephane KUETCHE",
    ago: "il y a 6 jours",
    views: 271,
    cover:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "m3",
    category: "mindset",
    title: "Portfolio efficace : projets qui convainquent (et pourquoi)",
    author: "Alex Stephane KUETCHE",
    ago: "il y a 8 jours",
    views: 519,
    cover:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=70",
  },

  // SEO (2)
  {
    id: "s1",
    category: "seo",
    title: "SEO technique : 20 optimisations qui boostent vraiment le trafic",
    author: "Alex Stephane KUETCHE",
    ago: "il y a 10 jours",
    views: 612,
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "s2",
    category: "seo",
    title: "Core Web Vitals : LCP/INP/CLS expliqués + actions concrètes",
    author: "Alex Stephane KUETCHE",
    ago: "il y a 5 jours",
    views: 403,
    cover:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=70",
  },
]

// affichage
const viewKey = computed(() => `view:${activeCategory.value}`)

const displayedArticles = computed(() => {
  if (activeCategory.value === "all") return ARTICLES
  return ARTICLES.filter((a) => a.category === activeCategory.value)
})

const prettyCategory = (key) => {
  const found = categories.find((c) => c.key === key)
  return found?.label ?? key
}
</script>

<template>
  <section class="articles">
    <!-- filtres -->
    <div
      class="filters"
      v-motion
      :initial="{ opacity: 0, y: -10 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }"
    >
      <el-button
        v-for="c in categories"
        :key="c.key"
        round
        class="pill"
        :class="{ active: activeCategory === c.key }"
        @click="activeCategory = c.key"
      >
        {{ c.label }}
      </el-button>
    </div>

    <!-- grid -->
    <transition name="fade-scale" mode="out-in">
      <div :key="viewKey" class="grid">
        <article
          v-for="(a, idx) in displayedArticles"
          :key="a.id"
          class="card"
          v-motion
          :initial="{ opacity: 0, y: 18, scale: 0.98, filter: 'blur(6px)' }"
          :enter="{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            transition: { delay: idx * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }"
          :hovered="{ y: -8, rotateZ: -0.25, transition: { duration: 0.22, ease: 'easeOut' } }"
        >
          <!-- cover -->
          <div class="cover">
            <div class="shimmer" />
            <img :src="a.cover" :alt="a.title" loading="lazy" />
            <div class="cover-glow" />
          </div>

          <!-- content -->
          <div class="content">
            <div class="meta">
              <el-tag size="small" class="tag" effect="dark">
                {{ prettyCategory(a.category) }}
              </el-tag>

              <div class="mini">
                <span class="ago">{{ a.ago }}</span>
                <span class="dot">•</span>
                <span class="views">{{ a.views }} vues</span>
              </div>
            </div>

            <h2 class="title">{{ a.title }}</h2>

          <div class="footer">
  <div class="author">
    <span class="by">Par</span>
    <span class="name">{{ a.author }}</span>
  </div>

  <a class="read-link" href="#" @click.prevent>
    Lire l’article
    <span class="arrow">→</span>
  </a>
</div>

          </div>
        </article>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.articles {
  padding: 18px 0;
  color: rgba(255, 255, 255, 0.92);
  width: 100%;
}

/* filtres */
.filters {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 10px;
  margin-bottom: 24px;
}

.pill {
  border-radius: 10px;
  border: 1px solid #222731;
  background: #222731;
  min-height: 40px;
  padding: 0 18px;
  color: rgba(255, 255, 255, 0.86);
  font-weight: bold;
  transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
}

.pill:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.04);
}

.pill.active {
  border: 1px solid #222731;
  background: #222731;
}

/* grid */
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px; /* même espace horizontal et vertical */
  align-items: stretch;
}

/* tablette */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }
}

/* mobile */
@media (max-width: 680px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }
}

/* card */
.card {
  border-radius: 5px;
  overflow: hidden;
  border: none !important;
  background: #222731;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* cover */
.cover {
  position: relative;
  height: 220px;
  overflow: hidden;
  background: transparent;
}

.cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.03);
  transition: transform 320ms ease;
  opacity: 0.95;
}

.card:hover .cover img {
  transform: scale(1.08);
}

.cover-glow {
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.28), transparent 55%),
    radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.22), transparent 60%);
  filter: blur(18px);
  opacity: 0;
  transition: opacity 220ms ease;
  pointer-events: none;
}

.card:hover .cover-glow {
  opacity: 1;
}

/* shimmer */
.shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.10) 35%,
    rgba(255, 255, 255, 0) 70%
  );
  transform: translateX(-120%);
  animation: shimmer 2.8s infinite;
  pointer-events: none;
  opacity: 0.65;
}

@keyframes shimmer {
  0% { transform: translateX(-120%); }
  60% { transform: translateX(120%); }
  100% { transform: translateX(120%); }
}

/* content */
.content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

/* meta */
.meta {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.tag {
  border-radius: 0 !important;
  border: 1px solid rgba(255, 255, 255, 0.16);
  flex-shrink: 0;
}

.mini {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  opacity: 0.8;
  flex-wrap: wrap;
  justify-content: flex-end;
  text-align: right;
}

.dot {
  opacity: 0.6;
}

/* titre */
.title {
  font-size: 19px;
  line-height: 1.35;
  margin: 0;
  letter-spacing: 0.2px;
  min-height: 52px;
}

/* footer */
.footer {
  margin-top: auto;
  padding-top: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.author {
  font-size: 12px;
  opacity: 0.86;
}

.author .by {
  opacity: 0.65;
  margin-right: 6px;
}

.author .name {
  font-weight: 700;
}

.read-link {
  border-radius: 0 !important;
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0.2px;
  color: rgba(255, 255, 255, 0.9);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  transition: transform 180ms ease, border-color 180ms ease, opacity 180ms ease;
}

.read-link:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 255, 255, 0.35);
  opacity: 0.95;
}

.arrow {
  transition: transform 180ms ease;
}

.read-link:hover .arrow {
  transform: translateX(3px);
}

/* transition au switch */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 220ms ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.985);
  filter: blur(4px);
}

/* responsive tablette */
@media (max-width: 900px) {
  .cover {
    height: 200px;
  }

  .title {
    font-size: 18px;
    min-height: auto;
  }
}

/* responsive mobile */
@media (max-width: 600px) {
  .articles {
    padding: 14px 0;
  }

  .filters {
    gap: 8px !important;
    justify-content: flex-start;
  }

  .pill {
    min-height: 36px;
    padding: 0 14px;
    font-size: 13px;
  }

  .cover {
    height: 190px;
  }

  .content {
    padding: 14px;
    gap: 10px;
  }

  .meta {
    flex-direction: column;
    align-items: flex-start;
  }

  .mini {
    justify-content: flex-start;
    text-align: left;
  }

  .title {
    font-size: 17px;
    line-height: 1.4;
  }

  .footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .read-link {
    font-size: 14px;
  }
}
</style>