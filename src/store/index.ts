import { createStore } from 'vuex';
import { user } from './module/user';
import { permissionRoutes } from './module/permission';

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
    permissionRoutes,
  },
});
