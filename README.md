# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

### commande créer un projet vuejs
npm create vue@latest
npm install 
npm run dev

### Un framework est une structure logicielle qui impose une manière d’organiser et d’exécuter ton application.
Il te fournit généralement :
- une architecture
- des fonctions prêtes à l’emploi
- des outils intégrés
- des bonnes pratiques

#### structure de mon repertoire
src/
 ├─ assets/
 ├─ components/
 ├─ layouts/
 │    ├─ DefaultLayout.vue
 │    └─ AuthLayout.vue
 ├─ pages/
 │    ├─ Home.vue
 │    ├─ About.vue
 │    ├─ Contact.vue
 │    └─ Projects.vue
 ├─ router/
 │    └─ index.js
 ├─ App.vue
 ├─ main.js
 └─ style.css


 #### une police d’écriture spéciale pour le logo
  
### utilisation de ElementPlus comme bibliothèque UI car c'est juste un site vitrime donc pour cela besoin d'une bibliothèque UI léger 
pour gérer cela

###  utilisation de la bibliothèque Motion pour la gestion des animations



### structure des dossiers liés à l'appel d'API
api/axios.js = configuration générale Axios
api/endpoints.js = toutes les fonctions d’appels API
stores/ = gestion de l’état global avec Pinia
utils/cache.js = logique de cache réutilisable

### gestion des imports des components dans les pages et les props
Avec <script setup>, Vue détecte automatiquement les composants importés. Donc l’import suffit.
les props servent à envoyer des données d’un composant parent vers un composant enfant.
Par exemple, tu as une page qui récupère des produits depuis ton backend Java Spring Boot :