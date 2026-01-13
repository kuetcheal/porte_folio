<template>
  <section class="hero">
    <div class="hero-inner">
      <p class="hero-kicker">Développeur Full-Stack • Expertise et Passion</p>

      <h1 class="hero-title">
        Création d'applications modernes, performantes et sécurisées
      </h1>

      <p class="hero-subtitle">
        Avec <span>+5 années d'expérience</span> dans le développement web,
        je conçois des solutions sur mesure en combinant les technologies
        les plus adaptées à vos besoins.
      </p>

      <p class="hero-text">
        De la conception frontend à la gestion backend, en passant par le
        déploiement et la maintenance, je m'engage à fournir des résultats
        fiables, performants et durables.
      </p>

      <div class="hero-actions">
        <el-button
          type="danger"
          round
          plain
          class="btn-primary"
        >
          Voir mes projets
        </el-button>

        <el-button
          type="warning"
          round
          plain
          class="btn-secondary"
        >
          Contactez-moi
        </el-button>
      </div>

      <p class="hero-footer-text">
        + de 5 ans d'expériences • Technologies modernes • Solutions sur mesure
      </p>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1.5rem 4rem;
  background: radial-gradient(circle at top left, #3b0b39 0, #050816 55%, #02040a 100%);
}

.hero-inner {
  max-width: 900px;
  margin: 0 auto;
  padding: 2.5rem 3rem;
  background: rgba(5, 8, 22, 0.96);
  border-radius: 24px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.hero-kicker {
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  font-size: 0.85rem;
  color: #f5f5f5;
  margin-bottom: 0.9rem;
}

.hero-title {
  font-size: 2.1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1rem;
  color: #e2e2e2;
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.hero-subtitle span {
  font-weight: 700;
}

.hero-text {
  font-size: 0.95rem;
  color: #d0d0d0;
  margin-bottom: 1.8rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
}

.btn-primary {
  border-width: 2px;
  border-color: #ff4b4b !important;
  color: #ff4b4b !important;
  padding-inline: 1.8rem;
}

.btn-secondary {
  border-width: 2px;
  border-color: #e6b400 !important;
  color: #e6b400 !important;
  padding-inline: 1.8rem;
}

.hero-footer-text {
  font-size: 0.85rem;
  color: #c8c8c8;
  text-align: center;
  margin-top: 0.5rem;
}

/* Responsive */
@media (max-width: 900px) {
  .hero-inner {
    padding: 2rem 1.6rem;
  }

  .hero-title {
    font-size: 1.7rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
