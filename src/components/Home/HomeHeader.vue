<template>
  <div class="main">
    <div class="HomeHeaderMain">
      <div class="avatar"></div>
      <div class="username">欢迎，{{username}}</div>
      <div class="iconfont icon-ico_dengchu logout" @click="logout"></div>
    </div>
<!--    <div class="separateLine"></div>-->
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: "HomeHeader",
  data() {
    return {
      username:'熊本熊',
    }
  },
  methods:{
    logout() {
      this.$confirm('确定退出账号吗?', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      }).then(() => {
        store.commit('setLogin',false);
        localStorage.isLogin = false;
        this.$message({
          type: 'success',
          message: '已登出账号'
        });
        this.$router.push({
          path:'/login',
        })
      }).catch(() => {

      });
    }
  }
}
</script>

<style scoped lang="less">
.main {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;

}
.separateLine {
  width: 100%;
  height: 2px;
  background: linear-gradient(rgba(9, 30, 66, 0.13) 0px, rgba(9, 30, 66, 0.13) 1px, rgba(9, 30, 66, 0.08) 1px, rgba(9, 30, 66, 0) 4px);
}
.HomeHeaderMain {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: rgb(255,255,255);
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.avatar {
  width: 35px;
  height: 35px;
  background-color: pink;
  border-radius: 30px;
  margin-right: 10px;
  background-image: url("../../../public/images/avatar.png");
  background-size: contain;
}
.username {
  margin-right: 20px;
  font-size: 14px;
}
.logout {
  font-size: 20px !important;
  margin-right: 20px;
  transition: 0.5s all;
}
.logout:hover {
  cursor: pointer;
  color: coral;
}
</style>
