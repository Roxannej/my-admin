<template>
  <aside class="aside_top">
    <!-- 图标 -->
    <span></span>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 右边的部分 -->
    <div class="aside_top-right">
      <!-- 邮箱图标 -->
      <div class="email"></div>
      <!-- 用户的头像 -->
      <div class="user-msg"></div>
    </div>
  </aside>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
