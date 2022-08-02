import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:localStorage.isLogin === 'true',
  },
  getters: {
  },
  mutations: {
    setLogin(state,payload) {
      console.log(payload)
      state.isLogin = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
