import { IS_LOADING_MUTATION } from "./mutations-type";

export const mutations = {
  [IS_LOADING_MUTATION](state, payload) {
    state.isLoading = payload;
  },
};
