<template>
  <div class="class-detail">
    <div class="class-navigate">
      <div class="class-navigate-content">
        <i @click="drawer=true" class="el-icon-s-unfold"></i>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{name: 'main'}">我的课堂</el-breadcrumb-item>
          <el-breadcrumb-item>课程内容</el-breadcrumb-item>
        </el-breadcrumb>
        <HeaderRight/>
      </div>
    </div>
    <div class="body">
      <div class="class-header">
        <div class="header-top">
          <div class="top">
            <div class="top-content">
              <h1>OOP_2022_Spring_1、2班</h1>
              <h2>1、2班</h2>
            </div>
            <div class="join-code">
              <img src="@/assets/img/main/qrcode.svg" alt>
              <span>加课码:ECTVYT</span>
              <span>已有94人加入</span>
            </div>
            <el-button disabled round icon="el-icon-video-play">暂无课堂</el-button>
          </div>
          <div class="center">
            <div class="button-group">
              <div v-for="(button,index) in submodule" :key="index" :class="modulename === button.name? 'active':''"
                   @click="isActive(button.name, button.routerName)">{{ button.title }}
              </div>
              <!--            <div :key="2" @click="isActive(key)"></div>-->
              <!--            <div :key="3" @click="isActive(key)"></div>-->
              <!--            <div :key="4" @click="isActive(key)"></div>-->
            </div>
          </div>
        </div>

      </div>
      <div class="class-body">
        <course-content/>
      </div>
    </div>


    <el-drawer
        title=""
        :visible.sync="drawer"
        direction="ltr"
        :before-close="handleClose">
      <div slot="title" style="width: 100%; text-align: center">
        <img src="@/assets/img/logo/logo-blue.png" alt="课堂派-logo" height="24px">
      </div>
      <ul>
        <li>我的课堂</li>
        <!--          <li>备课区</li>-->
        <!--          <li>虚拟教研室</li>-->
      </ul>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="我学的课程" name="1">
          <class-card-in-collapse title="程序设计基础（C）" classes="121230201-02"/>
          <class-card-in-collapse title="OOP_2022_Spring_1、2班" classes="1、2班"/>
        </el-collapse-item>
        <el-collapse-item title="我协助的课程" name="2">
        </el-collapse-item>
      </el-collapse>
    </el-drawer>
  </div>
</template>

<script>
import HeaderRight from "@/components/header/HeaderRight";
import Logo from "@/components/header/Logo";
import ClassCardInCollapse from "@/components/main/ClassCardInCollapse";
import CourseContent from "@/pages/main/classDetail/couseContent/CourseContent";

export default {
  name: "ClassDetail",
  components: {CourseContent, ClassCardInCollapse, Logo, HeaderRight},
  data() {
    return {
      submodule: [
        {name: 'CourseContent', title: '课程学习', routerName: ''},
        {name: 'SingleStudentAnalysis', title: '学情分析', routerName: ''},
        {name: 'Score', title: '成绩管理', routerName: ''},
        {name: 'CourseSetting', title: '课程介绍', routerName: ''},
      ],
      drawer: false,
      activeNames: [''],
      modulename: 'CourseContent',
    }
  },
  methods: {
    isActive(e) {
      console.log(e)
      this.modulename = e;
    },
    handleClose(done) {
      done();
      // this.$confirm('确认关闭？')
      //     .then(_ => {
      //       done();
      //     })
      //     .catch(_ => {});
    },
    handleChange(val) {
      console.log(val);
    }
  }
}
</script>

<style scoped>
.class-navigate .class-navigate-content {
  z-index: 200;
}

.class-navigate {
  height: 71px;
  width: 100%;
  margin-bottom: 12px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 0 10px #ccc;
}

.class-navigate-content {
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

.class-navigate-content i {
  font-size: 20px;
}

/deep/ .el-breadcrumb {
  width: 83%;
}

/deep/ .el-breadcrumb__item .el-breadcrumb__inner {
  font-size: 16px;
  font-weight: 400;
  color: #1f2023;
}

/deep/ .el-drawer__close-btn {
  position: absolute;
  float: left;
}

/deep/ .el-drawer__header {
  padding: 12px !important;
  margin: 0 !important;
}

/deep/ .el-drawer {
  width: 310px !important;
}

.el-drawer__body ul {
  padding-bottom: 10px;
}

.el-drawer__body ul li {
  cursor: pointer;
  padding: 0 12px;
  height: 46px;
  line-height: 46px;
  font-size: 17px;
  font-weight: 500;
  color: #1f2023;
}

.el-drawer__body ul li:hover {
  background-color: rgb(236, 243, 254);
}

.el-collapse {
  border: none;
}

/deep/ .el-collapse-item__header {
  padding: 0 12px;
  font-size: 16px;
  font-weight: 500;
}

/deep/ .el-collapse-item__content {
  padding-bottom: 5px;
}

.body {
  width: 1350px;
  margin: 0 auto;
  overflow: hidden;
}

.class-header {
  width: 100%;
  }

.header-top {
  width: 100%;
  border: 1px solid #dadce0;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 #00000019;
}

.top {
  color: white;
  width: 100%;
  border-radius: 8px 8px 0 0;
  padding: 25px;
  background-color: #6D7790;
  position: relative;
}

.class-header .top .top-content {
  padding-top: 5px;
  margin-bottom: 15px;
  align-items: center;
}

.top-content h1 {
  font-size: 36px;
  line-height: 40px;
}

.top-content h2 {
  margin-top: 5px;
  font-size: 20px;
  line-height: 32px;
  font-weight: 400;
}

.join-code {
  height: 16px;
  line-height: 16px;
  display: flex;
  margin-top: 70px;
}

.join-code img, .join-code span {
  cursor: pointer;
}

.join-code span:nth-child(2) {
  margin-left: 5px;
}

.join-code span:nth-child(3) {
  margin-left: 20px;
}

/deep/ .el-button {
  position: absolute;
  right: 30px;
  bottom: 25px;
  display: flex;
  align-items: center;
}

/deep/ .el-button i {
  font-size: 18px;
}

.center {
  height: 66px;
}

.button-group {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-group div {
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  margin: 0 24px;
  text-align: center;
  font-size: 22px;
  padding: 1px 5px;
}

.button-group div.active {
  background: #e8f0ff;
  color: #4285f4;
  border-radius: 10px;
}
.class-body {
  margin-top: 15px;
}
</style>