interface State {
  [propName: string]: any;
}
export const user = {
  state: () => ({
    userName: 'devloper',
    roles: [],
  }),
  mutations: {
    setUserName(state:State, data: string) {
      // 这里的 `state` 对象是模块的局部状态
      state.userName = data;
    },
    setRoles(state: State, roles: string[]) {
      state.roles = roles;
    },
  },

  getters: {

  },
};
