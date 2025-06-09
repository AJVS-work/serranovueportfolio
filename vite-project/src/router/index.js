import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/auth";

import Login from "../pages/Login.vue";
import Profile from "../pages/Profile.vue";
import Showcase from "../pages/Showcase.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  {
    path: "/login",
    component: Login,
    meta: { title: "Login - Serrano" },
  },
  {
    path: "/portfolio/profile",
    component: Profile,
    meta: { requiresAuth: true, title: "Profile - Serrano" },
  },
  {
    path: "/portfolio/showcase",
    component: Showcase,
    meta: { requiresAuth: true, title: "Showcase - Serrano" },
  },
  {
    path: "/portfolio/contact",
    component: Contact,
    meta: { requiresAuth: true, title: "Contact - Serrano" },
  },
  { path: "/:pathMatch(.*)*", redirect: "/login" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();

  // Set page title from route meta
  document.title = to.meta.title || "Serrano";

  // Redirect if not authenticated
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return next("/login");
  }

  // Prevent accessing login if already logged in
  if (to.path === "/login" && auth.isAuthenticated) {
    return next("/portfolio/profile");
  }

  next();
});

export default router;
