<template>
  <div class="header-right">
    <span><i class="el-icon-tickets"></i></span>
    <el-popover
        placement="bottom-end"
        width="450"
        trigger="click">
      <div class="main-popover-content">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部" name="first"></el-tab-pane>
          <el-tab-pane label="教学活动" name="second"></el-tab-pane>
          <el-tab-pane label="教务通知" name="third"></el-tab-pane>
          <el-tab-pane label="系统通知" name="fourth"></el-tab-pane>
        </el-tabs>
        <div class=""></div>
        <div class="main-popover-content-button">
          <div class="btn"><span><i class="el-icon-check"/>一键标为已读</span></div>
          <div class="btn"><span><i class="el-icon-view"/>查看全部</span></div>
        </div>
      </div>
      <span slot="reference"><i class="el-icon-bell"></i></span>
      <!--        <el-button slot="reference">click 激活</el-button>-->
    </el-popover>
    <!--      <span><i class="el-icon-bell"></i></span>-->
    <!--      <span><el-avatar></el-avatar></span>-->
    <el-dropdown trigger="click" placement="bottom">
      <!--         <span class="el-dropdown-link">-->
      <el-avatar></el-avatar>
      <!--          </span>-->
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-bank-card">开通VIP</el-dropdown-item>
        <el-dropdown-item icon="el-icon-paperclip">机构用户认证</el-dropdown-item>
        <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
        <el-dropdown-item icon="el-icon-d-arrow-right">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "HeaderRight",
  data() {
    return {
      activeName: 'first',
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  }
}
</script>

<style scoped>

.header-right {
  display: flex;
  align-items: center;
}

.header-right span {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 15px;
}

.header-right span i {
  font-size: 21px;
}

.main-popover-content {
  padding: 0 25px;
  text-align: center;
}

.main-popover-content-button {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.main-popover-content-button .btn {
  width: 50%;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  color: #4285f4;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.main-popover-content-button .btn span {
  cursor: pointer;
}

.main-popover-content-button .btn span i {
  margin-right: 5px;
}
/deep/ .el-tabs__nav-wrap::after {
  position: static !important;
}

/deep/.el-tabs__header {
  margin: 0;
}
/deep/ .el-tabs__item {
  font-size: 17px;
  font-weight: 500;
  color: #3c4043
}

/deep/ .el-tabs__item:hover, /deep/ .el-tabs__item.is-active {
  color: #4285f4;
}
</style>