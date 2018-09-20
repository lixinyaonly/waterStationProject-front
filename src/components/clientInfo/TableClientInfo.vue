<template>
	<div>
		<el-table
			ref="multipleTable"
			:data="tableData3"
			:stripe="true"
			align="left"
			tooltip-effect="dark"
			style="width: 100%"
			@selection-change="handleSelectionChange">
			<el-table-column
			type="selection"
			width="55">
			</el-table-column>
			<el-table-column
			label="客户电话"
			prop="date"
			width="120">
			</el-table-column>
			<el-table-column
			prop="name"
			label="常用水种"
			width="120">
			</el-table-column>
			<el-table-column
			prop="name"
			label="价格"
			width="120">
			</el-table-column>
			<el-table-column
			prop="name"
			label="添加时间"
			width="120">
			</el-table-column>
			<el-table-column
			prop="address"
			label="地址"
			show-overflow-tooltip>
			</el-table-column>
			<el-table-column
			prop="name"
			label="详情"
			width="120">
			</el-table-column>
			<el-table-column
				label="操作"
				width="200">
			<template slot-scope="scope">
				<el-button
				size="mini"
				@click="handleEdit(scope.$index, scope.row)">编辑</el-button>
				<el-button
				size="mini"
				type="danger"
				@click="handleDelete(scope.$index, scope.row)">删除</el-button>
			</template>
			</el-table-column>
		</el-table>
		<el-pagination
			background
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:page-size="10"
			layout="total, prev, pager, next, jumper"
			:total="1000">
		</el-pagination>
	</div>

</template>

<script>
export default {
  data() {
    return {
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>