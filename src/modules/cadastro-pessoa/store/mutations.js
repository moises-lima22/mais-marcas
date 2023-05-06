import { LISTA_PESSOAS } from "./mutations-type";

export const mutations = {
  [LISTA_PESSOAS](state, payload) {
    state.listaPessoas = payload;
  },
};
