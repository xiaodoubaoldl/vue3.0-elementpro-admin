import { createStore } from 'vuex';
import { user } from './module/user';

export default createStore({
  state: {
    collapse: false,
  },
  mutations: {
    handllCollapse(state, data) {
      state.collapse = data;
    },
  },
  actions: {
  },
  modules: {
    user,
  },
});
