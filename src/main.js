// import Vue from "vue";
import Vue from "vue/dist/vue.js";
import VueRouter from "vue-router";
import router from "./modules/core/routes/router";

import CoreModule from "./modules/core/core-modules.js";
import DashboardPlugin from "@/modules/core/plugins/dashboard-plugin";

Vue.use(VueRouter);
Vue.use(DashboardPlugin);

function bootstrap() {
  const coreModule = new CoreModule(router);
  coreModule.install(Vue);
}

bootstrap();
