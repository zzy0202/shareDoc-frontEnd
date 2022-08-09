<template>
  <div class="main">
    <div class="leftAside">
      <ProjectAside></ProjectAside>
    </div>
    <div class="rightSide">
      <el-breadcrumb separator="/" :to="{path:'/manageDocument'}">
        <el-breadcrumb-item>团队管理</el-breadcrumb-item>
        <el-breadcrumb-item>团队项目管理</el-breadcrumb-item>
        <el-breadcrumb-item>团队详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
import ProjectAside from "@/components/Project/ProjectAside";
export default {
  name: "ProjectDetails",
  components:{
    ProjectAside,
  }
}
</script>

<style scoped lang="less">
::v-deep .el-breadcrumb {
  margin: 15px 0 0 15px !important;
  font-weight: 800 !important;
}
::v-deep .el-breadcrumb__inner {
  cursor: pointer !important;
}
.main {
  width: 100%;
  height: 100%;
  display: flex;
}
.leftAside {
  width: 200px;
  height: 100%;
}
</style>