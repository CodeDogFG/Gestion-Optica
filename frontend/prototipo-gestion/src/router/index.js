// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import GestionRegistrosView from '../views/GestionRegistrosView.vue'
import ReportesView from '../views/ReportesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'registros',
      component: GestionRegistrosView // La página principal
    },
    {
      path: '/reportes',
      name: 'reportes',
      component: ReportesView // La nueva página de reportes
    }
  ]
})

export default router
