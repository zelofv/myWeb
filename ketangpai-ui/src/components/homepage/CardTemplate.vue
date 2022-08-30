<template>
  <div class="card-template">
    <div><img :src="cardDetail.imgSrc" alt></div>
    <h2>{{ cardDetail.title }}</h2>
    <p>{{ cardDetail.msg }}</p>
  </div>
</template>

<script>
export default {
  name: "CardTemplate",
  props: ['cardDetail'],
}
</script>

<style scoped>
.card-template {
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
}

.card-template img {
  width: 100%;
}

.card-template div:nth-child(1) {
  width: 64px;
  margin: 0 auto 24px;
}

.card-template h2 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #1f2023;
}

.card-template p {
  font-size: 16px;
  color: #74787c;
  line-height: 26px;
}


</style>