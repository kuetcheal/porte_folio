<template>
  <section class="services" id="competences">
    <div class="container">
      <h2 class="title">Mes services</h2>
      <p class="subtitle">
        Développeur web full-stack, je conçois des solutions sur mesure, performantes et
        évolutives, en utilisant les technologies les plus adaptées à vos objectifs.
      </p>

     

      <div class="grid">
        <article
          v-for="item in services"
          :key="item.title"
          class="card"
        >
          <div class="icon" v-html="item.icon"></div>

          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-desc">{{ item.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: "E-commerce sur\nmesure",
    desc: "Développement de boutiques en ligne personnalisées, optimisées et intégrant des solutions de paiement",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2ZM6.2 6l.8 4h10.7c.8 0 1.5-.5 1.8-1.2l1.6-3.6A1 1 0 0 0 20.2 4H6.3l-.2-1H3V1h2.6c.5 0 .9.3 1 .8L7 4h13.2v2H6.2Zm1.2 6h10.9l-.7 1.5a2 2 0 0 1-1.8 1.1H8.2a2 2 0 0 1-2-1.6L4.3 4.5H2V3h3.2l2.0 9Z"/>
      </svg>
    `,
  },
  {
    title: "Applications SaaS\nMétier",
    desc: "Conception de solutions SaaS sur mesure pour automatiser vos processus métier et améliorer votre productivité",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.4 13a7.9 7.9 0 0 0 0-2l2-1.5-2-3.4-2.3 1a8.2 8.2 0 0 0-1.7-1l-.4-2.5H9l-.4 2.5c-.6.2-1.2.5-1.7 1l-2.3-1-2 3.4 2 1.5a7.9 7.9 0 0 0 0 2l-2 1.5 2 3.4 2.3-1c.5.4 1.1.7 1.7 1L9 21h6l.4-2.5c.6-.2 1.2-.5 1.7-1l2.3 1 2-3.4-2-1.5ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5Z"/>
      </svg>
    `,
  },
  {
    title: "Automatisation &\nintégration",
    desc: "Scripts d’automatisation et connexion de vos systèmes à des services (CRM, ERP, e-mailing) via des API",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.7 16.3 4.4 12l4.3-4.3L7.3 6.3 1.6 12l5.7 5.7 1.4-1.4Zm6.6 0 4.3-4.3-4.3-4.3 1.4-1.4 5.7 5.7-5.7 5.7-1.4-1.4Z"/>
      </svg>
    `,
  },
  {
    title: "Optimisation & SEO",
    desc: "Optimisation des performances, mises à jour régulières et amélioration du référencement de votre plateforme",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 17h3v4H3v-4Zm5-6h3v10H8V11Zm5 3h3v7h-3v-7Zm5-10h3v17h-3V4ZM4 13l4-4 4 4 7-7 1.4 1.4-8.4 8.4-4-4-2.6 2.6L4 13Z"/>
      </svg>
    `,
  },
];
</script>

<style scoped>
/* section */
.services{
  padding: 50px 0;
  /* border: 1px solid red; */
  padding-top: 50px;
}

.container{
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.title{
  font-size: clamp(28px, 3vw, 42px);
  font-weight: 700;
  margin-bottom: 10px;
}

.subtitle{
  max-width: 900px;
  margin: 0 auto 50px;
  opacity: .85;
  line-height: 1.6;
}

/* grid */
.grid{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}

/* card */
.card{
  background: rgba(12, 16, 26, .55);
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 14px;
  padding: 34px 26px 28px;
  max-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform .25s ease, background .25s ease, box-shadow .25s ease, border-color .25s ease;
  backdrop-filter: blur(6px);
}

/* ✅ Hover comme ton image : fond plus clair + “élévation” */
.card:hover{
  background: rgba(70, 110, 165, .22); /* effet bleu/gris */
  border-color: rgba(255,255,255,.28);
  box-shadow: 0 16px 45px rgba(0,0,0,.55);
  transform: translateY(-6px) scale(1.02);
}

.icon{
  width: 76px;
  height: 76px;
  margin-bottom: 18px;
  display:flex;
  align-items:center;
  justify-content:center;
}

.icon :deep(svg){
  width: 72px;
  height: 72px;
  fill: rgba(255,255,255,.9);
  transition: transform .25s ease, opacity .25s ease;
}

.card:hover .icon :deep(svg){
  transform: scale(1.05);
  opacity: 1;
}

.card-title{
  font-size: 22px;
  font-weight: 700;
  margin: 6px 0 12px;
  white-space: pre-line; /* pour les retours à la ligne dans le title */
}

.card-desc{
  opacity: .85;
  font-size: 15px;
  line-height: 1.6;
  max-width: 260px;
}

/* responsive */
@media (max-width: 1100px){
  .grid{ grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px){
  .grid{ grid-template-columns: 1fr; }
  .card{ min-height: auto; }
}
</style>
