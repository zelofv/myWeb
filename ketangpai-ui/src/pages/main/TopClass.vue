<template>
  <div class="top-class">
    <div class="top-content">
      <h2>置顶课程</h2>

    </div>

    <ClassCardBox style="max-height: 350px;overflow-y: scroll;"/>

  </div>
</template>

<script>
import ClassCardBox from "@/components/main/ClassCardBox";
import elDragDialog from "@/directive/el-dragDialog";

export default {
  name: "TopClass",
  components: {ClassCardBox},
  directives: {
    elDragDialog,
  },
  data() {
    return {
      identity: 'teacher',
      selectTerm: '',
      createCourseDialogVisible: false,
      joinCourseDialogVisible: false,
      joinClassCode: '',
      rules: {
        code: [
          {required: true, message: '必填项', trigger: 'blur'},
        ],
      },
    };
  },
  methods: {
    handleClose(done) {
      done();
      // this.$confirm('确认关闭？')
      //     .then(_ => {
      //       done();
      //     })
      //     .catch(_ => {
      //     });
    },
  }
}
</script>

<style scoped>
.top-class {
  width: 100%;
  border: 1px solid #dadce0;
  border-radius: 8px;
  padding: 20px;
  margin-top: -40px;
  margin-bottom: -20px;
}

.top-content {
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-content h2 {
  color: #575a5b;
  font-size: 22px;
  font-weight: 500;
}

.top-content i {
  margin-right: 5px;
}


</style>