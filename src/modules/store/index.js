import Vue from "vue";
import Vuex from "vuex";
import globalModule from "../core/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    globalModule,
  },
});
