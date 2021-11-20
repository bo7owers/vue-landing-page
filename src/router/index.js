import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Bienvenue from '../views/Bienvenue.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Bienvenue',
    component: Bienvenue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
