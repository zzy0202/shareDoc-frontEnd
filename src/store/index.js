import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:localStorage.isLogin === 'true',
    user:{
      username:'熊本熊',
      cookie:'',
    }
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
