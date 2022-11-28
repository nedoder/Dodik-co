import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  mode: "history",
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "exact-active",
  scrollBehavior(to) {
    if (to.hash) {
      return window.scrollTo(0, document.body.scrollHeight);
    }
    return window.scrollTo(0, 0);
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
  ],
});

export default router;
