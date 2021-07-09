import { createStore } from 'vuex';

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
  },
});
