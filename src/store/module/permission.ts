/* eslint-disable */
import { constantRoutes, asyncRoutes } from '@/router/index';
import { ActionContext } from 'vuex';
/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
 const hasPermission = (roles: any[], route: { meta: { roles: string | any[]; }; }) => {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
const filterRoutes = (asyncRoutes: any[], roles: string[]) => {
  const res: any[] = []

  asyncRoutes.forEach((route: any) => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
};
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
      return new Promise((resolve) => {
        let calculateRoutes;
        if (data.includes('admin')) {
          calculateRoutes = asyncRoutes;
        } else {
          calculateRoutes = filterRoutes(asyncRoutes, data);
        }
        context.commit('setRoutes', calculateRoutes);
        resolve(calculateRoutes);
      });
    },
  },

  getters: {

  },
};
