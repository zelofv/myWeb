<template>
  <div class="img-box" :style="{backgroundImage:'url('+imgUrl+')'}"></div>
</template>

<script>
export default {
  name: "ImgBox",
  props: ['imgUrl'],
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