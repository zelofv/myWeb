<template>
  <div class="home-page">
    <HomePageCarousel/>
    <BlendCardList/>
    <IntelligentTeachingPlatform/>
    <Mechanism/>
    <MediaReport/>
    <Welcome/>
  </div>
</template>

<script>
import HomePageCarousel from "@/pages/indexpage/homepage/HomePageCarousel";
import BlendCardList from "@/pages/indexpage/homepage/BlendCardList";
import IntelligentTeachingPlatform from "@/pages/indexpage/homepage/IntelligentTeachingPlatform";
import Mechanism from "@/pages/indexpage/homepage/Mechanism";
import MediaReport from "@/pages/indexpage/homepage/MediaReport";
import Welcome from "@/pages/indexpage/homepage/Welcome";
export default {
  name: "HomePage",
  components: {Welcome, MediaReport, Mechanism, IntelligentTeachingPlatform, BlendCardList, HomePageCarousel}
}
</script>

<style scoped>

</style>