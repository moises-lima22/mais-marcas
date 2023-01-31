// import Vue from "vue";
import Vue from "vue/dist/vue.js";
import VueRouter from "vue-router";
import router from "./modules/core/routes/router";

import DashboardPlugin from "@/modules/core/plugins/dashboard-plugin";

import CoreModule from "./modules/core/core-modules.js";
import CadastroPessoa from "./modules/cadastro-pessoa/cadastro-pessoa-module";

Vue.use(VueRouter);
Vue.use(DashboardPlugin);

function bootstrap() {
  const cadastroPessoa = new CadastroPessoa(router);
  cadastroPessoa.install();

  const coreModule = new CoreModule(router);
  coreModule.install(Vue);
}

bootstrap();
