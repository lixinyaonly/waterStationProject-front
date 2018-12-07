<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item class="title">
        <span class="space"></span>员工信息
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="2">
        <el-button type="primary">+ 添加员工</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column prop="number" label="编号"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="telephone" label="电话"></el-table-column>
      <el-table-column prop="starLevel" label="星级"></el-table-column>
      <el-table-column prop="entryDate" label="入职日期"></el-table-column>
      <el-table-column prop="total" label="配送总量"></el-table-column>
      <el-table-column prop="month" label="当月配送量"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          number: "pg001",
          name: "黎明",
          telephone: "987654321",
          starLevel: "3",
          entryData: "2017—04-10",
          total: "66666",
          month: "111",
        }, {
          number: "pg001",
          name: "黎明",
          telephone: "987654321",
          starLevel: "3",
          entryData: "2017—04-10",
          total: "66666",
          month: "111",
        }, {
          number: "pg001",
          name: "黎明",
          telephone: "987654321",
          starLevel: "3",
          entryData: "2017—04-10",
          total: "66666",
          month: "111",
        }, {
          number: "pg001",
          name: "黎明",
          telephone: "987654321",
          starLevel: "3",
          entryData: "2017—04-10",
          total: "66666",
          month: "111",
        }, {
          number: "pg001",
          name: "黎明",
          telephone: "987654321",
          starLevel: "3",
          entryData: "2017—04-10",
          total: "66666",
          month: "111",
        }, {
          number: "pg001",
          name: "黎明",
          telephone: "987654321",
          starLevel: "3",
          entryData: "2017—04-10",
          total: "66666",
          month: "111",
        }, {
          number: "pg001",
          name: "黎明",
          telephone: "987654321",
          starLevel: "3",
          entryData: "2017—04-10",
          total: "66666",
          month: "111",
        }
        
      ]
    };
  }
};
</script>

