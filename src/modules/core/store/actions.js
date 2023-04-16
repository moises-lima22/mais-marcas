import { setLoading } from "./actions-type";

export const actions = {
  [setLoading](state, payload) {
    state.isLoading = payload;
  },
};
