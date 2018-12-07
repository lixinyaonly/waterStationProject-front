<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item class="title">
        <span class="space"></span>客户搜索
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="6">
        <el-input placeholder="请输入内容" v-model="input"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </el-col>
      
    </el-row>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item class="title">
        <span class="space"></span>客户信息
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="number" label="订单序号"></el-table-column>
      <el-table-column prop="phoneCode" label="客户电话"></el-table-column>
      <el-table-column prop="variety" label="品种"></el-table-column>
      <el-table-column prop="amount" label="数量"></el-table-column>
      <el-table-column prop="unitCode" label="单价"></el-table-column>
      <el-table-column prop="total" label="总价"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="" label="状态"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          number: "1",
          phoneCode: "987654321",
          variety: "???",
          amount: "1",
          unitCode: "10.00",
          total: "10",
          address: "北京市",
          remark: "老人"
        },
        {
          number: "1",
          phoneCode: "987654321",
          variety: "???",
          amount: "1",
          unitCode: "10.00",
          total: "10",
          address: "北京市",
          remark: "老人"
        },
        {
          number: "1",
          phoneCode: "987654321",
          variety: "???",
          amount: "1",
          unitCode: "10.00",
          total: "10",
          address: "北京市",
          remark: "老人"
        },
        {
          number: "1",
          phoneCode: "987654321",
          variety: "???",
          amount: "1",
          unitCode: "10.00",
          total: "10",
          address: "北京市",
          remark: "老人"
        }
      ],
      input: ""
    };
  },
  methods: {
    formatter(row, column) {
      return row.address;
    }
  }
};
</script>
<style>
  input{
    margin-bottom: 20px;
  }
</style>
