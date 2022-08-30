<template>
  <div class="content-list">
    <div class="title">
      <div class="ring-img">
        <img src="@/assets/img/homepage/ring.png" alt>
      </div>
      <h2>{{ contentDetail.title }}</h2>
    </div>
    <div class="detail">
      {{ contentDetail.detail }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MechanismContentList",
  props: ['contentDetail'],
}
</script>

<style scoped>
.content-list .title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.content-list .title h2 {
  color: #1f2023;
  font-weight: 600;
  font-size: 26px;
  line-height:40px;
  margin-left: 16px;
}
.ring-img {
  width: 22px;
  height: 22px;
}
.ring-img img {
  width: 22px;
  height: 22px;
}
.content-list .detail {
  margin-top: 9px;
  padding-left: 38px;
  font-size: 20px;
  color: #74787c;
  line-height: 35px;
}

</style>