<template>
  <div class="main">
    <div class="breadCrumb">
      <el-breadcrumb separator="/" :to="{path:'/manageDocument'}">
        <el-breadcrumb-item>团队管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="display: flex;align-items: center;justify-content: flex-start;">
      <el-button @click="addTeam" class="buttonAddTeam" type="primary" icon="el-icon-s-custom">添加团队</el-button>
      <el-input v-model="addFriendName" placeholder="添加好友" @keyup.native.enter="addFriend"></el-input>
      <el-button @click="addFriend" class="buttonAddTeam" type="primary" icon="el-icon-user">添加好友</el-button>
      <add-team-modal v-if="addingTeam" v-on:closeModal="closeModal"></add-team-modal>
    </div>
    <h3 style="margin: 20px 0 0 15px">已有团队</h3>
    <div class="cardContainer">
      <el-card class="box-card" v-for="(item,index) in teamList" @click.native="goTeamDetails(index)">
        <div slot="header" class="clearfix">
          <h3>{{ item.fields.name }}</h3>
        </div>
        <div class="cardContent">
          <span>团队描述: {{ item.fields.description }}</span>
          <div class="teamMemberAmount">
            <span>团队人数: {{ item.fields.member.length }}</span>
            <span class="iconfont icon-tuandui"></span>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import AddTeamModal from "@/components/Team/AddTeamModal";
import {addFriend} from "@/api/profile";
import {getTeamList} from "@/api/projectManage";
import store from '@/store'

export default {
  name: "ManageTeam",
  components: {
    AddTeamModal,
  },
  async mounted() {
    let res = await getTeamList({
      username: store.state.user.username,
    });
    if (res.msg && res.msg === 'no teams you joined') {

    } else {
      this.teamList = res
    }
  },
  data() {
    return {
      addingTeam: false,
      teamName: '',
      showCard: false,
      addFriendName: '',
      teamList: [],
    }
  },
  methods: {
    addTeam() {
      this.addingTeam = true;
    },
    async closeModal() {
      this.addingTeam = false;
      this.$router.go(1);
      let res = await getTeamList({
        username: store.state.user.username,
      });
      if (res.msg && res.msg === 'no teams you joined') {

      } else {
        this.teamList = res
      }
    },
    async addFriend() {
      let res = await addFriend({
        username: store.state.user.username,
        friend_username: this.addFriendName,
      })
      if (res.msg === 'success') {
        this.$message({
          message: `添加好友${this.addFriendName}成功`,
          type: "success",
        })
      }
    },
    goTeamDetails(index) {
      store.commit('setTeamId',{teamId:this.teamList[index].pk});
      this.$router.push({
        name: 'teamDetails',
        params: {
          teamId: this.teamList[index].pk,
        }
      })
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

.buttonAddTeam {
  margin: 10px 0 0 15px;
}

::v-deep .el-input__inner {
  width: 20vw;
}

::v-deep .el-card {
  width: 350px;
  height: 220px;
  flex-basis: 30%;
  margin-left: 20px;
}

::v-deep .el-input {
  width: 20vw;
  margin: 10px 0 0 15px;
}

.cardContent {
  height: 100%;
  position: relative;

  .teamMemberAmount {
    position: absolute;
    bottom: 60px;
    right: 5px;
  }
}

::v-deep .el-card__body {
  height: 180px;
}

.icon-tuandui {
  margin-left: 10px;
}

.el-card:hover {
  cursor: pointer;
}

.cardContainer {
  margin: 15px 0 0 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
