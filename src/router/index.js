import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from "@/views/LoginPage";
import store from "@/store";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      requiredLogin: true,
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path==='/login') {
    if(!store.state.isLogin) {
      next();
    }
    else {
      alert('请先登出账后后再登录');
    }
  }
  else {
    if(!store.state.isLogin) {
      next({
        path:'/login',
      })
    }
    else {
      next();
    }
  }
})
export default router
