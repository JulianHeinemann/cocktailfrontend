import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Cocktails from '@/views/Cocktails'
import Cocktail from '@/views/Cocktail'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/cocktails',
    name: 'Cocktails',
    component: Cocktails
  },
  {
    path: '/cocktail:id',
    name: 'Cocktail',
    component: Cocktail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
