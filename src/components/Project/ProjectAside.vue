<template>
  <div class="main">
    <template>
      <div style="margin-left: 10px;margin-top: 20px;">
        <vue-tree-list
            @click="onClick"
            :model="fileData"
            default-tree-node-name="new node"
            default-leaf-node-name="new leaf"
            v-bind:default-expanded="false"
        >
          <template v-slot:leafNameDisplay="slotProps">
        <span ref="showFile">
          {{ slotProps.model.name }} <span class="muted"></span>
        </span>
          </template>
<!--          <span class="icon" slot="addTreeNodeIcon">📂</span>-->
<!--          <span class="icon" slot="addLeafNodeIcon">＋</span>-->
          <span class="icon" slot="leafNodeIcon">📃</span>
          <span class="icon" slot="treeNodeIcon">📂</span>
        </vue-tree-list>
      </div>
    </template>
  </div>
</template>

<script>
import {Tree, TreeNode, VueTreeList} from 'vue-tree-list'
import store from "@/store";
import {getDocumentListFroProject} from "@/api/document";

export default {
  name: "ProjectAside",
  components: {
    VueTreeList,
  },
  async mounted() {
    store.commit('setProjectId', {projectId: this.$route.params.projectId});
    this.fileInfo = await getDocumentListFroProject(parseInt(this.$route.params.projectId), {
      username: store.state.user.username,
    });
    let obj = {};
    console.log(this.fileInfo);
    for (let i = 0; i < this.fileInfo.length; i++) {
      this.fileData.children[0].children.push({
        id:this.fileInfo[i].pk,
        name:this.fileInfo[i].title,
        isLeaf:true,
        isFile:true,
      });
    }
    this.fileData.children[0].children.splice(0,1);
    this.$refs.showFile.click();
  },
  data() {
    return {
      newTree: {},
      fileData: new Tree([
        {
          name: '普通文档',
          id: -1,
          pid: 0,
          dragDisabled: true,
          addTreeNodeDisabled: true,
          addLeafNodeDisabled: true,
          editNodeDisabled: true,
          delNodeDisabled: true,
          children: [
            {
              name: 'Node 1-2',
              id: 2,
            }
          ]
        },
        {
          name: '原型设计',
          pid: 0,
          disabled: true,
          dragDaddTreeNodeDisabled: true,
          addLeafNodeDisabled: true,
          editNodeDisabled: true,
          delNodeDisabled: true,
          children: []
        },
      ]),
      fileInfo: [],
    }
  },
  methods: {
    onDel(node) {
      console.log(node)
      node.remove()
    },
    onChangeName(params) {
      console.log(params)
    },
    onAddNode(params) {
      console.log(params)
    },
    onClick(params) {
      if(params.isFile) {
        store.commit('setDocumentId',{documentId:params.id})
        this.$router.push({
          name:'documentEdit',
          params:{
            isCreate:false,
            fileId:params.id,
          }
        })
      }
    },
    getNewTree() {
      var vm = this

      function _dfs(oldNode) {
        var newNode = {}
        for (var k in oldNode) {
          if (k !== 'children' && k !== 'parent') {
            newNode[k] = oldNode[k]
          }
        }
        if (oldNode.children && oldNode.children.length > 0) {
          newNode.children = []
          for (var i = 0, len = oldNode.children.length; i < len; i++) {
            newNode.children.push(_dfs(oldNode.children[i]))
          }
        }
        return newNode
      }

      vm.newTree = _dfs(vm.data)
    }
  }
}
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  background: rgb(248, 248, 246);
  margin-top: 2px;
  box-shadow: 3px 3px #efefef
}

.vtl {
  .vtl-drag-disabled {
    background-color: #d0cfcf;

    &:hover {
      background-color: #d0cfcf;
    }
  }

  .vtl-disabled {
    background-color: #d0cfcf;
  }
}

.icon {
  &:hover {
    cursor: pointer;
  }
}

.muted {
  color: gray;
  font-size: 80%;
}
::v-deep .vtl-operation {
  display: none !important;
}
::v-deep .vtl-node-main:hover {
  cursor: pointer;
}
</style>
