<template>
  <el-form  :model="loginPhoneForm" :rules="loginPhoneRules" ref="ruleForm">
    <el-form-item prop="phone"><el-input v-model="loginPhoneForm.phone" type="text" placeholder="请输入手机号" autocomplete="on" clearable></el-input></el-form-item>

    <el-form-item><el-input class="verification" v-model="loginPhoneForm.verificationCode" type="text" placeholder="请输入验证码" autocomplete="on" clearable></el-input>
      <el-button type="primary">发送验证码</el-button>
    </el-form-item>

    <el-form-item><el-checkbox class="auto-login-button" v-model="autoLogin">下次自动登录</el-checkbox><span class="forget">忘记密码？</span></el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "LoginWithPhone",
  props: ['loginPhoneForm','loginPhoneRules', 'autoLogin'],
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
.verification {
  width: 65%;
  margin-right: 15px;
}

.auto-login-button {
  position: absolute;
  left: 0;
}
.el-button {
  width: 32%;
  padding: 8px 15px;
  background-color: #4285f4;
  font-size: 15px;
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
  min-width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
}
</style>