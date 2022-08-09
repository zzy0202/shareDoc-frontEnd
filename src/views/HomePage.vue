<template>
  <div class="main">
    <div class="cover"></div>
    <div class="topBanner">
      <span class="topBannerContent" v-for="(item,index) in topBanner">{{item}}</span>
      <button class="loginButton" @click="goLogin">登录</button>
    </div>
    <h1 class="title">{{title}}</h1>
    <button class="journeyButton" @click="goLogin">立刻开始你的旅程!</button>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      topBanner:['产品','联系我们','关于我们'],
      title:'为',
      titleArray:['什','么','要','独','自','一','人','创','作？','建','立','属','于','你','的','团','队'],
      mark:0,
    }
  },
  mounted() {
    let timer = setInterval(()=>{
        this.title=this.title+this.titleArray[this.mark++];
        if(this.mark===this.titleArray.length) {
          clearInterval(timer);
        }
    },100)
  },
  methods:{
    goLogin() {
      this.$router.push({
        path:'/login',
      })
    }
  }
}
</script>

<style scoped lang="less">
.main {
  width: 100vw;
  height: 100vh;
  background-image: url("../../public/images/homePage.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
}
.cover {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(57, 49, 49, 0.7);
  width: 100vw;
  height: 100vh;
  display: flex;
}
.topBanner {
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  .topBannerContent {
    font-size: 19px;
    color: #cecbcb;
    margin-left: 40px;
    transition: all 0.3s;
  }
  .topBannerContent:hover {
    cursor: pointer;
    color: white;
  }
  .loginButton {
    border: none;
    background: #FFFFFF4D;
    margin-left: auto;
    margin-right: 40px;
    width: 150px;
    height: 40px;
    border-radius: 20px;
    z-index: 2;
    transition: all 0.4s;
  }
  .loginButton:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.69);
  }
  z-index: 2;
  padding-bottom: 15%;
}
#app > div > div.topBanner > span:nth-child(1) {
  margin-left: 80px;
}
.title {
  align-self: center;
  color: white;
  z-index: 2;
}
.journeyButton {
  width: 240px;
  height: 55px;
  background-color: rgba(206, 113, 113, 0.51);
  z-index: 2;
  color: #efefef;
  border: none;
  align-self: center;
  margin-top: 65px;
  border-radius: 30px;
  font-size: 16px;
  transition: all 0.5s;
}
.journeyButton:hover {
  cursor: pointer;
  background-color: #ce7171;
}
</style>