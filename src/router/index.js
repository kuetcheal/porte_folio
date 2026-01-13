import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Parcours from '../pages/Parcours.vue'
import Projects from '../pages/Projects.vue'
import Services from '../pages/Services.vue'
import Blog from '../pages/Blog.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', component: Home },            
  { path: '/parcours', component: Parcours },
  { path: '/projets', component: Projects },
  { path: '/services', component: Services },
  { path: '/blog', component: Blog },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
