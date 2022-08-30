<template>
  <div class="course-learning">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="互动课件" name="1"></el-tab-pane>
      <el-tab-pane label="作业" name="4">
        <assignment/>
      </el-tab-pane>
      <el-tab-pane label="测试" name="6"></el-tab-pane>
      <el-tab-pane label="资料" name="2,8"></el-tab-pane>
      <el-tab-pane label="腾讯会议" name="22"></el-tab-pane>
      <el-tab-pane label="公告" name="7"></el-tab-pane>
      <el-tab-pane label="话题" name="5"></el-tab-pane>
      <el-tab-pane label="互动答题" name="3"></el-tab-pane>
      <el-tab-pane label="目录" name="0"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Assignment from "@/pages/main/classDetail/couseContent/Assignment";
export default {
  name: "CourseContent",
  components: {Assignment},
  data() {
    return {
      activeName: '1',
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
/deep/ .el-tabs__nav-wrap:after {
  position: static !important;
}

/deep/ .el-tabs__item {
  font-size: 18px;
  font-weight: 500;
}
</style>