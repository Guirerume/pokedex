import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = () => ({
  info: null
});

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
