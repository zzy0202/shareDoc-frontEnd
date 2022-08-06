import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:localStorage.isLogin === 'true',
    user:{
      username:localStorage.getItem('username')!==''?localStorage.getItem('username') : '' ,
      cookie:'',
    }
  },
  getters: {
  },
  mutations: {
    setLogin(state,payload) {
      localStorage.setItem('username',payload.username);
      state.isLogin = payload.isLogin;
      state.user.username = payload.username;
    }
  },
  actions: {
  },
  modules: {
  }
})
