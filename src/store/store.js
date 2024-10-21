import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      currentUserId: null,
    };
  },
  mutations: {
    setUserId(state, id) {
      state.currentUserId = id;
    },
  },
});
