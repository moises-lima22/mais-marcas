import { LOADING_MUTATION } from "./mutations-type";

export const mutations = {
  [LOADING_MUTATION](state, payload) {
    state.loading = payload;
  },
};
