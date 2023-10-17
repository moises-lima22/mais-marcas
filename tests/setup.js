import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import GlobalComponents from "@/modules/core/plugins/globalComponents";
import VueTheMask from "vue-the-mask";

Vue.use(BootstrapVue);
Vue.use(GlobalComponents);
Vue.use(VueTheMask);

const notify = {
  success: jest.fn(),
  warning: jest.fn(),
  error: jest.fn(),
};

Vue.prototype.$notify = notify;
