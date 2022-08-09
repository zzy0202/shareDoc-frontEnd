<template>
  <div class="main">

  </div>
</template>

<script>
import {Tree, // 基础树
  Fold, Check, Draggable, // 插件: 折叠, 勾选框, 拖拽
} from 'he-tree-vue'
import 'he-tree-vue/dist/he-tree-vue.css' // 基础样式
export default {
  name: "ProjectAside"
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
</style>