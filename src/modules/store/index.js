import Vue from "vue";
import Vuex from "vuex";
import coreModule from "../core/store";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    coreModule,
  },
});

export default store;
