<template>
  <el-radio-button :label="identityMsg.EName" name="identityButton" border>
    <div class="identity-card">
      <img :src="identityMsg.imgSrc" alt>
      <span class="name">{{ identityMsg.name }}</span>
    </div>
  </el-radio-button>
</template>

<script>
export default {
  name: "IdentityCard",
  props: ['identityMsg'],
}
</script>

<style scoped>
.identity-card {
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  background-color: #ffffffff;
  border-radius: inherit;
}

.identity-card img {
  margin-right: 9px;
  width: 48px;
  height: 48px;
}

.identity-card span {
  font-size: 14px;
  text-align: center;
  color: #3c4043;
  line-height: 24px;
  letter-spacing: 1px;
}

/deep/ .el-radio-button__inner {
  transition: 0s;
  border: 1px solid #0000 !important;
  box-shadow: none !important;
  min-width: 100%;
  height: 100%;
  padding: 0;
}

.el-radio-button {
  height: 100%;
  width: 48%;
  border: 1px solid #fff;
  box-shadow: none !important;
}

/deep/ .el-radio-button__orig-radio:checked+.el-radio-button__inner {
  border: 1px solid #4285f4 !important;
  border-radius: 0 !important;
}
</style>