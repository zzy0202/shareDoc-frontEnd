import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false,
  },
  getters: {
  },
  mutations: {
    setLogin(payload) {
      this.state.isLogin = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
