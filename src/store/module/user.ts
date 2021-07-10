interface State {
  [propName: string]: any;
}
export const user = {
  state: () => ({
    userName: 'devloper',
  }),
  mutations: {
    setUserName(state:State, data: string) {
      // 这里的 `state` 对象是模块的局部状态
      state.userName = data;
    },
  },

  getters: {

  },
};
