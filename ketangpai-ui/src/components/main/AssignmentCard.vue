<template>
  <div class="card">
    <div class="left">
      <img src="@/assets/img/main/classdetail/homework.png" alt>
      <span>作业</span>
    </div>
    <div class="right">
      <h6 @click="()=>{this.$router.push({name: 'homework'})}">作业</h6>
      <div>
                <span>
                  提交截止时间：22/06/13 00:00
                  <div class="cutting-line"></div>
                  <span>已结束</span>
                </span>
        <div class="cutting-line"></div>
        <span>个人作业</span>
      </div>
      <p>
        <span class="finish">已批改 91分</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AssignmentCard"
}
</script>

<style scoped>
.card {
  width: 100%;
  display: flex;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  margin-left: 20px;
}

.left img {
  height: 45px;
  max-width: 45px;
  margin-bottom: 12px;
}

.left span {
  line-height: 18px;
  color: #3c4043;
  font-size: 15px;
  margin: 5px 0 2px;
}
.right h6 {
  font-size: 18px;
  margin-bottom: 15px;
  max-width: 500px;
  cursor: pointer;
  color: #212121;
}

.right div span {
  color: #5f6368;
  font-size: 14px;
}

.cutting-line {
  display: inline-block;
  width: 1px;
  height: 1em;
  margin: 0 8px;
  background-color: #dadce0;
  position: relative;
}

.right p {
  padding-top: 8px;
}

.right p span {
  font-size: 14px;
  color: #4285f4;
}
</style>