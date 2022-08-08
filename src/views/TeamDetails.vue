<template>
  <div class="main">
    <el-breadcrumb separator="/" :to="{path:'/manageDocument'}">
      <el-breadcrumb-item>团队管理</el-breadcrumb-item>
      <el-breadcrumb-item>团队项目管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="categories">
      <span v-for="(item,i) in categories" :key="i" :class="i===active?'active':''"
            @click="moveBar(i)">{{ item }}</span>
      <div class="moveBar" :style="`transform: translateX(${move}px)`"></div>
    </div>
    <div class="teamDetailsContainer" style="margin: 15px 0 0 15px" v-if="this.active===0&&teamDetails">
      <h2 class="teamName">{{ teamDetails.detail[0].fields.name }}</h2>
      <span class="teamDescription">团队简介：{{ teamDetails.detail[0].fields.description }}</span>
      <span class="memberAmount" style="margin-top: 20px;" @click="moveBar(2)">团队人数：{{ memberList.length }}
        <span style="margin-left: 7px;" class="iconfont icon-tuandui"></span>
      </span>
    </div>
    <div class="projectDetailContainer" v-if="this.active===1" style="margin: 15px 0 0 15px">
      <div class="teamProject">
        <div style="display: flex;justify-content: flex-start;align-items: center">
          <h3>项目 </h3>
          <span class="iconfont icon-jurassic_add-project"></span>
          <el-button size="small" style="margin-left: 10px" type="info" icon="el-icon-folder-add" circle
                     @click="addProject"></el-button>
        </div>
        <div style="margin: 20px 0 0 0;" v-if="teamProjects.length===0">尚未有项目，试试创建一个吧</div>
        <AddProjectModal v-if="showAddProjectModal" v-on:closeModal="closeModal"></AddProjectModal>
      </div>
    </div>
    <div class="memberContainer" v-if="this.active===2" style="margin: 15px 0 0 15px">
      <el-table
          :data="memberList"
          style="width: 100%">
        <el-table-column
            label="用户名"
            width="350">
          <template slot-scope="scope">
            <i class="el-icon-s-custom"></i>
            <span style="margin-left: 10px">{{ scope.row.fields.username }}</span>
          </template>
        </el-table-column>
        <el-table-column
            label="邮箱"
            width="350">
          <template slot-scope="scope">
<!--            <el-popover trigger="hover" placement="top">-->
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.fields.email }}</el-tag>
              </div>
<!--            </el-popover>-->
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {getTeamDetails, getProjectList,deleteTeamMember} from "@/api/projectManage";
import AddProjectModal from "@/components/Project/AddProjectModal";
import store from "@/store";
export default {
  name: "TeamDetails",
  components: {
    AddProjectModal,
  },

  async mounted() {
    let res = await getTeamDetails(this.$route.params.teamId, {});
    this.teamDetails = res;
    this.teamProjects = res.projects;
    this.memberList = res.members;
    console.log(this.memberList)
    res = await getProjectList({
      team_pk: this.$route.params.teamId,
      username: store.state.user.username,
    })
    console.log(res);
  },
  methods: {
    addProject() {
      this.showAddProjectModal = true;
    },
    closeModal() {
      this.showAddProjectModal = false;
    },
    moveBar(index) {
      this.active = index;
      this.move = 111.2 * (index);
    },
    async handleDelete(index, row) {
      console.log(index, row);
      let res = await deleteTeamMember({
        team_pk:parseInt(this.$route.params.teamId),
        oper:store.state.user.username,
        target:row.fields.username,
      })
      console.log(res)
    }
  },
  data() {
    return {
      teamDetails: null,
      teamProjects: [],
      showAddProjectModal: false,
      categories: ['关于团队', '项目', '团队成员'],
      memberList:[],
      move: 0,
      active: 0,
    }
  }
}
</script>

<style scoped lang="less">
::v-deep .el-breadcrumb {
  margin: 15px 0 0 15px !important;
  font-weight: 800 !important;
}
.main {
  width: 100%;
  height: 100%;
  background-image: url('https://www.benchmark.tech/assets/images/bg-element1.png');
  background-size: cover;
  background-repeat: no-repeat;
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
  margin-top: 25px;
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

.categories {
  margin: 15px 0 0 15px;
  height: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  span {
    width: 112px;
    text-align: center;
    color: #959292;
    font: 15px sans-serif;
    transition: all 0.5s;
  }

  span:hover {
    cursor: pointer;
  }

  .moveBar {
    width: 111.2px;
    height: 3px;
    background-color: orangered;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.5s;
    margin-top: 4px;
  }

  .active {
    color: #3f96b3;
  }
}
.memberAmount:hover {
  cursor: pointer;
}
</style>
