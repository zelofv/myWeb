<template>
  <div class="page">

    <Header/>

<!--    <HomePage/>-->
    <router-view></router-view>

    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/header/HomeHeader";
import HomePage from "@/pages/indexpage/homepage/HomePage";
import Footer from "@/components/footer/Footer";
export default {
  name: "IndexPage",
  components: {Footer, HomePage, Header}
}
</script>

<style scoped>

.page {
  width: 100%;
  /*height: 100%;*/
  min-width: 1350px;
  display: flex;
  flex-direction: column;
}
</style>