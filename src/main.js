import Vue from "vue";
import App from "@/modules/core/App.vue";

import DashboardPlugin from "@/modules/core/plugins/dashboard-plugin";

import router from "./modules/router";
import store from "./modules/store";

Vue.use(DashboardPlugin);

new Vue({
  router: router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
