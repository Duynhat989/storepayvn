import { createRouter, createWebHistory } from 'vue-router'
import NotFoundComponent from '../components/layouts/Error404.vue'
import HomeView from '../views/Web/Home/Index.vue'
import LoginView from '../views/Web/Auth/Index.vue'
import StoreView from '../views/Web/Store/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/notify',
      name: 'notify',
      component: LoginView
    },
    {
      path: '/store',
      name: 'store',
      component: StoreView
    },
    {
      path: '/manager',
      name: 'manager',
      component: StoreView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundComponent
    }
  ]
})

router.beforeEach((to, from, next) => {
  // const publicPages = ["/login", "/"];
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});
export default router
