import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActionView from '../views/ActionView.vue'
import mainOidc from "@/oidc";

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        authName: mainOidc.authName
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/actions',
      name: 'actions',
      component: ActionView
    }
  ]
});

mainOidc.useRouter(router);

export default router;