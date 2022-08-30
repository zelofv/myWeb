<template>
  <div class="login">
    <div class="left"><img src="@/assets/img/login/new-bg.png" alt></div>
    <div class="right">
      <div class="login-card">
        <div class="login-card-body">
          <div class="title"><h2>账号登录</h2></div>
          <el-tabs v-model="activeName" stretch>
            <el-tab-pane label="账号登录" name="account"></el-tab-pane>
            <el-tab-pane label="手机短信登录" name="phone"></el-tab-pane>
            <el-tab-pane label="微信登录" name="wechat"></el-tab-pane>
          </el-tabs>
          <login-with-account-form v-show="activeName==='account'" :login-form="loginForm" :login-rules="loginRules"
                                   :auto-login="autoLogin"/>
          <login-with-phone v-show="activeName==='phone'" :login-phone-form="loginPhoneForm"
                            :login-phone-rules="loginPhoneRules" :auto-login="autoLogin"/>
          <login-with-we-chat v-if="activeName==='wechat'" :auto-login="autoLogin"/>
          <div v-show="activeName!=='wechat'" class="commit-button">
            <el-button type="primary" @click="login">登录</el-button>
            <div class="to-register">还没有账号？<span @click="toRegister">去注册</span></div>
          </div>
        </div>
        <!--    <div class="switch-button"><img src="@/assets/img/login/switch-qrcode.png" alt></div>-->
        <div v-if="activeName==='wechat'" class="switch-button-wechat">
          <div @click="activeName= activeName==='wechat'?'account':'wechat'" class="switch-img"></div>
        </div>
        <div v-else class="switch-button-account">
          <div @click="activeName= activeName==='wechat'?'account':'wechat'" class="switch-img"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mixin} from "@/mixins";
import LoginWithAccountForm from "@/pages/login/form/LoginWithAccountForm";
import LoginWithPhone from "@/pages/login/form/LoginWithPhone";
import LoginWithWeChat from "@/pages/login/form/LoginWithWeChat";
import axios from "axios";
import {login} from "@/api/loginApi";

export default {
  name: "Login",
  components: {LoginWithWeChat, LoginWithPhone, LoginWithAccountForm},
  mixins: [mixin],
  data() {
    return {
      activeName: 'account',
      autoLogin: 'false',
      loginForm: {
        account: '',
        password: '',
      },
      loginRules: {
        account: [
          {required: true, message: ' ', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '密码安全强度不足', trigger: 'blur'},
        ],
      },
      loginPhoneForm: {
        phone: '',
        verificationCode: '',
      },
      loginPhoneRules: {
        phone: [
          {required: true, message: '请输入手机号', trigger: 'blur'},
          {min: 11, max: 11, message: '长度为11位数字', trigger: 'blur'}
        ],
      },
    };
  },
  methods: {
    login() {
      const loginUser = {
        account: this.loginForm.account,
        password: this.loginForm.password
      }
      if (loginUser.account === "" || loginUser.password === "") return;
      login(loginUser)
          .then(res => {
            if (res.status === 200) {
              localStorage.setItem('ktp_token', res.data)
              this.$message({
                message: res.message,
                type: 'success',
              });
              setTimeout(() => {
                this.toAnother('main');
              }, 1000);
            } else {
              this.$message({
                message: res.message,
                type: 'warning'
              })
            }
          }).catch(alert);
    }
  }
}
</script>

<style scoped>
.login {
  padding-top: 20px;
  min-height: calc(100vh);
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.left {
  margin-right: -110px;
}

.left img {
  height: 600px;
}

.login-card {
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0 0 61px 0 rgb(85 108 144 / 7%);
}

.login-card-body {
  width: 470px;
  padding: 0 38px;
}

.login-card .title {
  padding: 18px;
}

.login-card .title h2 {
  font-size: 26px;
  font-weight: 600;
}

.login-card p {
  font-size: 18px;
  font-weight: 700;
  text-align: start;
}

.commit-button {
  margin-top: 15px;
  padding-bottom: 13px;
}

.to-register {
  margin-top: 25px;
  font-size: 15px;
  text-align: right;
}

.to-register span {
  color: #4285f4;
  cursor: pointer;
}

.switch-button-account, .switch-button-wechat {
  height: 70px;
  width: 100%;
  text-align: start;

}

.switch-img {
  height: 70px;
  width: 70px;
  cursor: pointer;
  transform: rotateY(180deg);
  background: url('@/assets/img/login/switch-qrcode.png') no-repeat 0 0;
  background-size: 70px;
}

.switch-button-wechat .switch-img {
  background-position: 0 -140px;
}

.el-tabs {
  margin-bottom: 14px;
}

/deep/ .el-tabs__nav-wrap::after {
  position: static !important;
}

/deep/ .el-tabs__active-bar {
  transition: 0s;
  margin-left: 15px;
  width: 76px !important;
}

/deep/ .el-tabs__nav {
  /*width: 100%;*/
  transition: 0s;
  /*display: flex;*/
  /*justify-content: space-between;*/
}

/deep/ .el-tabs__item {
  padding-bottom: 9px;
  width: 76px;
  font-size: 19px;
  line-height: 35px;
  color: #74787c
}

.el-button {
  width: 100%;
  height: 52px;
  padding: 8px 24px;
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
</style>