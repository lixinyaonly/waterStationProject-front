<template>
     <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    :router="true"
    active-text-color="#ffd04b">
    <el-menu-item index="clientInfo">客户信息管理</el-menu-item>
    <el-submenu index="2">
      <template slot="title">订单内容管理</template>
      <el-menu-item index="2-1">当前订单</el-menu-item>
      <el-menu-item index="2-2">订单查询</el-menu-item>
      <el-menu-item index="2-3">今日订单</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
        <template slot="title">配送服务管理</template>
        <el-menu-item index="3-1">配送操作</el-menu-item>
        <el-menu-item index="3-2">配送信息</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
        <template slot="title">员工信息管理</template>
        <el-menu-item index="4-1">员工信息</el-menu-item>
        <el-menu-item index="4-2">工作统计</el-menu-item>
        <el-menu-item index="4-2">配送排名</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
        <template slot="title">销售业绩展示</template>
        <el-menu-item index="5-1">图形分析</el-menu-item>
        <el-menu-item index="2-2">详细报表</el-menu-item>
    </el-submenu>
    <el-submenu index="6">
        <template slot="title">库存管理</template>
        <el-menu-item index="6-1">库存信息</el-menu-item>
        <el-menu-item index="6-2">入库操作</el-menu-item>
    </el-submenu>
     <el-menu-item index="7">订单位置显示</el-menu-item>
     <el-menu-item index="8">后台显示设置</el-menu-item>
  </el-menu>
</template>
<script>
export default {
    data() {
        return {
        activeIndex: "1",
        activeIndex2: "1"
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>
<style>
.el-menu--collapse .el-menu .el-submenu, .el-menu--popup {
    min-width: 150px;
}
.el-menu{
    padding-left: 10%;
}
</style>

  