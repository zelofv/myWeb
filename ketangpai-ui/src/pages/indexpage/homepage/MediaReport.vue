<template>
  <div class="media-report">
    <div class="media-report-header">
      <h1>媒体报道</h1>
    </div>
    <!--    <MediaReportCard :imgSrc="mediaCards[0].imgSrc" :title="mediaCards[0].title" :content="mediaCards[0].content" :detailUrl="mediaCards[0].detailUrl"/>-->
    <el-carousel :interval="4000" type="card" height="400px" @change="getVC">
      <el-carousel-item v-for="(mediaCard, index) in mediaCards" :key="index">
        <MediaReportCard :mediaCard="mediaCard"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import MediaReportCard from "@/components/homepage/MediaReportCard";

export default {
  name: "MediaReport",
  components: {MediaReportCard},
  data() {
    return {
      mediaCards: [
        {
          imgSrc: require('@/assets/img/homepage/carousel/1.png'),
          title: '助力智慧课堂：课堂派成为腾讯微校生态战略伙伴',
          content: '7月18日，腾讯微校发布会在北京船山书院如期举行，正式推出以微信校园卡、腾讯校园码为核心的数字校园解决方案——腾讯微校2.0。本次发布会突破传统Q&A的传统模式，现场模拟校园场景，利用“一款非常好用的应用”课堂派进行了现场互动。作为腾讯微校的生态战略伙伴，互动教学品牌课堂派展现了科技时代，智慧课堂所带来的创新和变化。',
          detailUrl: "https://new.qq.com/ch/edu/",
          class: 'media-report-card'
        },
        {
          imgSrc: require('@/assets/img/homepage/carousel/2.png'),
          title: '课堂派亮相2018中国“互联网+”数字经济峰会',
          content: '4月12日下午教育分论坛，北京大学软件与微电子学院林院长分享了智慧课堂的建设经验：教学资源呈现多样化、课堂形式丰富、如何把学生从玩手机的屏幕聚焦到课堂互动环节等方面。林院长表示，课堂派在研发过程中，学院的一线教师主动参与，把很多丰富的实际教学经验融入研发当中，使整个智慧课堂的建设更具实用性和前瞻性。',
          detailUrl: "https://www.sohu.com/a/228148312_429328",
          class: 'media-report-card card'
        },
        {
          imgSrc: require('@/assets/img/homepage/carousel/3.png'),
          title: '新时代新青年 课堂派创始人陈杰宾的创业梦',
          content: '6月26日，中国共产主义青年团第十八次全国代表大会在人民大会堂开幕。共青团委对福建省驻京团工委点赞，CCTV新闻频道进行了同步报道。分享会上，课堂派创始人陈杰宾作为闽籍创业青年代表，向在京青年创业者分享了课堂派的发展模式以及创业历程。',
          detailUrl: "https://new.qq.com/ch/edu/",
          class: 'media-report-card card'
        },
        {
          imgSrc: require('@/assets/img/homepage/carousel/4.png'),
          title: '【新浪新闻】课堂派云管理颠覆高校传统实习模式',
          content: '用课堂派最大的好处就是在学习的过程中，随时跟老师进行沟通和分享，无论从知识和情感层面都需要倾诉，而课堂派不仅提供跟老师同学交流的机会，还能够获得别人的指导和鼓励，让整个学习过程更加轻松。',
          detailUrl: "http://news.sina.com.cn/o/2015-08-19/doc-ifxfxrai2235429.shtml",
          class: 'media-report-card card'
        },
        {
          imgSrc: require('@/assets/img/homepage/carousel/5.png'),
          title: '【华北电力大学】“互联网+”让教育发现每一个学生',
          content: '“课堂上教师要及时了解学生对内容的掌握程度，课下学生也希望教师能对自己的学习困难进行及时的指导。”在以前，这些实现起来比较困难的事情，“课堂派”可以让这一切变得轻而易举。',
          detailUrl: "https://news.ncepu.edu.cn/mthd/76621.htm",
          class: 'media-report-card card'
        },
      ],
    }
  },
  methods: {
    getVC: function (e) {
      for (let i = 0; i < this.mediaCards.length; i++) {
        this.mediaCards[i].class = "media-report-card card";
      }
      this.mediaCards[e].class = "media-report-card";
    }
  }
}
</script>

<style scoped>
.media-report-header {
  padding: 64px 0;
  text-align: center;
}

.media-report-header h1 {
  font-size: 40px;
  font-weight: 500;
  color: #1f2023;
}

/*.el-carousel__item .media-report-card {*/
/*  color: #475669;*/
/*  font-size: 14px;*/
/*  opacity: 0.75;*/
/*  line-height: 200px;*/
/*  margin: 0;*/
/*}*/
</style>