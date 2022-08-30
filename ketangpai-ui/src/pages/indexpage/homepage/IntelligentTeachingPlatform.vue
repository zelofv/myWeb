<template>
  <div class="intelligent-teaching-platform">
    <div class="intelligent-teaching-platform-body">
      <div class="head">
        <h1>智慧教育平台</h1>
      </div>
      <div class="platform-card-list">
        <ul>
          <li v-for="(item,index) in cardDetails" :key="index">
            <CardTemplate :card-detail="item"/>
          </li>
        </ul>
      </div>
      <div class="platform-button">
        <el-button plain>了解详细功能</el-button>
        <el-button plain>立即注册体验</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import CardTemplate from "@/components/homepage/CardTemplate";

export default {
  name: "IntelligentTeachingPlatform",
  components: {CardTemplate},
  data() {
    return {
      cardDetails: [
        {imgSrc: require('@/assets/img/homepage/platform/1.png'), title: '线下互动课堂', msg: '多种互动教学工具，沉浸式学习体验，精准化学习。'},
        {imgSrc: require('@/assets/img/homepage/platform/2.png'), title: '混合教学全过程管理', msg: '课前课中课后全过程教学管理，教学数据可视化，可留存，提升教学质量。'},
        {imgSrc: require('@/assets/img/homepage/platform/3.png'), title: '在线直播教室', msg: '在线直播教学搭配教学互动，充分还原真实的教学场景，提升教学效果。'},
        {imgSrc: require('@/assets/img/homepage/platform/4.png'), title: '在线课程建设', msg: '在线直播课、精品慕课资源、课程资源体系搭建，沉淀教学资源。'},
      ],
    }
  }
}
</script>

<style scoped>

.intelligent-teaching-platform-body {
  margin: 0 auto;
  width: 1350px;
  text-align: center;
}

.intelligent-teaching-platform-body .head {
  padding: 80px 0;
}

.intelligent-teaching-platform-body .head h1 {
  font-size: 40px;
  font-weight: 500;
  color: #1f2023;
}

.platform-card-list ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.platform-card-list ul li {
  width: 320px;
  height: 280px;
  padding: 24px 30px 10px;
  text-align: center;
  border-radius: 4px;
  box-shadow: 20px 20px 100px -63px #8297b2;
}
.platform-button {
  margin: 64px auto;
  width: 380px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
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
  background: linear-gradient(131deg,#7eb0ff,#2178ff);
  border: none;
}
</style>