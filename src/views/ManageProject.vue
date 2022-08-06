<template>
  <div class="main">
    <div class="breadCrumb">
      <el-breadcrumb separator="/" :to="{path:'/manageDocument'}">
        <el-breadcrumb-item>项目管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-button @click="addTeam" class="buttonAddTeam" type="primary" icon="el-icon-s-custom">添加团队</el-button>
    <add-team-modal v-if="addingTeam" v-on:closeModal="closeModal"></add-team-modal>
  </div>
</template>

<script>
import AddTeamModal from "@/components/Team/AddTeamModal";
import {getProjectManageInfo} from "@/api/projectManage";
import store from '@/store'

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
  async mounted() {
    let res = await getProjectManageInfo({username:store.state.user.username});
    console.log(res);
  },
  methods:{
    addTeam() {
      this.addingTeam=true;
    },
    closeModal() {
      this.addingTeam = false;
    }
  },
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
