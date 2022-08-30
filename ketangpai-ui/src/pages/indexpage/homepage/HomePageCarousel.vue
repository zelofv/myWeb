<template>
  <el-carousel height="500px" arrow="never">
    <el-carousel-item v-for="(img, index) in backgroundImgS" :key="index">
      <div class="img-box" :style="{backgroundImage:'url('+img+')'}"></div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>

export default {
  name: "HomePageCarousel",
  data() {
    return {
      backgroundImgS: [require('@/assets/img/homepage/carousel/banner-home.png')],
    }
  },
}
</script>

<style scoped>
.img-box {
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}
</style>