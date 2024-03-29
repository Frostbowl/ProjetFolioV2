import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkInProg  from "../views/WorkInProg.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
      path: '/:catchAll(.*)',
      name: 'Error404',
      component: WorkInProg
    }
  ]

})

export default router