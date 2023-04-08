import Vue from "vue";

import DashboardPlugin from "@/modules/core/plugins/dashboard-plugin";

import CoreModule from "./modules/core/core-modules.js";
import router from "./modules/router";
import store from "./modules/store";

Vue.use(DashboardPlugin);

(function coreModule() {
  const coreModule = new CoreModule(router, store);
  coreModule.install(Vue);
})();
