import { createRouter, createWebHistory } from 'vue-router'
import NotFoundComponent from '../components/layouts/Error404.vue'
import HomeView from '../views/Web/Home/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundComponent
    }
  ]
})

export default router
