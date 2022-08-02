<template>
  <div class="login">
    <div class="container">
      <h1 class="webName">墨书</h1>
      <transition name="fade" mode="out-in">
        <div v-if="isLogin" key="login">
          <div class="login-form">
            <h2 class="title">登录</h2>
            <input type="text" name="username" placeholder="用户名" v-model="user.username" style="margin-top: 20px;">
            <input type="password" name="password" placeholder="密码"  v-model="user.password" >
            <button type="submit" @click="login">登录</button>
            <span class="change" @click="isLogin=false">尚未有账号?点击注册</span>
          </div>
        </div>
        <div v-else key="register">
          <div class="login-form">
            <h2 class="title">注册</h2>
            <input type="text" name="username" placeholder="用户名" style="margin-top: 20px;">
            <input type="password" name="password" placeholder="密码">
            <button type="submit">注册</button>
            <span class="change" @click="isLogin=true">返回登录</span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "LoginPage",
  data() {
    return {
      isLogin: true,
      user: {
        username:'',
        password:'',
      }
    }
  },
  methods:{
    login() {
      if(this.user.username==='admin'&&this.user.password==='admin') {
        store.state.isLogin = true;
        this.$router.push({
          path:'/',
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../../public/images/background.png") fixed no-repeat;
  background-size: cover;
  position: relative;
}

.webName {
  position: absolute;
  top: 0;
  left: 0;
  margin: 20px 20px 20px 30px;
  color: #3d5245;
}

.login-form {
  width: 280px;
  height: 220px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  text-align: center;
  position: relative;
  z-index: 100;
  background: inherit;
  border-radius: 18px;
  overflow: hidden;
}

.login-form::before {
  content: "";
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  position: absolute;
  top: -10px;
  left: -10px;
  overflow: hidden;
  background: inherit;
  box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.25);
  filter: blur(5px);
  z-index: -1;
}

.login-form h2 {
  font-size: 18px;
  font-weight: 400;
  color: #3d5245;
}

.login-form input,
.login-form button {
  margin: 9px 0;
  height: 36px;
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 7px;
  padding: 0 14px;
  color: #3d5245;
}

.login-form input::placeholder {
  color: #3d5245;
}

.login-form button:focus,
.login-form input:focus {
  outline: 0;
}

.login-form button {
  margin-top: 24px;
  background-color: rgba(209, 179, 9, 0.4);
  color: white;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.4s;
}

.login-form button:hover {
  background-color: rgba(209, 179, 9, 0.7);
}

.login-form button::before,
.login-form button::after {
  content: "";
  display: block;
  width: 80px;
  height: 100%;
  background: rgba(179, 255, 210, 0.5);
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  transform: skewX(-15deg);
  filter: blur(30px);
  overflow: hidden;
  transform: translateX(-100px);
}

.title {
  margin-top: -10px;
}

.login-form button:hover::after {
  width: 40px;
  background: rgba(179, 255, 210, 0.3);
  left: 60px;
  opacity: 0;
  filter: blur(5px);
}

.login-form button:hover::before {
  transition: 1s;
  transform: translateX(320px);
  opacity: 0.7;
}

.login-form button:hover::after {
  transition: 1s;
  transform: translateX(320px);
  opacity: 1;
}

.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.change {
  font-size: 14px;
  color: #6b6464;
  position: absolute;
  bottom: 30px;
  right: 30px;
}

.change:hover {
  color: antiquewhite;
  cursor: pointer;
}
</style>