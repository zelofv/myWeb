<template>
  <div :class="mediaCard.class">
    <img :src="mediaCard.imgSrc" alt>
    <div class="card-content">
      <h2>{{ mediaCard.title }}</h2>
      <p>{{ mediaCard.content }}</p>
      <el-button>查看详情</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MediaReportCard",
  props: ['mediaCard', 'active'],
}
</script>

<style scoped>
.media-report-card {
  width: 100%;
  height: 100%;
  padding: 8px;
  position: relative;
}

.media-report-card img {
  height: 320px;
  position: absolute;
  left: 38px;
  top: 40px;
  border-radius: 8px;
  z-index: 1;
}

.card-content {
  height: 384px;
  background-color: #fff;
  padding: 30px 30px 30px 300px;
  border-radius: 5px;
  box-shadow: 0 0 10px #e7ebf0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.card-content h2 {
  font-size: 24px;
  font-weight: 600;
}

.card-content p {
  font-size: 14px;
  line-height: 24px;
  color: #74787c;
}

.el-button--default {
  color: white;
  font-size: 16px;
  font-weight: 500;
  max-width: 106px;
  height: 40px;
  line-height: 16px;
  padding: 10px 0;
  background-color: #4285f4;
}

.el-button--default:hover {
  background-color: rgb(104, 157, 246);
}

.card:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #FFFFFF7F;
  z-index: 2;
}

.media-report-card:after {
  content: "";
  width: 8px;
  background: #2178ff;
  border-radius: 0 5px 5px 0;
  position: absolute;
  right: 0;
  top: 40px;
  bottom: 40px;
}
</style>