<template>
  <div class="HomeMain">
    <div class="breadCrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="font-weight: 800 !important;">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeMain",
  data() {
    return {
    }
  },
  component:{

  }
}
</script>

<style scoped lang="less">
.HomeMain {
  width: 100%;
  height: 100%;
}
::v-deep .breadCrumb {
  margin: 15px 0 0 15px;
  font-weight: 800 !important;
}
::v-deep .el-breadcrumb__inner {
  font-weight: 800 !important;
}
</style>
