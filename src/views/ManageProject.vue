<template>
  <div class="main">
    <div class="breadCrumb">
      <el-breadcrumb separator="/" :to="{path:'/manageDocument'}">
        <el-breadcrumb-item>项目管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-button @click="addTeam" class="buttonAddTeam" type="primary" icon="el-icon-s-custom">添加团队</el-button>
    <add-team-modal v-if="addingTeam"></add-team-modal>
  </div>
</template>

<script>
import AddTeamModal from "@/components/Team/AddTeamModal";
export default {
  name: "ManageProject",
  components:{
    AddTeamModal,
  },
  data() {
    return {
      addingTeam:false,
    }
  },
  methods:{
    addTeam() {
      this.addingTeam=true;
    }
  }
}
</script>

<style scoped lang="less">
.main {
  height: 100%;
}

::v-deep .breadCrumb {
  margin: 15px 0 0 15px;
  font-weight: 800 !important;
}

::v-deep .el-breadcrumb__inner {
  font-weight: 800 !important;
  cursor: pointer !important;
}
.buttonAddTeam{
  margin: 10px 0 0 15px;
}
</style>
