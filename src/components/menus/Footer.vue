<script setup>
const navLinks = [
  { label: 'Parcours', to: '/parcours' },
  { label: 'Projets', to: '/projets' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const phone = '+33 6 13 88 05 11'
const email = 'contact@karim-betkom.com'
const address = '86 Av. Gallieni, 93800 Épinay-sur-Seine'
</script>

<template>
  <div class="footer">
    <div class="footer-inner">
      <!-- Ligne haute : logo + réseaux + nav -->
      <div class="footer-top">
        <div class="brand-socials">
          <div class="brand">GK</div>

          <div class="socials">
            <!-- placeholders pour LinkedIn / GitHub / X -->
            <a href="#" class="social-icon" aria-label="LinkedIn">in</a>
            <a href="#" class="social-icon" aria-label="GitHub">GH</a>
            <a href="#" class="social-icon" aria-label="X">X</a>
          </div>
        </div>

        <nav class="footer-nav">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="footer-link"
          >
            {{ link.label }}
          </router-link>
        </nav>
      </div>

      <hr />

      <!-- Ligne basse : coordonnées -->
      <div class="footer-bottom">
        <div class="contact-item">
          <span class="contact-icon">📞</span>
          <span class="contact-text">{{ phone }}</span>
        </div>

        <div class="contact-item">
          <span class="contact-icon">✉️</span>
          <span class="contact-text">{{ email }}</span>
        </div>

        <div class="contact-item">
          <span class="contact-icon">📍</span>
          <span class="contact-text">{{ address }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  background: #1f2429;
  color: #f4f4f4;
}

.footer-inner {
  max-width: 1200px;       /* ✅ même container que le reste */
  margin: 0 auto;
  padding: 0.75rem 1.5rem 1rem;
}

/* Top line */
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
}

.brand-socials {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.brand {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.15rem;
}

.socials {
  display: flex;
  gap: 0.75rem;
}

.social-icon {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  border: 1px solid #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  text-decoration: none;
  color: #f4f4f4;
}

/* Nav à droite */
.footer-nav {
  display: flex;
  gap: 1.8rem;
}

.footer-link {
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
}

.footer-link.router-link-active {
  color: #ffffff;
}

/* Séparateur */
hr {
  border: none;
  border-top: 1px solid #353b41;
  margin: 0.4rem 0 0.7rem;
}

/* Bottom line : contacts */
.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  font-size: 0.9rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.contact-icon {
  font-size: 1.1rem;
  color: #d99a1f; /* jaune/orangé comme sur ton screen */
}

.contact-text {
  color: #f4f4f4;
}

/* Responsive */
@media (max-width: 900px) {
  .footer-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .footer-nav {
    gap: 1rem;
    flex-wrap: wrap;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
