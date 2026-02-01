<template>
  <transition name="slide-up">
    <div v-if="visible" class="cookie-banner">
      <div class="cookie-content">
        <!-- Texte -->
        <div class="cookie-text">
          <div class="cookie-title">
            🍪 Respect de la vie privée
          </div>
          <p>
            Ce site utilise des cookies pour améliorer votre expérience,
            analyser le trafic et personnaliser le contenu.
            Vous pouvez accepter tous les cookies ou continuer sans les accepter
            (seuls les cookies essentiels seront utilisés).
          </p>
          <a href="/politique-cookies" class="cookie-link">
            En savoir plus sur la politique de cookies
          </a>
        </div>

        <!-- Boutons -->
        <div class="cookie-actions">
          <button class="btn accept" @click="acceptAll">
            ✔ Accepter tous les cookies
          </button>
          <button class="btn refuse" @click="refuse">
            ✖ Refuser les non essentiels
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";

const visible = ref(false);

onMounted(() => {
  const consent = localStorage.getItem("cookie-consent");
  if (!consent) {
    visible.value = true;
  }
});

const acceptAll = () => {
  localStorage.setItem("cookie-consent", "accepted");
  visible.value = false;
};

const refuse = () => {
  localStorage.setItem("cookie-consent", "refused");
  visible.value = false;
};
</script>

<style scoped>
/* Animation */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}
.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* Banner */
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(180deg, #1b1f24, #111418);
  color: #ffffff;
  z-index: 9999;
  padding: 24px;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.6);
}

/* Layout */
.cookie-content {
  max-width: 1300px;
  margin: auto;
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.cookie-text {
  max-width: 800px;
}

.cookie-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 6px;
}

.cookie-text p {
  font-size: 0.95rem;
  opacity: 0.85;
  margin-bottom: 6px;
}

.cookie-link {
  font-size: 0.9rem;
  color: #facc15;
  text-decoration: underline;
}

/* Actions */
.cookie-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 18px;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease;
}

.btn.accept {
  background: #0f4c81;
  color: white;
}

.btn.accept:hover {
  background: #0c3d66;
}

.btn.refuse {
  background: transparent;
  color: #ffffff;
  border: 1px solid #6b7280;
}

.btn.refuse:hover {
  background: rgba(255, 255, 255, 0.08);
}

/* Responsive */
@media (max-width: 768px) {
  .cookie-content {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
