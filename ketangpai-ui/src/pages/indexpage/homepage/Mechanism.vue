<template>
  <div class="mechanism">
    <div class="body">
      <div class="head">
        <h1>课堂派机构版</h1>
      </div>
      <div class="content">
        <div class="image-plate">
          <img src="@/assets/img/homepage/mecShow.png" alt>
        </div>
        <div class="detail-plate">
          <div class="content-plate">
            <ul>
              <li v-for="(content, index) in contentDetails"><MechanismContentList :content-detail="content"/></li>
            </ul>
          </div>
          <div class="button-plate">
            <el-button plain>了解详细功能</el-button>
            <el-button plain>申请免费试用</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MechanismContentList from "@/pages/indexpage/homepage/MechanismContentList";
export default {
  name: "Mechanism",
  components: {MechanismContentList},
  data() {
    return {
      contentDetails: [
        {title: '精准高效管理教学事务', detail: '一键对接教务系统，精准高效管理师生教学、课程、课务。'},
        {title: '有效提升教学质量', detail: '以课堂教学为核心，以产出为导向；实时监控师生、课程、教学活动等教学过程。'},
        {title: '教学资产管理', detail: '沉淀教学过程资产，促进优质课程、资源、知识图谱建设。'},
        {title: '智慧校园全景定制', detail: '以学生为中心，以教学为导向，提供校园全景智慧教学解决方案。'},
      ],
    }
  },
}
</script>

<style scoped>
.mechanism {
  background: linear-gradient(180deg,#fff,#f4f8ff 42%);
}
.mechanism .body {
  margin: 0 auto;
  width: 1350px;
  height: 890px;
}

.mechanism .body .head {
  padding: 64px 0;
}

.mechanism .body .head h1 {
  font-size: 43px;
  font-weight: 500;
  color: #1f2023;
  text-align: center;
}

.mechanism .body .content {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.image-plate img {
  width: 690px;
}

.detail-plate {
  width: 560px;
}
.content-plate ul li {
  margin-bottom: 25px;
}
.button-plate {
  margin: 68px 0 0 36px;
  width: 375px;
  display: flex;
  justify-content: space-between;
}
.el-button--default {
  width: 175px;
  height: 52px;
  font-size: 18px;
  line-height: 10px;
  padding: 10px 20px;
}

.el-button--default:nth-child(1) {
  border: 1px solid #4285f4;
  color: #4285f4;
}

.el-button--default:nth-child(2) {
  color: #ffffff;
  background: linear-gradient(131deg, #7eb0ff, #2178ff);
  border: none;
}
</style>