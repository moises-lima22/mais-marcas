import Vue from "vue";
import VueRouter from "vue-router";
import coreModule from "./modules/core/core-modules.js";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: coreModule.routes,
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  dashboardPlugin: coreModule.plugins[0],
  components: {
    App: coreModule.components.App,
  },
  template: "<App />",
});
