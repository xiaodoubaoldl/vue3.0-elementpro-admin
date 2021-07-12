import { getToken, removeToken, setToken } from '@/utils/auth';
import { ActionContext } from 'vuex';

interface State {
  [propName: string]: any;
}
export const user = {
  state: () => ({
    userName: 'devloper',
    roles: [],
    token: getToken(),
  }),
  mutations: {
    setUserName(state:State, data: string) {
      // 这里的 `state` 对象是模块的局部状态
      state.userName = data;
    },
    setRoles(state: State, roles: string[]) {
      state.roles = roles;
    },
    setToken(state:State, data: string) {
      state.token = data;
    },
  },
  actions: {
    // 登录
    login(context: ActionContext<State, any>, data: State) {
      const { name } = data;
      return new Promise((resolve) => {
        context.commit('setToken', name);
        setToken(name);
        resolve(name);
      });
    },
    // 退出
    logout(context: ActionContext<State, any>) {
      return new Promise((resolve) => {
        context.commit('setToken', '');
        context.commit('setRoles', []);
        removeToken();
        // 重置router
        resolve('logout');
      });
    },
    // 获取用户信息
    getUserInfo(context: ActionContext<State, any>) {
      const roles = [context.state.token];
      return new Promise((resolve) => {
        context.commit('setUserName', context.state.token);
        context.commit('setRoles', roles);
        resolve(roles);
      });
    },
  },
  getters: {

  },
};
