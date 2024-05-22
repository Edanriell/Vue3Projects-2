import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/mixins',
      name: 'mixins',
      component: () => import('../views/Mixins.vue')
    },
    {
      path: '/plugins',
      name: 'plugins',
      component: () => import('../views/Plugins.vue')
    },
    {
      path: '/example',
      name: 'example',
      component: () => import('../views/ExampleView.vue')
    },
  ]
})

export default router
