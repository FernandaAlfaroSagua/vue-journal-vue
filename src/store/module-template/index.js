import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";
import state from "./state";

const myCustomModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default myCustomModule;
