<template>
  <div class="homeAsideMain">
    <div style="display: flex;">
      <h1 class="title">墨书</h1>
      <div class="logoPicture"></div>
    </div>
    <div class="menuList">
      <div class="menu" v-for="(item,index) in menu" @click="activeMenu(index)" :class="index===active?'active':''">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeAside",
  data() {
    return {
      menu:['首页','团队管理','文档管理','设计原型'],
      routerName:['homeMain','manageTeam','manageDocument','manageDesignPrototype','teamDetails'],
      active:0,
    }
  },
  methods:{
    activeMenu(index) {
      if(this.routerName[index]!=='manageDesignPrototype') {
        this.active = index;
        if(this.active===4) {
          this.active=1;
        }
        console.log(this.active)
        this.$router.push({
          name:this.routerName[index],
        })
      }
      else {
        window.location.href='http://draw.io/'
      }
    }
  },
  watch:{
    $route:{
      immediate:true,
      handler(newRouter,oldRouter) {
        this.active = this.routerName.indexOf(newRouter.name);
        if(this.active===4) {
          this.active=1;
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.homeAsideMain {
  height: 100vh;
  overflow: hidden;
  background-color: #fcfcfc;
  border-right:1px solid lightgray;
  border-radius: 5px;
}
.title {
  font-size: 30px;
  margin-top: 14px;
  text-align: left;
  margin-left: 20px;
}
.menuList {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 600px;
}
.menu {
  width: 100%;
  height: 60px;
  //background-color: yellow;
  border-radius: 5px;
  background-color: transparent;
  line-height: 60px;
  transition: all 0.5s;
  font-size: 14px;
  -webkit-user-select: none;
}
.menu:hover {
  cursor: pointer;
}
.menu:after {
  opacity: 0;
  content: '';
  display: inline-block;
  width: 4px;
  height: 30px;
  background-color: transparent;
  transition: all 0.5s;
  position: absolute;
  right: 0;
  top:15px;
}
.active {
  background-color: rgba(230,239,252);
  position: relative;
}
.active::after{
  content: '';
  display: inline-block;
  width: 4px;
  height: 30px;
  background-color: rgb(0,82,204);
  position: absolute;
  right: 0;
  top:15px;
  opacity: 1;
}
.logoPicture {
  //background: url("../../../public/images/logo.png");
  width: 40px;
  height: 40px;
  background-size: contain;
}
</style>
