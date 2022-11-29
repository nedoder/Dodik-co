import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  mode: "history",
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "exact-active",
  scrollBehavior() {
    return { left: 0, top: 0 }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/ServicesView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
  ],
});

export default router;
