<template>
  <div class="main">
    <div class="OperationWrap">
      <div class="buttonWrap">
        <el-button type="primary" icon="el-icon-back" @click="returnBack">返回</el-button>
        <el-button type="primary" icon="el-icon-paperclip" @click="save('create')" v-if="$route.params.isCreate">创建
        </el-button>
        <el-button type="primary" icon="el-icon-paperclip" @click="save('save')" v-else>保存</el-button>
        <el-button type="primary" icon="el-icon-paperclip"@click="getPdf('#w-e-textarea-1')">导出成PDF</el-button>
      </div>
    </div>
    <div class="titleWrap" style="width: 95vw;margin: 5px auto 15px;">
      <div class="blockWrap" v-if="isEditingTitle" @click="cancelEditTitle"></div>
      <h2 v-if="!isEditingTitle">{{ fileInfo.filename }}</h2>
      <input v-model="fileInfo.filename" type="text" v-if="isEditingTitle" ref="inputTitle"
             @keyup.enter="cancelEditTitle">
      <span class="iconfont icon-bianji" style="color: skyblue" @click="editTitle"></span>
    </div>
    <DocumentEditorWang id="editor" style="width: 95vw;margin: 0 auto 50px auto;height: 150vh" class="editor" ref="editorChild"
                        v-on:getEditorContent="addDocument" v-on:getDocumentInfo="getDocumentInfo"
                        :docContent="fileInfo.fileContent"></DocumentEditorWang>
  </div>
</template>

<script>
import DocumentEditorWang from "@/components/DocumentEditorWang";
import store from "@/store";
import {createDoc, updateDoc} from "@/api/document";

export default {
  name: "DocumentEditor",
  components: {
    DocumentEditorWang,
  },
  data() {
    return {
      isSaved: false,
      fileInfo: {
        filename: '暂无标题',
        fileContent: '',
        lastChanged: '',
      },
      pageData: null,  //接收html格式代码
      htmlTitle: '文档PDF',
      isEditingTitle: false,
      isEditingDocument: false,
      operation: '',
    }
  },
  beforeRouteEnter(to, from, next) {
    if (to.query && to.query.fileInfo) {
      console.log(to.query.fileInfo);
      next(vm => {
        vm.fileInfo = to.query.fileInfo;
        vm.isEditingDocument = true;
        console.log(vm.fileInfo);
      })
    } else {
      next();
    }
  },
  mounted() {
  },
  methods: {
    returnBack() {
      console.log(this.fileInfo.fileContent);
      if (this.isSaved) {
        this.$router.go(-1);
      } else {
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
      this.$nextTick(() => {
        this.$refs.inputTitle.focus();
      })
    },
    cancelEditTitle() {
      this.isEditingTitle = false;
    },
    save(operation) {
      this.operation = operation;
      this.$refs.editorChild.showMe();
      this.isSaved = true;
      this.$message({
        message: "成功保存",
        type: "success",
      })
    },
    async addDocument(content) {
      if (this.$route.params.isCreate) {     //在创建文件
        let res = await createDoc({
          title: this.fileInfo.filename,
          team_pk: store.state.currentTeamId,
          project_pk: store.state.currentProjectId,
          username: store.state.user.username,
          content: content,
          description: '',
        });
        console.log(res);
      } else {  //否则就是保存
        let res = await updateDoc({
          title: this.fileInfo.filename,
          doc_pk: store.state.currentFileId,
          team_pk: store.state.currentTeamId,
          username: store.state.user.username,
          content,
          description: '',
        })
      }
    },
    getDocumentInfo(res) {
      this.fileInfo.filename = res.title;
    },
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
    margin: auto;
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
