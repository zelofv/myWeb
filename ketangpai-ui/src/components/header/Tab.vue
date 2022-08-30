<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="首页" name="first"></el-tab-pane>
    <el-tab-pane label="产品功能" name="second"></el-tab-pane>
    <el-tab-pane label="机构版" name="third"></el-tab-pane>
    <el-tab-pane label="渠道合作" name="fourth"></el-tab-pane>
    <el-tab-pane label="会员权益" name="fifth"></el-tab-pane>
    <el-tab-pane label="帮助中心" name="sixth"></el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "Tab",
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>
/*.el-tabs__content {*/
/*  display: none;*/
/*  height: 0;*/
/*}*/

/deep/.el-tabs__item {
  font-size: 19px;
  color: #3c4043
}

/deep/.el-tabs__header {
  margin: 0;
}

/deep/ .header .el-tabs__nav-wrap::after {
  position: static !important;
}
/deep/.header .el-tabs__item:hover,/deep/ .header .el-tabs__item.is-active {
  color: #3c4043;
}

</style>