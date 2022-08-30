<template>
  <div class="course-list" :style="listStyle">
    <div class="course-list-title">
      <h2>2021-2022 第二学期</h2>
      <span v-show="showList" @click="unfoldList"><i class="el-icon-caret-top"></i>收起</span>
      <span v-show="!showList" @click="unfoldList"><i class="el-icon-caret-bottom"></i>展开</span>
    </div>
    <ClassCardBox v-if="showList"/>
  </div>
</template>

<script>
import ClassCardBox from "@/components/main/ClassCardBox";

export default {
  name: "CourseListEveryTerm",
  components: {ClassCardBox},
  data() {
    return {
      showList: true,
      listStyle: "",
    }
  },
  methods: {
    unfoldList() {
      console.log(this.showList)
      if (!this.showList) {
        this.listStyle = "height: auto;";
      } else {
        this.listStyle = '';
      }
      this.showList = !this.showList;
    }
  }
}
</script>

<style scoped>
.course-list {
  width: 100%;
  border: 1px solid #dadce0;
  background-color: #f8f9fa;
  margin-bottom: 25px;
  border-radius: 8px;
  padding: 20px;
  transition: .3s ease;
}

.course-list-title {
  /*margin-bottom: 15px;*/
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.course-list-title h2 {
  color: #000;
  font-size: 17px;
  font-weight: 400;
}

.course-list-title span {
  cursor: pointer;
  user-select: none;
  color: #4285f4;
  padding-right: 20px;
}

.course-list-title span:hover {
  color: rgb(104, 157, 246);
}

.course-list-title i {
  margin-right: 5px;
}

</style>