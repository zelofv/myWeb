<template>
  <div class="main-header">
    <div class="main-header-content">
      <Logo/>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="0">我的课堂</el-menu-item>
        <el-menu-item v-if="false" index="1">备课区</el-menu-item>
        <el-menu-item v-if="false" index="2">虚拟教研室</el-menu-item>
      </el-menu>
      <HeaderRight/>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/header/Logo";
import HeaderRight from "@/components/header/HeaderRight";

export default {
  name: "MainHeader",
  components: {HeaderRight, Logo},
  data() {
    return {
      activeIndex: '0',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
}
</script>

<style scoped>
.main-header .main-header-content {
  z-index: 2;
}

.main-header {
  height: 71px;
  width: 100%;
  margin-bottom: 12px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 0 10px #ccc;
}

.main-header-content {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 70px;
  line-height: 70px;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 1px 0 0 #dfdfdf;
}


.el-menu {
  border: none;
}

.el-menu-demo {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}

.el-menu--horizontal > .el-menu-item {
  font-size: 17px;
  font-weight: 400;
  height: 69px;
  line-height: 67px;
  color: #1f2023;
  border-bottom: none;
  text-decoration: none;
  /*position: static !important;*/
}

.el-menu--horizontal > .el-menu-item.is-active {
  color: #4285f4;
}

.el-menu--horizontal > .el-menu-item.is-active::after {
  content: "";
  width: 100%;
  bottom: -4px;
  left: 0;
  display: block;
  /*border-bottom: 4px solid transparent;*/
  transition: border-color .3s;
  /*box-sizing: content-box;*/
  border-bottom: 3px solid #4285f4;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
}

</style>