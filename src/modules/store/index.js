import Vue from "vue";
import Vuex from "vuex";
import coreModule from "../core/store";
import cadastroPessoaModule from "../cadastro-pessoa/store";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    coreModule,
    cadastroPessoaModule,
  },
});

export default store;
