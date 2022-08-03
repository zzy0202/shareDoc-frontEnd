<template>
  <div class="home">
    <el-container>
      <el-aside width="160px">
        <HomeAside></HomeAside>
      </el-aside>
      <el-container>
        <el-header class="header">
          <HomeHeader></HomeHeader>
        </el-header>
        <el-main>
          <keep-alive>
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeAside from "@/components/Home/HomeAside";
import HomeHeader from "@/components/Home/HomeHeader";
export default {
  name: 'HomeView',
  components:{
    HomeAside,
    HomeHeader,
  }
}
</script>

<style lang="less" scoped>
.el-header, .el-footer {
  //background-color: #B3C0D1;
  color: #333;
  text-align: center;
}

.el-aside {
  //background-color: #D3DCE6;
  color: #333;
  text-align: center;
  //line-height: 30px;
}

.el-main {
  //background-color: #E9EEF3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
::v-deep .el-header {
  padding: 0 !important;
}
::v-deep .el-main {
  padding: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.header {
  box-shadow: rgb(0 0 0 / 6%) 0px 1px 1px, rgb(0 0 0 / 10%) 0px 2px 4px;
}
</style>
