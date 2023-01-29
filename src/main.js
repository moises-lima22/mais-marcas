import Vue from "vue";
import DashboardPlugin from "@/modules/core/plugins/dashboard-plugin";
import App from "./modules/core/App.vue";

import store from "@/modules/core/store";

// router setup
import router from "./modules/core/routes/router";
// plugin setup
Vue.use(DashboardPlugin);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
});
