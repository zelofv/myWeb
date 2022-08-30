<template>
  <el-form  :model="loginForm" :rules="loginRules" ref="ruleForm">
    <el-form-item prop="account"><el-input v-model="loginForm.account" type="text" placeholder="请输入邮箱/手机号/账号" autocomplete="on" clearable></el-input></el-form-item>

    <el-form-item prop="password"><el-input v-model="loginForm.password" type="password" placeholder="请输入密码" autocomplete="on" show-password clearable></el-input></el-form-item>

    <el-form-item><el-checkbox class="auto-login-button" v-model="autoLogin">下次自动登录</el-checkbox><span class="forget">忘记密码？</span></el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "LoginWithAccountForm",
  props: ['loginForm', 'loginRules', 'autoLogin'],
}
</script>

<style scoped>
.forget {
  position: absolute;
  right: 0;
  font-size: 16px;
  color: rgb(116, 120, 124);
  user-select: none;
  cursor: pointer;
}

.auto-login-button {
  position: absolute;
  left: 0;
}

/deep/ .el-form-item {
  margin-bottom: 16px;
}

/deep/ .el-input__inner {
  height: 48px;
  padding: 4px 15px;
}

/deep/ .el-checkbox__label {
  font-size: 16px;
}

/deep/ .el-form-item__content {
  width: 100%;
  height: 48px;
  /*display: flex;*/
  /*justify-content: space-around;*/
}
</style>