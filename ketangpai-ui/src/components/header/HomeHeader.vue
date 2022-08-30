<template>
  <div class="header" id="navigate">
    <div class="logo">
      <Logo/>
      <Tab/>
    </div>

    <div v-if="!isLogin" class="header-login">
      <span><i class="el-icon-sort"></i> 切换旧版本 </span>
      <span>
        <el-button @click="toLogin" plain>登录</el-button>
        <el-button @click="toRegister" plain>注册</el-button>
      </span>
    </div>

    <div v-else class="header-to-main">
      <span><i class="el-icon-sort"></i> 切换旧版本 </span>
      <span>
       <el-button @click="toMain" plain>进入课堂</el-button>
      </span>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/header/Logo";
import Tab from "@/components/header/Tab";
import {mixin} from "@/mixins";

export default {
  name: `Header`,
  mixins:[mixin],
  components: {
    Logo,
    Tab
  },
  data() {
    return{
      isLogin: false,
    }
  }
}
</script>

<style scoped>
.header {
  width: 1350px;
  height: 75px;
  line-height: 75px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
}

.header-login {
  color: #606266;
  height: 36px;
  line-height: 36px;
}

span:nth-child(1) {
  cursor: pointer;
  margin-right: 10px;
  font-size: 16px;
  font-weight: 500;
}

i {
  transform: rotate(90deg);
  font-weight: 500;
  font-size: 17px;
}

.el-button--default {
  width: 90px;
  height: 36px;
  line-height: 10px;
  padding: 10px 20px;
}

.el-button--default:nth-child(1) {
  border: 1px solid #4285f4;
  color: #4285f4;
}

.el-button--default:nth-child(2) {
  color: #ffffff;
  margin-left: 20px;
  background: linear-gradient(131deg, #7eb0ff, #2178ff);
  border: none;
}

.header-to-main {
  color: #606266;
  height: 36px;
  line-height: 36px;
}

span:nth-child(1) {
  cursor: pointer;
  margin-right: 10px;
  font-size: 16px;
  font-weight: 500;
}

i {
  transform: rotate(90deg);
  font-weight: 500;
  font-size: 17px;
}

.el-button--default {
  width: 90px;
  height: 36px;
  line-height: 10px;
  padding: 10px 20px;
}

.header-to-main .el-button--default {
  color: #ffffff !important;
  background: linear-gradient(131deg, #7eb0ff, #2178ff) !important;
  border: none;
}
</style>