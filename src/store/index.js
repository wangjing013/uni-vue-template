import Vue from 'vue';
import Vuex from 'vuex';
import CreatePersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const vuexPersisted = new CreatePersistedState({
  storage: {
    getItem: (key) => uni.getStorageSync(key),
    setItem: (key, value) => uni.setStorageSync(key, value),
    removeItem: (key) => uni.clearStorageSync(key),
  },
});

const store = new Vuex.Store({
  plugins: [vuexPersisted],
  state: {
    token: '',
    userInfo: null,
    systemInfo: null,
  },
  actions: {

  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USERINFO(state, userInfo) {
      state.userInfo = userInfo;
    },
    SET_SYSTEMINFO(state, systemInfo) {
      state.systemInfo = systemInfo;
    },
    SET_SHARECODEURL(state, shareCodeUrl) {
      state.shareCodeUrl = shareCodeUrl;
    },
    SET_COURSEINFO(state, courseInfo) {
      state.courseInfo = courseInfo;
    },
  },
});
export default store;
