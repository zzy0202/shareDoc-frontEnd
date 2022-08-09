<template>
  <div class="main">
    <template>
      <div style="margin-left: 10px;margin-top: 20px;">
        <vue-tree-list
            @click="onClick"
            :model="data"
            default-tree-node-name="new node"
            default-leaf-node-name="new leaf"
            v-bind:default-expanded="false"
        >
          <template v-slot:leafNameDisplay="slotProps">
        <span>
          {{ slotProps.model.name }} <span class="muted"></span>
        </span>
          </template>
          <span class="icon" slot="addTreeNodeIcon">📂</span>
          <span class="icon" slot="addLeafNodeIcon">＋</span>
          <span class="icon" slot="leafNodeIcon">📃</span>
          <span class="icon" slot="treeNodeIcon">📂</span>
        </vue-tree-list>
      </div>
    </template>
  </div>
</template>

<script>
import {VueTreeList, Tree, TreeNode} from 'vue-tree-list'

export default {
  name: "ProjectAside",
  components: {
    VueTreeList,
  },
  data() {
    return {
      newTree: {},
      data: new Tree([
        {
          name: '普通文档',
          id: 1,
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
              isLeaf: true,
              pid: 1
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
          children: [
            {
              name: 'Node 1-2',
              isLeaf: true,
              pid: 1
            }
          ]
        },
      ])
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
      console.log(params)
    },
    addNode() {
      var node = new TreeNode({name: 'new node', isLeaf: false})
      if (!this.data.children) this.data.children = []
      this.data.addChildren(node)
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
</style>
