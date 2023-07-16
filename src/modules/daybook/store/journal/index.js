import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";
import state from "./state";

console.log(actions);

const journalModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default journalModule;
