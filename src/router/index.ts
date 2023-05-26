import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
      scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
      },
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/projects/ai-for-elephants',
      name: 'AI For Elephants',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/pages/AiForElephants.vue')
    },
    {
      path: '/projects/ai-for-preterm-babies',
      name: 'AI For Preterm Babies',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/pages/AiForPretermBabies.vue')
    },
    {
      path: '/projects/ai-for-heart-failure-detection',
      name: 'AI For Heart Failure Detection',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/pages/AiForHeartFailureDetection.vue')
    }
  ]
}

)

export default router
