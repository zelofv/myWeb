<template>
<div>
  <div class="logo" @click="toHomePage"><img src="@/assets/img/logo/logo-blue.png" alt></div>
  <router-view>
  </router-view>
</div>
</template>

<script>
import {mixin} from "@/mixins";

export default {
  name: "LoginAndRegister",
  mixins: [mixin],
}
</script>

<style scoped>
.logo {
  position: absolute;
  top: 52px;
  left: 66px;
  cursor: pointer;
}
.logo img {
  width: 148px;
  height: 37px;
}
</style>