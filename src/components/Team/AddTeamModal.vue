<template>
  <div class="main">
    <div class="addTeamContent">
      <div class="topTitle">
        <span>添加团队</span>
      </div>
      <div class="formContainer">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="团队名称" prop="name">
            <el-input v-model="ruleForm.name" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="团队描述" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="团队类型">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="开发" value="develop"></el-option>
              <el-option label="科研" value="research"></el-option>
              <el-option label="市场" value="marketing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="添加团队队员">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option v-for="(item,index) in friend" :label="item.username" :value="item.userId"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="teamMemberContainer">
        <div class="member">
            <span class="memberName">熊本熊</span>
            <span class="icon-ren-danren iconfont logo"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
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
        region: [
          { required: true, message: '请填写团队描述', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
  }
}
.formContainer {
  margin-top: 25px;
  margin-left: 10px;
}
.teamMemberContainer {
  margin-top: 10px;
  width: 90%;
  height: 30px;
  align-self: center;
  display: flex;
  justify-content: flex-start;
  .member {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: lightgray;
    padding: 0 12px;
    .logo {
      margin-left: 5px;
    }
  }
}
</style>