import Vue from "vue";
import VueRouter from "vue-router";
import routes from "../core/routes/routes";
import authGuard from "./security/authGuard";

Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  mode: "history",
  routes, // short for routes: routes
  linkActiveClass: "active",
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});

authGuard(router);

export default router;
