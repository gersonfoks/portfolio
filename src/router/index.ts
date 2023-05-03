import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },

    {
      path: '/portfolio/',
      name: 'home',
      component: MainView
    },


    {
      path: '/portfolio/projects/ai-for-elephants',
      name: 'AI For Elephants',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/pages/AiForElephants.vue')
    }
  ]
})

export default router
