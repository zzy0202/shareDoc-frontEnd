<template>
  <div class="main">
    <div class="leftAside">
      <ProjectAside></ProjectAside>
    </div>
    <div class="rightSide">
      <div style="width: 100%">
        <el-breadcrumb separator="/" :to="{path:'/manageDocument'}">
          <el-breadcrumb-item>团队管理</el-breadcrumb-item>
          <el-breadcrumb-item>团队项目管理</el-breadcrumb-item>
          <el-breadcrumb-item>团队详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div>
        <el-button type="primary" icon="el-icon-back" style="margin: 15px 0 0 15px" @click="goBack">返回</el-button>
      </div>
      <div class="chooseSelection">
        <div class="createDocument" @click="showTemplate">
          <h3>创建文档</h3>
          <span class="iconfont icon-chuangjianzhibiao"></span>
        </div>
        <div class="createPrototype">
          <h3>创建原型设计</h3>
          <span class="iconfont icon-yuanxingsheji"></span>
        </div>
      </div>
      <div class="chooseTemplate" :class="templateShow?'chooseTemplateActive':''">
        <div class="contentWrap">
          <div v-for="(item,index) in templateInfo" class="content" @click="goCreatePage(index)">
            <div :class="item.bgClass" class="background"></div>
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectAside from "@/components/Project/ProjectAside";
import store from "@/store";
import {getDocumentListFroProject} from "@/api/document";
export default {
  name: "ProjectDetails",
  components: {
    ProjectAside,
  },
  data() {
    return {
      templateShow: false,
      templateInfo:[
        {bgClass:'exampleDoc0',name:'空白文档'},
        {bgClass:'exampleDoc1',name:'工作周报'},
        {bgClass:'exampleDoc2',name:'会议纪要'},
        {bgClass:'exampleDoc3',name:'每日工作日报'},
        {bgClass:'exampleDoc4',name:'项目总结'},
      ]
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    showTemplate() {
      this.templateShow = !this.templateShow;
    },
    goCreatePage(index) {
      this.$router.push({
        name:'documentEdit',
        params:{
          isCreate:true,
          templateType:index,
        }
      })
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
  cursor: pointer !important;
}

.main {
  width: 100%;
  height: 100%;
  display: flex;
}

.leftAside {
  width: 225px;
  height: 100%;
}

.rightSide {
  display: flex;
  height: 100%;
  position: relative;
  flex-direction: column;
  width: calc(100% - 225px);

  .chooseSelection {
    width: 50vw;
    height: 37vh;
    align-self: center;
    justify-content: center;
    position: absolute;
    top: 50% - 25vw;
    left: 50% - 37vh;
    display: flex;
    //justify-content: space-around;
    .createDocument, .createPrototype {
      width: 35%;
      height: 100%;
      margin: 0 50px;
      box-shadow: 0 0 0 white;
      background-color: rgba(135, 206, 235, 0.44);
      border-radius: 30px;
      transition: all 0.6s;
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        margin-top: 20px;
      }

      span {
        color: black !important;
        font-size: 120px;
        text-align: center;
        align-self: center;
        margin-top: 60px;
      }
    }

    .createDocument:hover, .createPrototype:hover {
      cursor: pointer;
      box-shadow: 4px 8px 8px #c8c8c8;
    }
  }
}

.chooseTemplate {
  width: 100%;
  height: 160px;
  background-color: white;
  position: absolute;
  bottom: 0;
  transform: translateY(160px);
  transition: all 0.5s;
  margin-left: 3px;
  box-shadow: 0 0 4px lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  .contentWrap {
    width: 80%;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .content {
      width: 150px;
      height: 90%;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 20px 2px rgb(68 73 77 / 24%);
      margin-bottom: 10px;
      border-radius: 8px;
      .background {
        width: 90%;
        height: 90%;
        background-size: cover;
        background-repeat: no-repeat;
        margin-top: 2%;
      }
      .exampleDoc1 {
        background-image: url('../../public/images/exampleDoc1.png');
      }
      .exampleDoc2 {
        background-image: url('../../public/images/exampleDoc2.png');
      }
      .exampleDoc3 {
        background-image: url('../../public/images/exampleDoc3.png');
      }
      .exampleDoc4 {
        background-image: url('../../public/images/exampleDoc4.png');
      }
      span {
        background-color: rgb(250,250,250);
        font-size: 14px;
        display: inline-block;
        height: 37px;
        text-align: center;
        line-height: 37px;
      }
    }
    .content:hover {
      cursor: pointer;
    }
  }
}

.chooseTemplateActive {
  transform: translateY(0px);
}
</style>
