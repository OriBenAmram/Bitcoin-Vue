import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import ContactApp from '../views/ContactApp.vue'
import ContactDetails from '../views/ContactDetails.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/contact',
      component: ContactApp
    },
    {
      path: '/contact/:id',
      component: ContactDetails
    },
    {
      path: '/statistic',
      component: () => import('../views/StatisticPage.vue')
    }
  ]
})

export default router
