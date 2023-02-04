import Vue from "vue";
import VueRouter from "vue-router";

import DashboardPlugin from "@/modules/core/plugins/dashboard-plugin";

import CoreModule from "./modules/core/core-modules.js";
import CadastroPessoa from "./modules/cadastro-pessoa/cadastro-pessoa-module";
import Pedido from "./modules/pedido/pedido-module";
import routes from "./modules/core/routes/routes";

Vue.use(VueRouter);
Vue.use(DashboardPlugin);

(function modules() {
  const cadastroPessoa = new CadastroPessoa();
  cadastroPessoa.install(routes);

  const pedido = new Pedido();
  pedido.install(routes);
})();

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

(function coreModule() {
  const coreModule = new CoreModule(router);
  coreModule.install(Vue);
})();
