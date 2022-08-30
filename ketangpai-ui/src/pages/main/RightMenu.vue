<template>
  <div class="right-menu">
    <ul>
      <li>
        <i class="el-icon-document"></i>
        <span>待办</span>
      </li>
      <li>
        <i class="el-icon-chat-round"></i>
        <span>私信</span>
      </li>
      <li>
        <i class="el-icon-tickets"></i>
        <span>好友</span>
      </li>
      <li>
        <i class="el-icon-headset"></i>
        <span>客服</span>
      </li>
      <li>
        <img src="@/assets/img/main/qrcode.svg" alt>
        <span>公众号</span>
      </li>
      <li>
        <i class="el-icon-edit-outline"></i>
        <span>反馈</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RightMenu"
}
</script>

<style scoped>
.right-menu {
  position: fixed;
  z-index: 2;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border-radius: 8px 0 0 8px;
  box-shadow: 0 0 18px 0 rgb(0 0 0 / 10%);
}

.right-menu ul {
  padding: 10px 0;
}
.right-menu ul li {
  padding: 2px 10px;
  cursor: pointer;
  margin-bottom: 12px;
  color: #ff6000;
  text-align: center;
}

.right-menu ul li img {
  margin: 0 auto;
  display: block;
  background-color: #ff6000;
  width: 30px;
}

.right-menu ul li i {
  display: block;
  font-size: 36px;
}
.right-menu ul li span {
  font-size: 14px;
  line-height: 16px;
}

</style>