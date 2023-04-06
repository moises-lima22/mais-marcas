import state from "./state";
import mutation from "./mutations";
import mutationTypes from "./mutations-types";
import * as actions from "./actions";

export default {
  state,
  mutation,
  mutationTypes,
  actions,
  namespaced: true,
};
