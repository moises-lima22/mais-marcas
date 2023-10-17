import { LOADING_MUTATION } from "./mutations-type";

export const actions = {
  startLoading({ commit }) {
    commit(LOADING_MUTATION, true);
  },
  dismissLoading({ commit }) {
    commit(LOADING_MUTATION, false);
  },
};
