<template>
  <div class="manageProjectMain">
    <div class="breadCrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="font-weight: 800 !important;">项目管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  name: "ManageProject"
}
</script>

<style scoped lang="less">
::v-deep .breadCrumb {
  margin: 15px 0 0 15px;
  font-weight: 800 !important;
}
::v-deep .el-breadcrumb__inner {
  font-weight: 800 !important;
}
</style>
