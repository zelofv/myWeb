<template>
  <div class="welcome">
    <div class="welcome-body">
      <div class="welcome-content">
        <h1>欢迎使用课堂派</h1>
        <p>精彩教学，从这里开启</p>
        <div class="welcome-button-group">
          <el-button>联系课堂派</el-button>
          <el-button @click="toRegister">免费注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mixin} from "@/mixins";

export default {
  name: "Welcome",
  mixins: [mixin],
}
</script>

<style scoped>
.welcome {
  width: 100%;
  height: 400px;
  background-image: url("@/assets/img/homepage/welcome-bg.png");
  background-position: 50%;
  position: relative;
  justify-content: center;
  display: flex;
}

.welcome-body {
  position: absolute;
  margin: 0 auto;
  width: 100%;
  top: 0;
}

.welcome-content {
  margin: 0 auto;
  color: #fff;
  text-align: center;
  width: 336px;
}

.welcome-content h1 {
  font-weight: 500;
  line-height: 48px;
  font-size: 48px;
  margin-top: 88px;
}

.welcome p {
  font-weight: 500;
  font-size: 20px;
  margin-top: 24px;
  margin-bottom: 37px;
}

.welcome-button-group {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  font-size: 16px;
  /*position: relative;*/
}

.el-button--default {
  font-size: 16px;
  font-weight: 500;
  width: 120px;
  height: 40px;
  line-height: 16px;
}

.welcome-button-group .el-button--default:nth-child(1) {
  color: #fff;
  background: #5293ff;
  border: 1px solid white;
}

.welcome-button-group .el-button--default:nth-child(2) {
  color: #5293ff;
  background-color: #fff;
  border: none;
}
</style>