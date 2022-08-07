<template>
  <div class="main">
    <el-breadcrumb separator="/" :to="{path:'/manageDocument'}">
      <el-breadcrumb-item>团队管理</el-breadcrumb-item>
      <el-breadcrumb-item>团队项目管理</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import {getTeamDetails} from "@/api/projectManage";
export default {
  name: "TeamDetails",
  async mounted() {
    let res =await getTeamDetails(this.$route.params.teamId,{});
    console.log(JSON.parse(res));
  }
}
</script>

<style scoped lang="less">
::v-deep .el-breadcrumb {
  margin: 15px 0 0 15px !important;
  font-weight: 800 !important;
}

::v-deep .el-breadcrumb__inner {
  font-weight: 800 !important;
  cursor: pointer !important;
}
</style>
