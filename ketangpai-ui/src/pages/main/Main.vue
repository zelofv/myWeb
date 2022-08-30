<template>
  <!--  我的课堂-->
  <div class="main">
    <MainHeader/>
    <div class="class-body">
      <div class="join-button">
        <el-button class="join-class" v-if="identity==='student'" type="primary" @click="joinCourseDialogVisible=true"><i class="el-icon-plus"></i>加入课程
        </el-button>
        <el-dropdown trigger="click" placement="bottom">
          <el-button class="join-class" v-if="identity==='teacher'" type="primary" ><i
              class="el-icon-plus"></i>创建/加入课程
          </el-button>


          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="createCourseDialogVisible=true">创建课程</el-dropdown-item>
            <el-dropdown-item @click.native="joinCourseDialogVisible=true">加入课程</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <TopClass/>
      <div class="class-selection-menu">
        <div class="left">
          <el-tabs v-if="identity==='student'" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="我学的" name="first"></el-tab-pane>
            <el-tab-pane label="我协助的" name="second"></el-tab-pane>
          </el-tabs>
          <el-tabs v-if="identity==='teacher'" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="我教的" name="first"></el-tab-pane>
            <el-tab-pane label="我协助的" name="second"></el-tab-pane>
            <el-tab-pane label="我学的" name="third"></el-tab-pane>
          </el-tabs>
        </div>
        <div class="right">
          <el-button style="height: 42px">归档管理</el-button>
          <el-input placeholder="搜索我学的课程" suffix-icon="el-icon-search" v-model="queryClass" clearable></el-input>
        </div>
      </div>
      <CourseListEveryTerm v-if="activeName==='first'"/>
      <IAssisted v-else/>
    </div>
    <RightMenu/>
    <el-dialog
        title="加入课程"
        v-el-drag-dialog
        :visible.sync="joinCourseDialogVisible"
        width="50%"
        :before-close="handleClose">
      <el-form :rules="rules">
        <el-form-item label="加课码" label-width="80px" prop="code">
          <el-input placeholder="请输入课程加课码" v-model="joinClassCode" clearable></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="joinCourseDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="joinCourseDialogVisible = false">确 认</el-button>
      </span>
    </el-dialog>
    <el-dialog class="create"
               title="创建课程"
               v-el-drag-dialog
               :visible.sync="createCourseDialogVisible"
               width="60%"
               :before-close="handleClose">
      <el-form :rules="rules">
        <el-form-item label="课程名称" label-width="80px" prop="code">
          <el-input v-model="joinClassCode" maxlength="50" clearable></el-input>
        </el-form-item>
        <el-form-item label="教学班级" label-width="80px" prop="code">
          <el-input v-model="joinClassCode" maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="选择学年 - 学期" label-width="120px" prop="code">
          <el-col>
            <el-select v-model="selectTerm" placeholder="请选择学年">
              <el-option label="2021-2022" value="1"></el-option>
              <el-option label="2022-2023" value="2"></el-option>
              <el-option label="2023-2024" value="3"></el-option>
              <el-option label="2019-2020" value="4"></el-option>
              <el-option label="2020-2021" value="5"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <el-select v-model="selectTerm" placeholder="请选择学期">
              <el-option label="全年" value="1"></el-option>
              <el-option label="第一学期" value="2"></el-option>
              <el-option label="第二学期" value="3"></el-option>
            </el-select>
          </el-col>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="joinCourseDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="joinCourseDialogVisible = false">确 认</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import MainHeader from "@/pages/main/MainHeader";
import TopClass from "@/pages/main/TopClass";
import RightMenu from "@/pages/main/RightMenu";
import CourseListEveryTerm from "@/components/main/CourseListEveryTerm";
import IAssisted from "@/pages/main/IAssisted";

export default {
  name: "Main",
  components: {IAssisted, CourseListEveryTerm, RightMenu, TopClass, MainHeader},
  data() {
    return {
      queryClass: '',
      activeName: 'first',
      identity: 'student',
      createCourseDialogVisible: false,
      joinCourseDialogVisible: false,
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  /*height: 100%;*/
}

.class-body {
  width: 1250px;
  margin: 0 auto;
  overflow: hidden;
}

.class-selection-menu {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}

.class-selection-menu .right {
  display: flex;
  width: 30%;
  justify-content: space-between;
}

/deep/.right .el-input {
  margin-left: 25px;
}

/deep/.right .el-input__inner {
  border-radius: 51px;
}


/deep/ .el-tabs__item {
  font-size: 18px;
  color: #3c4043
}

.join-button {
  width: 100%;
  transform: translate(-30px,20px);
  display: flex;
  justify-content: end;
}

/deep/ .join-class.el-button--primary {
  background-color: #4285f4;
  border-color: #4285f4;
}


/deep/ .el-dialog {
  border-radius: 10px;
  margin-top: 33vh !important;
}

/deep/ .create .el-dialog {
  border-radius: 10px;
  margin-top: 15vh !important;
}

/deep/ .el-dialog__title {
  font-size: 18px;
  color: #3c4043;
  font-weight: 700;
}

/deep/ .el-dialog__body {
  padding: 20px 15px 15px 15px;
  border-top: 1px solid #dadce0;
  border-bottom: 1px solid #dadce0;
}

/deep/ .el-dialog__body .el-input__inner {

}

/deep/.el-form-item__content {
  display: flex;
  justify-content: space-around;
}
</style>