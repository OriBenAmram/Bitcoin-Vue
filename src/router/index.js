import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SignupPage from '../views/SignupPage.vue'
import ContactApp from '../views/ContactApp.vue'
import ContactDetails from '../views/ContactDetails.vue'
import ContactEdit from '../views/ContactEdit.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      component: HomePage
    },
    {
      path: '/',
      component: SignupPage
    },
    {
      path: '/contact',
      component: ContactApp
    },
    {
      path: '/contact/:_id',
      component: ContactDetails
    },
    {
      path: '/contact/edit/:_id?',
      component: ContactEdit
    },
    {
      path: '/statistic',
      component: () => import('../views/StatisticPage.vue')
    }
  ]
})

export default router
