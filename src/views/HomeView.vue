<template>
  <div class="home">
    <el-container>
      <el-aside width="170px">
        <HomeAside></HomeAside>
      </el-aside>
      <el-container>
        <el-header>
          <HomeHeader></HomeHeader>
        </el-header>
        <el-main>Main</el-main>
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
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
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
</style>