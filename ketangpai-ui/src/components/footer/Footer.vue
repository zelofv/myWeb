<template>
  <div class="footer">
    <div class="footer-body">
      <div class="footer-body-left">
        <div class="footer-body-logo"><img src="@/assets/img/logo/logo-white.png" alt="课堂派-logo"></div>
        <ul class="footer-body-content">
          <li v-for="(item,index) in ulMsg" :key="index"><a :id="ulRooter[index]">{{ item }}</a></li>
          <!--        <li><a id="/aboutUs">关于我们</a></li>-->
          <!--        <li><a id="/clauseService">服务条款</a></li>-->
          <!--        <li><a id="/productDynamic">产品动态</a></li>-->
          <!--        <li><a id="/downloadbrowse">浏览器下载</a></li>-->
        </ul>
      </div>
      <div class="footer-body-right">
        <div class="contact-us">
          <p>联系我们</p>
          <p>(工作日09:30～18:30)</p>
          <p><img src="@/assets/img/homepage/phone.png" alt> 010-57748642 </p>
          <p><img src="@/assets/img/homepage/email.png" alt> hi@ketangpai.com </p>
        </div>
        <FootCard v-for="(item,index) in qrCodes" :key="index" :qrcode="item" :msg="qrCodeMsg[index]"/>
        <!--      <FootCard qrcode="src/assets/img/qrcode-1.png" msg="课堂派客服-派派"/>-->
        <!--      <FootCard qrcode="src/assets/img/qrcode-4.png" msg="扫码开启移动教学"/>-->
      </div>
    </div>
    <div class="footer-bottom">
    <span> Copyright © 2014 ketangpai.com All Rights Reserved. <a
        href="https://beian.miit.gov.cn/#/Integrated/recordQuery">京ICP备14023276号-4</a></span>
      <span><a href="https://app.eduyun.cn/mapp/mappCorpDetail?id=003344">教APP备1101923号</a></span>
      <span><a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11011402010566">京公网安备 11011402010566号</a></span>
    </div>
  </div>
</template>

<script>
import FootCard from "@/components/footer/FootCard";

export default {
  name: "Footer",
  components: {
    FootCard
  },
  data() {
    return {
      ulMsg: ['关于我们', '服务条款', '产品动态', '浏览器下载'],
      ulRooter: ['/aboutUs', '/clauseService', '/productDynamic', '/downloadbrowse'],
      qrCodes: [require('@/assets/img/homepage/qrcode-1.png'), require('@/assets/img/homepage/qrcode-2.png')],
      qrCodeMsg: ['课堂派客服-派派', '扫码开启移动教学']
    }
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  min-width: 1350px;
  margin: 0 auto;
}
.footer-body {
  width: 100%;
  height: 236px;
  padding: 0 120px;
  display: flex;
  justify-content: space-between;
  background: #272e38;
}

.footer-body-left {
  padding: 65px 0;
}

.footer-body-logo {
  margin-bottom: 8px;
}

.footer-body-logo img {
  width: 128px;
}

ul {
  display: flex;
  margin-top: 30px;
  color: white;
}

.footer-body-content li {
  margin-right: 64px;
}

.footer-body-content li a {
  cursor: pointer;
}

.footer-body-right {
  display: flex;

}
.contact-us {
  padding: 60px 0;
  margin-right: 20px;
}

.contact-us img {
  width: 20px;
  margin-right: 8px;
}

.contact-us p {
  display: flex;
  font-size: 14px;
  color: #fff;
  font-weight: 500;
}
.contact-us p:nth-child(2) {
  margin: 2px 0 0 5px;
  color: #6D7790;
}
.contact-us p:nth-child(3) {
  margin: 16px 0;
}
.footer-bottom {
  width: 100%;
  height: 48px;
  background: #15191f;
  text-align: center;
}

span {
  margin-right: 85px;
  line-height: 48px;
}

span, span a {
  font-size: 12px;
  color: #647184;
  text-decoration: none;
}
</style>