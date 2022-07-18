import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import( '../views/skillsView.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import( '../views/resumeView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import( '../views/projectsView.vue')
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import( '../views/testimonialsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contactView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
