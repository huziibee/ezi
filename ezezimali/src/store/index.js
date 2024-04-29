import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      isAuthenticated: false,
      user: null
    };
  },
  mutations: {
    // Mutation to set the user
    SET_USER(state, user) {
      state.user = user;
      state.isAuthenticated = true;
    },

    // Mutation to clear the user
    CLEAR_USER(state) {
      state.user = null;
      state.isAuthenticated = false;
    }
  },
  actions: {
    // Action to login the user
    loginUser({ commit }, user) {
      commit('SET_USER', user);
    },

    // Action to logout the user
    logoutUser({ commit }) {
      commit('CLEAR_USER');
    }
  },
  getters: {
    // Getter to check if the user is authenticated
    isAuthenticated(state) {
      return state.isAuthenticated;
    },

    // Getter to get the user
    getUser(state) {
      return state.user;
    }
  }
});
