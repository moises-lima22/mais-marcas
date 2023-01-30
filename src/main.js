// import Vue from "vue";
import Vue from "vue/dist/vue.js";
import VueRouter from "vue-router";
import coreModule from "./modules/core/core-modules.js";
import DashboardPlugin from "@/modules/core/plugins/dashboard-plugin";


Vue.use(VueRouter);
Vue.use(DashboardPlugin);

const router = new VueRouter({
  routes: coreModule.routes,
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: {
    App: coreModule.components.App,
  },
  template: "<App />",
});
