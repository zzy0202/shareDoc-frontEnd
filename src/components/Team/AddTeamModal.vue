<template>
  <div class="main">
    <div class="addTeamContent">
      <div class="topTitle">
        <span>添加团队</span>
        <span class="iconfont icon-guanbi close" @click="closeModal"></span>
      </div>
      <div class="formContainer">
        <el-form :model="team" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="团队名称" prop="name">
            <el-input v-model="team.name" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="团队描述" prop="teamDescription">
            <el-input type="textarea" v-model="team.description" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="团队类型">
            <el-select v-model="team.region" placeholder="请选择团队类型">
              <el-option label="开发" value="develop"></el-option>
              <el-option label="科研" value="research"></el-option>
              <el-option label="市场" value="marketing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="添加团队队员">
            <el-select v-model="team.member" placeholder="请选择添加团员">
              <el-option v-for="(item,index) in friend" :label="item.username" :value="item.username"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="teamMemberContainer">
        <div class="member" v-for="(item,index) in team.memberList">
            <span class="memberName">{{ item }}</span>
            <span class="icon-ren-danren iconfont logo"></span>
        </div>
      </div>
      <el-button type="primary" style="width: 100px;align-self: center" @click="submitForm">创建</el-button>
    </div>
  </div>
</template>

<script>
import {createProject,createTeam} from "@/api/projectManage";
import store from '@/store'
export default {
  name: "Modal",
  data() {
    return {
      team: {
        name: '',
        description: '暂无描述',
        member:'',
        memberList:[],
        JSONMemberList:[],
        region:'',
      },
      friend:[
        {username:'熊本熊',userId:'1'},
        {username:'时冉',userId: '2'},
        {username: 'jmj',userId:'3'},
      ],
      rules: {
        name: [
          { required: true, message: '请输入团队名称', trigger: 'blur' },
        ],
        description: [
          { required: true, message: '请填写团队描述', trigger: 'change' }
        ],
      },
    };
  },
  methods: {
    async submitForm(formName) {
      let res = await createTeam({
        username:store.state.user.username,
        team_name:this.team.name,
        description:this.team.description,
        region:2,
        members:this.team.JSONMemberList,
      })
      console.log(res);
      // let arr = JSON.parse(localStorage.getItem('getProject'))|| [];
      // console.log(arr);
      // arr.push({
      //     username:store.state.user.username,
      //     team_name:this.team.name,
      //     description:this.team.description,
      //     region:0,
      //     members:this.team.memberList,
      // })
      // localStorage.setItem('getProject',JSON.stringify(arr));
    },
    closeModal() {
      this.$confirm('确定放弃创建团队吗?', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$emit('closeModal')
      })
    }
  },
  watch:{
    'team.member':{
      handler(newVal,oldVal) {
        console.log('kskksks')
        this.team.memberList.push(newVal);
        this.team.JSONMemberList.push(({member:newVal}))
      },
      deep:true,
    }
  }
}
</script>

<style scoped lang="less">
.main {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(54, 65, 58,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.addTeamContent {
  width: 600px;
  height: 500px;
  background-color: whitesmoke;
  border-radius: 15px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .topTitle {
    width: 100%;
    background-color: #efefef;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    height: 40px;
    display: flex;
    justify-content: center;
    line-height: 40px;
    box-shadow: rgb(0 0 0 / 6%) 0px 1px 1px, rgb(0 0 0 / 10%) 0px 2px 4px;
    font-weight: 600;
    position: relative;
    .close {
      justify-self: right;
      position: absolute;
      right: 15px;
    }
    .close:hover {
      cursor: pointer;
    }
  }
}
.formContainer {
  margin-top: 25px;
  margin-left: 10px;
}
.teamMemberContainer {
  margin-top: 10px;
  width: 90%;
  align-self: center;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .member {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: lightgray;
    padding: 0 12px;
    margin-bottom: 10px;
    .logo {
      margin-left:auto;
    }
    margin-left: 10px;
  }
}
</style>
