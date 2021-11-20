import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Bienvenue from '../views/Bienvenue.vue'
import Bienvenido from '../views/Bienvenido.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bienvenue',
    name: 'bienvenue',
    component: Bienvenue
  },
  {
    path: '/bienvenido',
    name: 'bienvenido',
    component: Bienvenido
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
