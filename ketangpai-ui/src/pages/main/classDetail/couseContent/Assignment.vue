<template>
  <div class="assignment">
    <span>共0个活动</span>
    <div class="assignment-card">
      <ul class="inner">
        <li>
          <assignment-card/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AssignmentCard from "@/components/main/AssignmentCard";
export default {
  name: "Assignment",
  components: {AssignmentCard}
}
</script>

<style scoped>
.assignment {
  width: 100%;
}

.assignment-card {
  border-radius: 8px;
  padding-top: 16px;
  border: 1px solid #e7ebf0;
}

.inner li {
  padding: 10px 16px 5px 16px;
}
</style>