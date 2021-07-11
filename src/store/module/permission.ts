/* eslint-disable */
import { constantRoutes, asyncRoutes } from '@/router/index';
import { RouteRecordRaw } from 'vue-router';
import { ActionContext } from 'vuex';

interface State {
  [propName: string]: any;
}
export const permissionRoutes = {
  state: () => ({
    addRoutes: [],
    routes: [],
  }),
  mutations: {
    setRoutes(state:State, data: Array<string>) {
      // 这里的 `state` 对象是模块的局部状态
      state.routes = [...constantRoutes, ...data];
      state.addRoutes = data;
    },
  },
  actions: {
    generateRoutes(context: ActionContext<State, any>, data: Array<string>) {
      return new Promise((resolve: (arg0: RouteRecordRaw[]) => void) => {
        if (data.includes('admin')) {
          context.commit('setRoutes', asyncRoutes);
        } else {
          context.commit('setRoutes', []);
        }
        resolve(asyncRoutes);
      });
    },
  },

  getters: {

  },
};
