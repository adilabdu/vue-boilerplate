import { createRouter, createWebHistory } from 'vue-router'
import RouteMeta from "@/utils/route/meta.js";
import { ref } from "vue";
import Guard from "@/utils/route/guard.js";
import {useAuthenticationStore} from "@/composables/useAuthenticationStore.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: () => import("../pages/HomePage.vue"),
      meta: new RouteMeta(Guard.ALL_ACCESS),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../pages/LoginPage.vue"),
      meta: new RouteMeta(Guard.GUEST_ONLY_ACCESS),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../pages/RegisterPage.vue"),
      meta: new RouteMeta(Guard.GUEST_ONLY_ACCESS),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../pages/DashboardPage.vue"),
      meta: new RouteMeta(Guard.MEMBER_ONLY_ACCESS),
    },
    {
      path: "/preferences",
      name: "preferences",
      component: () => import("../pages/DashboardPage.vue"),
      meta: new RouteMeta(Guard.MEMBER_ONLY_ACCESS),
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = Boolean(useAuthenticationStore().user);
  const routeGuard = to.meta.guard;

  // Check if not authenticated and attempting member-only route
  if (!isAuthenticated && routeGuard === 2) {
    next({ name: 'login' })
  }

  // Check if authenticated and attempting guest-only route
  if (isAuthenticated && routeGuard === 1) {
    next({ name: 'dashboard' })
  }

  next();
})

export default router
