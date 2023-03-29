import Vue from "vue";

import DashboardPlugin from "@/modules/core/plugins/dashboard-plugin";

import CoreModule from "./modules/core/core-modules.js";
import router from "./router";

Vue.use(DashboardPlugin);

(function coreModule() {
  const coreModule = new CoreModule(router);
  coreModule.install(Vue);
})();
