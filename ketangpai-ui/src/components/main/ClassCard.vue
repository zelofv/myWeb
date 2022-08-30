<template>
  <div class="class-card">
    <span v-if="isMixture" class="mixture-class">混合</span>
    <div @click="toAnother('classDetail')" class="top-card">
      <p>{{ semester }}</p>
      <h3>{{ name }}</h3>
      <p>{{ classAndGrade }}</p>
      <div class="qrcode-content">
        <img src="@/assets/img/main/qrcode.svg" alt>
        <span>课堂码:{{ classCode }}</span>
      </div>
    </div>
    <div @click="toAnother('classDetail')" class="content-card">

    </div>
    <div class="card-bottom">
      <div class="left">
        <span>学</span>
        <span> 负责人:{{ teacher }} </span>
      </div>
      <div class="right">
        <span @click="isTop=!isTop" v-if="!isTop"><img src="@/assets/img/main/top-class.svg" alt>置顶</span>
        <span @click="isTop=!isTop" v-else>取消置顶</span>

        <el-dropdown trigger="click" placement="top">
         <span class="el-dropdown-link">
           <i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退课</el-dropdown-item>
            <el-dropdown-item>归档</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import {mixin} from "@/mixins";

export default {
  name: "ClassCard",
  mixins:[mixin],
  data() {
    return {
      semester: '2021-2022 第二学期',
      name: 'OOP_2022_Spring_1、2班',
      classAndGrade: '1、2班',
      isMixture: true,
      classCode: 'ECTVYT',
      teacher: '刘洁',
      isTop: true,
    };
  },
}
</script>

<style scoped>

.class-card {
  width: 275px;
  height: 240px;
  margin: 11px;
  background: #fff;
  border: 1px solid #e2e6ed;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}
.mixture-class {
  width: 65px;
  height: 30px;
  border-radius: 0 0 0 8px;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
  line-height: 30px;
  font-size: 15px;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(270deg,#fac966 0,#ffe1ad);
  color: #6b512e;
}
.top-card {
  color: white;
  padding: 20px 25px;
  background-color: cornflowerblue;
  height: 65%;
}

.top-card p {
  font-size: 13px;
  line-height: 18px;
}

.top-card p:nth-child(1) {
  opacity: .6;
}

.top-card h3 {
  margin-top: 5px;
  font-size: 21px;
  font-weight: 500;
  line-height: 35px;
  display: -webkit-box; /* 将对象作为弹性伸缩盒子模型显示 */
  overflow: hidden;
  -webkit-line-clamp: 1; /* 限制在一块元素显示的文本的行数 */
  -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
}

.top-card .qrcode-content {
  height: 16px;
  line-height: 16px;
  display: flex;
  margin-top: 20px;
}

.class-card img {
  width: 16px;
  margin-right: 6px;
}

.content-card {
  padding: 0 20px 16px;
  height: 45px;
}

.card-bottom {
  display: flex;
  padding: 8px 14px 12px;
  justify-content: space-between;
  /*line-height: 14px;*/
  font-size: 14px;
  font-weight: 400;
}

.card-bottom .left span:nth-child(1) {
  background-color: #fff;
  border: 1px solid #4285f4;
  color: #4285f4;
  padding: 2px;
  font-size: 13px;
  margin-right: 3px;
}

.card-bottom .right {
  display: flex;
  align-items: center;
}

.card-bottom .right span {
  display: flex;
  height: 16px;
  align-items: center;
  line-height: 16px;
}

.card-bottom .right i {
  width: 16px;
  height: 16px;
  line-height: 16px;
  margin-left: 10px;
  color: #606266;
}

.top-card, .content-card, .card-bottom .left span:nth-child(2), .card-bottom .right span {
  cursor: pointer;
}

.el-dropdown-menu {
  padding: 5px 0;
}

.el-dropdown-menu__item {
  font-size: 16px;
}
</style>