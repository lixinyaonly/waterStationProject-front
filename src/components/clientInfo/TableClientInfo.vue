<template>
  <div>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item class="title"><span class="space"></span>客户信息</el-breadcrumb-item>
		</el-breadcrumb>
    <el-table
      ref="multipleTable"
      :data="tableData3"
      :stripe="true"
      align="left"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange" >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="date" label="客户电话" width="120"></el-table-column>
      <el-table-column prop="name" label="常用水种" width="120"></el-table-column>
      <el-table-column prop="name" label="价格" width="120"></el-table-column>
      <el-table-column prop="name" label="添加时间" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
      <el-table-column label="详情" width="120">
        <template slot-scope="scope">
					<el-button type="text" @click="detailsShow">详情</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size="10"
      layout="total, prev, pager, next, jumper"
      :total="1000"
    ></el-pagination>
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
		detailsShow(){
			this.$alert('<p style="width:180px;float:left;line-height:40px">客户电话: 13701210203</p>'+
									'<p style="width:180px;float:left;line-height:40px">常用水品牌: 盘龙瀑</p>'+
									'<p style="width:180px;float:left;line-height:40px">单价: 9</p>'+
									'<p style="width:180px;float:left;line-height:40px">水票数量: 0.00</p>'+
									'<p style="width:180px;float:left;line-height:40px">水票价格: 0</p>'+
									'<p style="width:180px;float:left;line-height:40px">押桶数量: 1</p>'+
									'<p style="width:180px;float:left;line-height:40px">添加时间: 2017-05-06</p>'+
									'<p style="width:180px;float:left;line-height:40px">地址: ????22-4-5</p>'+
									'<p style="width:180px;float:left;line-height:40px">区域: ???</p>'+
									'<p style="width:180px;float:left;line-height:40px">住房类型: ???</p>'+
									'<p style="width:180px;float:left;line-height:40px">备注: </p>'+
									'<p style="width:180px;float:left;line-height:40px">备忘信息: </p>'+
									'<p style="width:180px;float:left;line-height:40px">购买记录: </p>',
									'客户信息详情',{
										dangerouslyUseHTMLString: true
									});
		},
    handleEdit(index, row) {
			this.$router.push({path: '/clientManage/addClient',query:{ id:'6'}});
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>