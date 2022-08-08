<template>
  <div class="main">
    <el-breadcrumb separator="/" :to="{path:'/manageDocument'}">
      <el-breadcrumb-item>团队管理</el-breadcrumb-item>
      <el-breadcrumb-item>团队项目管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="teamDetailsContainer" style="margin: 15px 0 0 15px" v-if="teamDetails">
      <h1 class="teamName" style="font-size: 35px">{{teamDetails.detail[0].fields.name}}</h1>
      <span class="teamDescription">团队简介：{{teamDetails.detail[0].fields.description}}</span>
      <div class="teamProject" >
        <div style="display: flex;justify-content: flex-start;align-items: center">
          <h3>项目 </h3>
          <span class="iconfont icon-jurassic_add-project"></span>
          <el-button size="small" style="margin-left: 10px" type="info"  icon="el-icon-folder-add" circle @click="addProject"></el-button>
        </div>
        <div style="margin: 20px 0 0 0;" v-if="teamProjects.length===0">尚未有项目，试试创建一个吧</div>
        <AddProjectModal v-if="showAddProjectModal" v-on:closeModal="closeModal"></AddProjectModal>
      </div>
    </div>
  </div>
</template>

<script>
import {getTeamDetails,getProjectList} from "@/api/projectManage";
import AddProjectModal from "@/components/Project/AddProjectModal";
import store from "@/store";
export default {
  name: "TeamDetails",
  components: {
    AddProjectModal,
  },

  async mounted() {
    let res =await getTeamDetails(this.$route.params.teamId,{});
    this.teamDetails = res;
    this.teamProjects = res.projects;
    res = await getProjectList({
      team_pk:this.$route.params.teamId,
      username:store.state.user.username,
    })
    console.log(res);
  },
  methods:{
    addProject() {
      this.showAddProjectModal = true;
    },
    closeModal() {
      this.showAddProjectModal = false;
    }
  },
  data() {
    return {
      teamDetails:null,
      teamProjects:[],
      showAddProjectModal:false,
    }
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
.teamName {
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  font-size: 25px;
}
.teamDetailsContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.teamDescription {
  margin-top: 6px;
}
.teamProject {
  margin-top:25px;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 25px;
    line-height: 100%;
  }
  .icon-jurassic_add-project {
    font-size: 30px;
    display: inline-block;
    margin-left: 6px;
  }
}
</style>
