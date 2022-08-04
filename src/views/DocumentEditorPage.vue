<template>
  <div class="main">
    <div class="OperationWrap">
      <div class="buttonWrap">
        <el-button type="primary" icon="el-icon-back" @click="returnBack">返回</el-button>
        <el-button type="primary" icon="el-icon-paperclip" @click="save">保存</el-button>
      </div>
    </div>
    <div class="titleWrap" style="width: 95vw;margin: 5px auto 15px;">
      <div class="blockWrap" v-if="isEditingTitle" @click="cancelEditTitle"></div>
      <h2 v-if="!isEditingTitle">{{fileInfo.fileTile}}</h2>
      <input v-model="fileInfo.fileTile" type="text" v-if="isEditingTitle" ref="inputTitle" @keyup.enter="cancelEditTitle">
      <span class="iconfont icon-bianji" style="color: skyblue" @click="editTitle"></span>
    </div>
    <DocumentEditorWang style="width: 95vw;margin: 0 auto" class="editor" ref="editorChild" v-on:getEditorContent="addDocument"></DocumentEditorWang>
  </div>
</template>

<script>
import DocumentEditorWang from "@/components/DocumentEditorWang";
import {generateRandomId} from "@/assets/js/util";
import store from "@/store";
export default {
  name: "DocumentEditor",
  components:{
    DocumentEditorWang,
  },
  data() {
    return {
      isSaved:false,
      fileInfo:{
        fileTile:'暂无标题',
        fileContent:'',
        lastChanged:'',
      },
      isEditingTitle:false,
    }
  },
  methods:{
    returnBack(){
      if(this.isSaved) {
        this.$router.go(-1);
      }
      else {
        this.$confirm('该文件尚未保存，是否确认退出?', '提示', {
          confirmButtonText: '确定退出',
          cancelButtonText: '取消退出',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '成功退出'
          });
          this.$router.go(-1);
        })
      }
    },
    editTitle() {
      this.isEditingTitle = true;
      this.$nextTick(()=>{
        this.$refs.inputTitle.focus();
      })
    },
    cancelEditTitle() {
      this.isEditingTitle = false;
    },
    save() {
      this.$refs.editorChild.showMe();
      this.isSaved = true;
      this.$message({
        message:"成功保存",
        type:"success",
      })
    },
    addDocument(content) {
      let arr = JSON.parse(localStorage.getItem('fileInfo'))||[];
      let year = new Date().getFullYear();
      let month  = new Date().getMonth()+1;
      let date = new Date().getDate();
      let file = {
        filename:this.fileInfo.fileTile,
        fileContent: this.fileInfo.fileContent,
        lastModified: `${year}-${month}-${date}`,
        creator:store.state.user.username,
        file:generateRandomId(),
      }
      arr.push(file);
      localStorage.setItem('fileInfo',JSON.stringify(arr));
    }
  }
}
</script>

<style scoped lang="less">
  .OperationWrap {
    width: 100vw;
    background-color: #f8f5f5;
    box-shadow: rgb(0 0 0 / 6%) 0px 1px 1px, rgb(0 0 0 / 10%) 0px 2px 4px;
    display: flex;
    align-items: center;
    height: 55px;
    margin-bottom: 15px;
    .buttonWrap {
      width: 95vw;
      margin:  auto;
    }
  }
  .titleWrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .icon-bianji {
      margin-left: 15px;
      font-size: 18px !important;
    }
    .icon-bianji:hover {
      cursor: pointer;
    }
    input {
      font-size: 24px;
      font-weight: 600;
      border: none;
      z-index: 2;
    }
    .blockWrap {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }
</style>