import { createRouter, createWebHistory } from 'vue-router'
import NotFoundComponent from '../components/layouts/Error404.vue'
import HomeView from '../views/Web/Home/Index.vue'
import LoginView from '../views/Web/Auth/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
  console.log(loggedIn)
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});
export default router
