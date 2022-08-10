import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:localStorage.isLogin === 'true',
    user:{
      username:localStorage.getItem('username')!==''?localStorage.getItem('username') : '' ,
      cookie:'',
    },
    currentTeamId:localStorage.getItem('currentTeamId') || 0,
    currentProjectId:localStorage.getItem('currentProjectId')||0,
  },
  getters: {
  },
  mutations: {
    setLogin(state,payload) {
      localStorage.setItem('username',payload.username);
      state.isLogin = payload.isLogin;
      state.user.username = payload.username;
    },
    setTeamId(state,payload) {
      state.currentTeamId = payload.teamId;
      localStorage.setItem('currentTeamId',payload.teamId);
    },
    setProjectId(state,payload) {
      state.currentProjectId = payload.projectId;
      localStorage.setItem('currentProjectId',payload.projectId);
    }
  },
  actions: {
  },
  modules: {
  }
})
