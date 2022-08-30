<template>
  <div class="qrcode">
    <img :src="qrcode" alt>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: "FootCard",
  props:["qrcode", "msg"]
}
</script>

<style scoped>
.qrcode {
  margin-left: 20px;
  padding: 40px 0;
}
.qrcode img{
  width: 120px;
}
.qrcode p {
  margin-top: 16px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  text-align: center;
}

</style>