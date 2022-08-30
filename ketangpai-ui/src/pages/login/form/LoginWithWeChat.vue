<template>
<div>
  <div class="qrcode-box"><img src="@/assets/img/login/qrcode.png" alt width="350"></div>
  <p v-show="!invalid">二维码 2 分钟后失效</p>
  <p v-show="invalid">二维码已过期，请<span>刷新</span></p>
  <el-checkbox class="auto-login-button" v-model="autoLogin">下次自动登录</el-checkbox>
</div>
</template>

<script>
export default {
  name: "LoginWithWeChat",
  props: ['autoLogin'],
  data() {
    return {
      invalid: false,
    };
  },
}
</script>

<style scoped>
.qrcode-box {
  width: 100%;
}
p {
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  transform: translate(120px, -8px);
}

span{
  color: #4285f4;
}
.auto-login-button {
  position: absolute;
  transform: translate(-145px, 35px);
}
/deep/ .el-checkbox__label {
  font-size: 16px;
}
</style>