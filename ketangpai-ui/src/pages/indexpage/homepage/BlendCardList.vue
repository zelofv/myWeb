<template>
  <div class="blend-list">
    <div class="blend-body">
      <div class="head">
        <h1>混合教学全过程管理</h1>
        <p>课前、课中、课后，线上线下，教学场景全过程管理</p>
      </div>
      <div class="blend-card-list">
        <ul>
          <li v-for="(item,index) in cardDetails" :key="index"><CardTemplate :card-detail="item"/></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CardTemplate from "@/components/homepage/CardTemplate";
export default {
  name: "BlendCardList",
  components: {CardTemplate},
  data() {
    return{
      cardDetails:[
          {imgSrc: require('@/assets/img/homepage/blend/1.png'), title:"作业", msg:"81 种文档格式作业在线展示和批阅，实时查重，精准对比，避免学生抄袭。 自动管理成绩，一键下载作业数据。"},
          {imgSrc: require('@/assets/img/homepage/blend/2.png'), title:"考试/练习", msg:"单选、多选、填空、简答等10余种题型。支持题库随机抽题组卷。支持限时考试、选项随机等防作弊模式。"},
          {imgSrc: require('@/assets/img/homepage/blend/3.png'), title:"课件资料", msg:"课件、资料、话题、公告等教学内容支撑。在线制作方便快捷，提升备课效率。支持课前发布活动，课中互动，课后巩固。"},
          {imgSrc: require('@/assets/img/homepage/blend/4.png'), title:"课中互动", msg:"课件在线讲解、标记疑问 支持发言、开启弹幕、抢答、提问、话题讨论、黑板、画笔标注课堂要点，让课堂更精彩"},
          {imgSrc: require('@/assets/img/homepage/blend/5.png'), title:"考勤签到", msg:"二维码、数字口令、GPS等5种考勤形式， 精准有效、避免代签 签到数据自动生成，一键导出"},
          {imgSrc: require('@/assets/img/homepage/blend/6.png'), title:"成绩管理", msg:"汇总互动数据、平时成绩、期末成绩 个性化配置成绩权重占比数据报表一键导出下载，课留存，可追溯"},
          {imgSrc: require('@/assets/img/homepage/blend/7.png'), title:"教学数据分析", msg:"全方位教学数据信息化，可视化实时监测教学质量，把控教学进度，学业预警分析，提升教学效果"},
          {imgSrc: require('@/assets/img/homepage/blend/8.png'), title:"直播-云录屏", msg:"满足线上线下混合式教学场景 动画及课件同屏+语音实现轻量级直播 不限人员数量，手机电脑均可参与"},
      ],
    }
  }
}
</script>

<style scoped>
.blend-list {
  background: linear-gradient(180deg, #fff, #f4f8ff 42%);
}
.blend-body {
  margin: 0 auto;
  width: 1350px;
  height: 1000px;
  text-align: center;
}
.head {
  text-align: center;
  padding: 64px 0 40px;
}

.head h1 {
  font-size: 40px;
  font-weight: 500;
  color: #1f2023;
}

.head p {
  height: 32px;
  font-size: 20px;
  color: #74787c;
  margin-top: 16px;
}

.blend-card-list ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 85px;
}
.blend-card-list ul li {
  margin-top: 24px;
  padding: 40px 24px;
  height: 350px;
  text-align: center;
  width: 320px;
  background: linear-gradient(180deg,#fff,#f4f8ff 130%);
  border-radius: 8px 8px 0 8px;
}
</style>