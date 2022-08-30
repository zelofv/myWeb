<template>
  <div class="register">
    <div class="left"><img src="@/assets/img/login/bg.png" alt></div>
    <div class="right">
      <div class="register-card">
        <div class="title"><h2>注册账号</h2></div>
        <el-form :model="registerForm" :rules="registerRules" ref="ruleForm">
          <el-form-item prop="emailOrPhone">
            <el-input v-model="registerForm.emailOrPhone" type="text" placeholder="请输入邮箱/手机号" autocomplete="on"
                      clearable></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input v-model="registerForm.password" type="password" placeholder="请输入密码" autocomplete="on"
                      show-password clearable></el-input>
          </el-form-item>

          <el-form-item prop="confirmPassword">
            <el-input v-model="registerForm.confirmPassword" type="password" placeholder="请再次输入密码确认" autocomplete="on"
                      show-password clearable></el-input>
          </el-form-item>

          <el-form-item prop="identity"><p>选择身份</p>
            <el-radio-group v-model="registerForm.identity">
              <div class="identity-card-box">
                <IdentityCard v-for="(identityMsg,index) in identitys" :key="index" :identity-msg="identityMsg"/>
              </div>
            </el-radio-group>
          </el-form-item>

          <el-form-item prop="name">
            <el-input v-model="registerForm.name" type="text" placeholder="请输入姓名" autocomplete="on"
                      clearable></el-input>
          </el-form-item>

          <el-form-item prop="school">
            <el-input v-model="registerForm.school" type="text" placeholder="请输入学校/机构" autocomplete="on"
                      clearable></el-input>
          </el-form-item>

          <el-form-item v-if="registerForm.identity==='student'" prop="studentId">
            <el-input v-model="registerForm.studentId" type="text" placeholder="请输入学号" autocomplete="on"
                      clearable></el-input>
          </el-form-item>

          <el-form-item prop="computedResult">
            <el-input v-model="registerForm.computedResult" type="text" placeholder="请输入计算结果" autocomplete="on"
                      clearable></el-input>
          </el-form-item>

        </el-form>
        <div class="commit-button">
          <el-button type="primary" @click="register">注册</el-button>
          <div class="to-register">已有账号？<span @click="toLogin">去登录</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IdentityCard from "@/pages/register/form/IdentityCard";
import {mixin} from "@/mixins";
import axios from "axios";
import {register} from "@/api/loginApi";

export default {
  name: "Register",
  mixins: [mixin],
  components: {IdentityCard},
  data() {
    return {
      identitys: [
        {
          imgSrc: require('@/assets/img/login/teacher.jpg'),
          EName: 'teacher',
          name: '老师',
        }, {
          imgSrc: require('@/assets/img/login/student.jpg'),
          EName: 'student',
          name: '学生',
        },
      ],
      registerForm: {
        emailOrPhone: '',
        password: '',
        confirmPassword: '',
        identity: 'teacher',
        name: '',
        school: '',
        studentId: '',
        computedResult: '',
      },
      registerRules: {
        emailOrPhone: [
          {required: true, message: '格式不正确', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '密码安全强度不足', trigger: 'blur'},
        ],
        confirmPassword: [
          {required: true, message: '两次密码输入不一致', trigger: 'blur'},
        ],
        name: [
          {required: true, message: '请输入姓名', trigger: 'blur'},
        ],
        school: [
          {required: true, message: '请选择学校', trigger: 'blur'},
        ],
        studentId: [
          {required: true, message: '请输入学号', trigger: 'blur'},
        ],
      },

    };
  },
  methods: {
    register() {
      const user = {
        uid: 'ktp',
        email: '',
        phone: '',
        password: this.registerForm.password,
        name: this.registerForm.name,
        school: this.registerForm.school,
        identity: this.registerForm.identity,
        avatar: 'http://assets.ketangpai.com//Public/Common/img/40/30.png',
        sid: ''
      }
      if (this.registerForm.emailOrPhone==="") return;
      if (user.password === "" || user.name === "" || user.school === "") return;
      if (user.identity === "student" && user.sid === "") return;
      if (this.registerForm.emailOrPhone.includes('@')) {
        user.email = this.registerForm.emailOrPhone;
      } else {
        user.phone = this.registerForm.emailOrPhone;
      }
      if (user.identity === 'student') {
        user.sid = this.registerForm.studentId;
      }
      register(user)
          .then(res => {
            let type = res.status === 200 ? 'success' : 'warning';
            this.$message({
              message: res.message,
              type: type,
            })
            if (res.status === 200) {
              setTimeout(()=> {
                this.$router.replace({
                  name:'login',
                })
              }, 1000)
            }
          })

    }
  }
}
</script>

<style scoped>

.register {
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

.register-card {
  width: 470px;
  padding: 0 38px;
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0 0 61px 0 rgb(85 108 144 / 7%);
}

.register-card .title {
  padding: 18px;
}

.register-card .title h2 {
  font-size: 26px;
  font-weight: 600;
}

.register-card p {
  font-size: 18px;
  font-weight: 700;
  text-align: start;
}

.identity-card-box {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.commit-button {
  margin-top: 13px;
  padding-bottom: 13px;
}

.to-register {
  margin-top: 13px;
  font-size: 15px;
  text-align: right;
}

.to-register span {
  color: #4285f4;
  cursor: pointer;
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

.el-radio-group {
  width: 100%;
}
</style>