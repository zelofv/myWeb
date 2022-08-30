<template>
  <div class="header-logo" @click="toHomePage">
    <img src="@/assets/img/logo/logo-blue.png" alt="课堂派-logo">
  </div>
</template>

<script>
import {mixin} from "@/mixins";

export default {
  name: "Logo",
  mixins:[mixin],
}
</script>

<style scoped>
.header-logo {
  height: 75px;
  cursor: pointer;
  margin-right: 48px;
}

.header-logo img {
  width: 135px;
  border: none;
  padding: 17px 0;
}
</style>