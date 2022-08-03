<template>
  <div class="main">
    <div class="breadCrumb">
      <el-breadcrumb separator="/" :to="{path:'/manageDocument'}">
        <el-breadcrumb-item>文档管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="topPart">
      <div class="input">
        <el-input
            placeholder="请输入想查找的文档名字"
            suffix-icon="el-icon-search"
            v-model="search">
        </el-input>
      </div>
      <el-button type="primary" style="margin-left: 10px;">搜索</el-button>
      <el-button type="success">添加文档</el-button>
    </div>
    <div class="tablePart">
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            prop="filename"
            label="文件名"
            width="500">
        </el-table-column>
        <el-table-column
            prop="creator"
            label="创建者"
            width="200">
        </el-table-column>
        <el-table-column
            prop="createTime"
            label="创建时间"
            width="200">
        </el-table-column>
        <el-table-column
            prop="team"
            width="200"
            label="隶属于的团队">
        </el-table-column>
        <el-table-column
            :header-cell-style="{'text-align':'center'}"
            label="操作">
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ManageOnlineDocument",
  data() {
    return {
      search: '',
      tableData: [
        {
          filename: 'HelloWorld.txt',
          creator: '熊本熊',
          createTime: '2022-08-02',
          team: '天天向上'
        }
      ]
    }
  }
}
</script>

<style scoped>
::v-deep .breadCrumb {
  margin: 15px 0 0 15px;
  font-weight: 800 !important;
}

::v-deep .el-breadcrumb__inner {
  font-weight: 800 !important;
  cursor: pointer !important;
}

.topPart {
  width: 98%;
  height: 70px;
  margin: 5px auto 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
}

::v-deep .el-input__inner {
  width: 250px;
  cursor: pointer;
}

.tablePart {
  width: 98%;
  margin: 0 auto;
}
</style>
