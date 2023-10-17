import Vue from "vue";
import App from "@/modules/core/App.vue";
import { createPinia, PiniaVuePlugin } from "pinia";

import DashboardPlugin from "@/modules/core/plugins/dashboard-plugin";

import router from "./modules/router";
import store from "./modules/store";

Vue.use(DashboardPlugin);

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  router: router,
  store: store,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
