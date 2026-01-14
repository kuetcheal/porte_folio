<!-- src/pages/Contact.vue -->
<script setup>
import { reactive, ref } from 'vue'

const bgHero = new URL('@/assets/infos3.jpg', import.meta.url).href

const formRef = ref(null)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
})

const rules = {
  firstName: [{ required: true, message: 'Prénom obligatoire', trigger: 'blur' }],
  email: [
    { required: true, message: 'Email obligatoire', trigger: 'blur' },
    { type: 'email', message: 'Email invalide', trigger: ['blur', 'change'] }
  ],
  message: [{ required: true, message: 'Message obligatoire', trigger: 'blur' }]
}

const submitForm = () => {
  if (!formRef.value) return
  formRef.value.validate((valid) => {
    if (valid) {
      // Ici tu pourras plus tard appeler ton API / envoyer un mail
      console.log('Formulaire envoyé :', { ...form })
      ElMessage.success('Votre message a bien été envoyé (simulation).')
      Object.keys(form).forEach((k) => (form[k] = ''))
    }
  })
}
</script>

<template>
  <main class="contact-page">
    <!-- ========= HERO ========= -->
    <section
      class="contact-hero"
      :style="{ backgroundImage: `url(${bgHero})` }"
    >
      <div class="contact-hero-overlay"></div>

      <div class="contact-hero-inner">
        <h1 class="contact-hero-title">Contactez-moi</h1>
        <p class="contact-hero-subtitle">
          Vous avez un projet ? Discutons-en ensemble pour voir comment je peux
          vous aider.
        </p>
      </div>
    </section>

    <!-- ========= CONTENU PRINCIPAL ========= -->
    <section class="contact-section">
      <div class="contact-container">
        <!-- COLONNE FORMULAIRE -->
        <div class="contact-left">
          <h2 class="contact-block-title">
            Vous souhaitez être recontacté ?
          </h2>

          <el-form
            ref="formRef"
            :model="form"
            :rules="rules"
            label-position="top"
            class="contact-form"
          >
            <div class="form-row">
              <el-form-item label="Prénom *" prop="firstName">
                <el-input
                  v-model="form.firstName"
                  placeholder="Votre prénom"
                />
              </el-form-item>

              <el-form-item label="Nom" prop="lastName">
                <el-input v-model="form.lastName" placeholder="Votre nom" />
              </el-form-item>
            </div>

            <div class="form-row">
              <el-form-item label="Email *" prop="email">
                <el-input
                  v-model="form.email"
                  placeholder="exemple@domaine.com"
                />
              </el-form-item>

              <el-form-item label="Téléphone" prop="phone">
                <el-input
                  v-model="form.phone"
                  placeholder="+33 6 12 34 56 78"
                />
              </el-form-item>
            </div>

            <el-form-item label="Message *" prop="message">
              <el-input
                v-model="form.message"
                type="textarea"
                :rows="6"
                placeholder="Décrivez votre projet, vos besoins, vos questions…"
              />
            </el-form-item>

            <div class="contact-submit">
              <el-button
                type="danger"
                size="large"
                round
                @click="submitForm"
              >
                <i class="fa-solid fa-paper-plane submit-icon" />
                Envoyer
              </el-button>
            </div>
          </el-form>
        </div>

        <!-- COLONNE INFOS DE CONTACT -->
        <div class="contact-right">
          <h2 class="contact-block-title">
            Contactez-moi
          </h2>

          <ul class="contact-info-list">
            <li>
              <span class="icon">
                <i class="fa-solid fa-location-dot" />
              </span>
              <div class="info-text">
                <span class="info-label">Adresse</span>
                <span>271 Rue de la Thériaque, 34090 Montpellier</span>
              </div>
            </li>

            <li>
              <span class="icon">
                <i class="fa-solid fa-phone" />
              </span>
              <div class="info-text">
                <span class="info-label">Téléphone (FR)</span>
                <span>+33 7 58 10 31 17</span>
              </div>
            </li>

            <li>
              <span class="icon">
                <i class="fa-solid fa-envelope" />
              </span>
              <div class="info-text">
                <span class="info-label">Email</span>
                <span>akuetche55@gmail.com</span>
              </div>
            </li>

            <li>
              <span class="icon">
                <i class="fa-solid fa-globe" />
              </span>
              <div class="info-text">
                <span class="info-label">Site web</span>
                <span>https://kas-portfolio.com</span>
              </div>
            </li>
          </ul>

          <div class="contact-hours">
            <h3>Horaires</h3>
            <p>
              <strong>Lundi - Vendredi :</strong> 08h30 - 18h30
            </p>
            <p>
              <strong>Week-ends et jours fériés :</strong> Indisponible
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-page {
  background: #050816;
  color: #f9fafb;
  /* pas besoin d'overflow-x ici, c’est déjà sur body */
}

/* ========= HERO ========= */

.contact-hero {
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);   /* sort du container pour toucher les bords écran */
  height: 260px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}


.contact-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.85)
  );
}


.contact-hero-inner {
  position: relative;
  text-align: center;
  max-width: 720px;
  padding: 0 1.5rem;
}

.contact-hero-title {
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 0.7rem;
}

.contact-hero-subtitle {
  font-size: 1rem;
  line-height: 1.7;
  color: #e5e7eb;
}

/* ========= SECTION CONTACT ========= */

.contact-section {
  padding: 3rem 0 4rem;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1.8fr);
  gap: 3rem;
}

.contact-block-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

/* -------- Formulaire -------- */

.contact-form {
  margin-top: 0.3rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
}

.contact-submit {
  margin-top: 1.1rem;
  display: flex;
  justify-content: flex-start;
}

.contact-submit :deep(.el-button) {
  padding: 0.7rem 2.2rem;
  font-size: 0.95rem;
  font-weight: 600;
}

.submit-icon {
  margin-right: 0.6rem;
}

/* -------- Infos de contact -------- */

.contact-right {
  font-size: 0.95rem;
  margin-left: 40px;
}

.contact-info-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
}

.contact-info-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  margin-bottom: 1rem;
}

.icon {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: rgba(248, 250, 252, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon i {
  color: #ff4b4b;
}

.info-text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.info-label {
  font-weight: 600;
  color: #f9fafb;
}

.contact-hours h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
}

.contact-hours p {
  margin: 0.15rem 0;
  color: #e5e7eb;
}

/* ========= RESPONSIVE ========= */

@media (max-width: 900px) {
  .contact-container {
    grid-template-columns: 1fr;
  }

  .contact-right {
    margin-top: 1.5rem;
  }

  .contact-hero {
    height: 220px;
  }

  .contact-hero-title {
    font-size: 2rem;
  }
}

@media (max-width: 600px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-hero-title {
    font-size: 1.8rem;
  }
}
</style>
