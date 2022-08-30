<template>
  <div class="home-work">
    <div class="class-navigate">
      <div class="class-navigate-content">
        <Logo style="height: 70px"/>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{name: 'main'}">我的课堂</el-breadcrumb-item>
          <el-breadcrumb-item :to="{name: 'classDetail'}">课程内容</el-breadcrumb-item>
          <el-breadcrumb-item>作业详情</el-breadcrumb-item>
        </el-breadcrumb>
        <header-right/>
      </div>
    </div>
    <div class="body">
      <el-tabs v-model="tabIndex" @tab-click="handleClick">
        <el-tab-pane label="详情" name="detail">
          <div class="home-work-detail">
            <div class="home-work-detail-top">
              <div class="chartLet">
                <span>作业</span>
              </div>
              <h3>{{ '最后一次作业' }}</h3>
              <div class="tags">
                <el-tag size="mini">个人作业</el-tag>
                <el-tag size="mini">提交起止时间： 22/05/26 21:38~22/06/13 00:00</el-tag>
                <el-tag type="info" size="mini">100分</el-tag>
                <el-tag type="info" size="mini">查重</el-tag>
                <el-tag type="info" size="mini">允许超时提交</el-tag>
              </div>
              <div class="homework-description">
                <p>最后了，加油啊！</p>
              </div>
              <div class="download-document">
                <div class="left">
                  <img style="width: 40px" src="@/assets/img/main/docx-img.png" alt>
                </div>
                <div class="right">
                  <h4>{{ '第7次作业.docx' }}</h4>
                  <p class="document-size">{{ '10.59KB' }}</p>
                  <button>下载</button>
                </div>
              </div>
            </div>
            <div class="submit-comment">
              <div class="comment-inner">
                <div class="left">
                  <el-avatar></el-avatar>
                </div>
                <div class="right">
                  <el-input v-model="comment" type="textarea" :autosize="{ minHeight: '35px' }"
                            placeholder="说点什么吧"></el-input>
                </div>
              </div>
              <div class="submit-comment-bottom">
                <el-checkbox v-model="realName">实名发表</el-checkbox>
                <el-upload action=""><i class="el-icon-paperclip"></i>添加附件</el-upload>
                <el-button type="primary">发表评论</el-button>
              </div>
            </div>
            <div class="comment-list">
              <div class="title">
                <h4>全部评论</h4><span>共1条</span>
              </div>
              <div class="comment-list-body">
                <ul>
                  <li>
                    <div class="comment-card">
                      <div class="comment-content">jjj</div>
                      <div>
                        <div class="user-msg">
                          <el-avatar></el-avatar>
                          <h3>匿名用户</h3><span>2022-08-23 20:14</span>

                          <div class="operating-box">
                            <div><i class="el-icon-thumb"></i><span>1</span></div>
                            <div><i class="el-icon-chat-line-square"></i><span>回复</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                </ul>
                <div class="paging">
                  <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="currentPage"
                      :page-sizes="[50, 100, 150, 200]"
                      :page-size="50"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="1">
                  </el-pagination>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="提交作业" name="submit">
          <div class="home-work-submit">
            <div class="card">
              <div class="left">
                <img src="@/assets/img/main/classdetail/homework.png" alt>
                <span>作业</span>
              </div>
              <div class="right">
                <h6>{{ '最后一次作业' }}</h6>
                <div class="tags">
                  <el-tag size="mini">个人作业</el-tag>
                  <el-tag size="mini">提交起止时间： 22/05/26 21:38~22/06/13 00:00</el-tag>
                  <el-tag type="info" size="mini">100分</el-tag>
                  <el-tag type="info" size="mini">查重</el-tag>
                  <el-tag type="info" size="mini">允许超时提交</el-tag>
                </div>
              </div>
              <div class="view-button">
                <i class="el-icon-view"></i>查看谁交了
              </div>
            </div>
            <div v-if="false" class="submit-content">
              <div class="title">
                <h1>提交内容</h1>
                <span><i class="el-icon-timer"></i>提交历史</span>
                <el-button type="primary" plain>查重结果</el-button>
              </div>
              <div class="submit-content-card">
                <div class="top">
                  <div class="top-left">
                    <p>老师评语</p>
                    <div>暂无</div>
                  </div>
                  <div v-if="false" class="top-right">
                    <p>成绩</p>
                    <p><span>91</span> / 100</p>
                  </div>
                  <div class="top-right">
                    <h1>已提交</h1>
                  </div>
                </div>
                <div class="center">
                  <h6>作业附件</h6>
                  <p>1个</p>
                  <ul class="homework-attachment">
                    <li>
                      <div class="homework-card">
                          <div class="left">
                            <div><img style="width: 40px" src="@/assets/img/main/docx-img.png" alt></div>
                            <div>
                              <p>homework7.docx</p>
                              <p>98.39KB</p>
                            </div>
                          </div>
                          <div class="download">
                            下载
                          </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div v-if="true" class="submit-content">
              <div class="title">
                <h1>提交内容</h1>

                <el-button type="primary">确认提交</el-button>
              </div>
              <div class="submit-content-card">
<!--                <div class="top">-->
<!--                  <div class="top-left">-->
<!--                    <p>老师评语</p>-->
<!--                    <div>暂无</div>-->
<!--                  </div>-->
<!--                  <div v-if="false" class="top-right">-->
<!--                    <p>成绩</p>-->
<!--                    <p><span>91</span> / 100</p>-->
<!--                  </div>-->
<!--                  <div class="top-right">-->
<!--                    <h1>已提交</h1>-->
<!--                  </div>-->
<!--                </div>-->
                <div class="center">
                  <h6>作业附件</h6>
<!--                  <p>1个</p>-->
                  <el-upload
                      class="upload-demo"
                      drag
                      action=""
                      multiple>
                    <i class="el-icon-upload2"></i>
                    <div class="el-upload__text">点击上传添加作业文件</div>
                    <div class="el-upload__tip">支持各类文档、图片、代码、压缩包格式</div>
                  </el-upload>
<!--                  <ul class="homework-attachment">-->
<!--                    <li>-->
<!--                      <div class="homework-card">-->
<!--                          <div class="left">-->
<!--                            <div><img style="width: 40px" src="@/assets/img/main/docx-img.png" alt></div>-->
<!--                            <div>-->
<!--                              <p>homework7.docx</p>-->
<!--                              <p>98.39KB</p>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                          <div class="download">-->
<!--                            下载-->
<!--                          </div>-->
<!--                      </div>-->
<!--                    </li>-->
<!--                  </ul>-->
                </div>
                <div class="bottom">
                  <h6>作业留言</h6>
                  <p>选填</p>
                  <el-input type="textarea" placeholder="作业以附件形式提交，留言仅作备注使用哦！"></el-input>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="批阅" name="review"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/header/Logo";
import HeaderRight from "@/components/header/HeaderRight";
import Assignment from "@/pages/main/classDetail/couseContent/Assignment";

export default {
  name: "HomeWork",
  components: {Assignment, HeaderRight, Logo},
  data() {
    return {
      realName: false,
      tabIndex: 'detail',
      comment: '',
      currentPage: 1,
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
  }

}
</script>

<style scoped>
.class-navigate .class-navigate-content {
  z-index: 200;
}

.class-navigate {
  height: 71px;
  width: 100%;
  margin-bottom: 12px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 0 10px #ccc;
}

.class-navigate-content {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 70px;
  line-height: 70px;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 1px 0 0 #dfdfdf;
}

.class-navigate-content i {
  font-size: 20px;
}

/deep/ .el-breadcrumb {
  width: 83%;
}

/deep/ .el-breadcrumb__item .el-breadcrumb__inner {
  font-size: 16px;
  font-weight: 400;
  color: #1f2023;
}

.body {
  width: 1350px;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
}

/deep/ .el-tabs__nav-wrap:after {
  position: static !important;
}

/deep/ .el-tabs__header {
  margin: 0 auto 24px;
}

/deep/ .el-tabs__item {
  margin-top: 3px;
  font-size: 18px;
  font-weight: 500;
}

.home-work-detail {
  width: 100%;
}

.home-work-detail-top {
  width: 100%;
  margin: 10px auto 0;
  position: relative;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 12px 14px;
}

.chartLet {
  position: absolute;
  background: #31ccd2;
  color: #fff;
  font-size: 16px;
  left: -1px;
  top: 0;
  border-radius: 4px 0 4px 0;
  text-align: center;
  padding: 8px;
}

.home-work-detail-top h3 {
  margin-top: 30px;
  font-size: 18px;
}

.tags {
  padding: 10px 0;
}

/deep/ .el-tag {
  font-size: 13px;
  margin-right: 6px;
}

.homework-description p {
  font-size: 18px;
}

.right {
  margin: 0 16px;
}

.download-document {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 18px;
  padding: 10px;
  display: flex;
}

.download-document h4 {
  font-size: 16px;
  font-weight: 500;
}

.download-document p {
  display: inline-block;
  font-size: 12px;
  color: #74787c;
  padding: 10px 0 5px;
}

.download-document button {
  margin-left: 20px;
  font-size: 13px;
  background-color: #fff;
  color: #4285f4;;
  display: inline-block;
}

.submit-comment {
  width: 100%;
}

.submit-comment .comment-inner {
  width: 100%;
  margin-top: 20px;
  display: flex;
  padding: 10px;
  border-bottom: 2px solid #4285f4;
  background: #f8f9fa;
}

.submit-comment .left, .card .left {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.submit-comment .right {
  display: flex;
  align-items: center;
}

/deep/ .submit-comment .right .el-textarea {
  width: 1270px;
}

/deep/ .submit-comment .right .el-textarea .el-textarea__inner {
  width: 100%;
  background-color: #f8f9fa;
  border: none;
}

.submit-comment-bottom {
  margin: 20px 0;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: end;
}

.el-icon-paperclip {
  transform: rotate(135deg);
}

/deep/ .el-checkbox .el-checkbox__label {
  font-size: 16px;
  height: 20px;
  line-height: 20px;
}

.submit-comment-bottom > * {
  margin-left: 20px;
}

.comment-list .title {
  width: 100%;
  display: flex;
}

.comment-list h4 {
  font-size: 22px;
  display: inline;
  line-height: 24px;
}

.comment-list span {
  font-size: 14px;
  color: #74787c;
  margin-left: 5px;
  display: inline;
}

.comment-list-body ul {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 2px;
  padding: 15px 25px;
}

.comment-card {
  margin-bottom: 10px;
}

.comment-content {
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
}

.user-msg {
  position: relative;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.user-msg h3 {
  margin-left: 15px;
}

.operating-box {
  display: flex;
  position: absolute;
  right: 0;
}

.operating-box div {
  margin-left: 20px;
  cursor: pointer;
}

.operating-box div i, .operating-box div span {
  color: #3c4043;
}

.paging {
  margin-top: 20px;
  text-align: center;
}

.card {
  width: 100%;
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
}

.card .view-button {
  color: #4285f4;
  position: absolute;
  top: 0;
  right: 0;
}

.card .view-button i {
  margin-right: 2px;
}

.card .left {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  margin-left: 20px;
}

.card .left img {
  height: 45px;
  max-width: 45px;
  margin-bottom: 12px;
}

.card .left span {
  line-height: 18px;
  color: #3c4043;
  font-size: 15px;
  margin: 5px 0 2px;
}

.card .right h6 {
  font-size: 18px;
  max-width: 500px;
  cursor: pointer;
  color: #212121;
}

.card .cutting-line {
  display: inline-block;
  width: 1px;
  height: 1em;
  margin: 0 8px;
  background-color: #dadce0;
  position: relative;
}

.card .right p {
  padding-top: 8px;
}

.card .right p span {
  font-size: 14px;
  color: #4285f4;
}

.submit-content .title h1 {
  font-size: 22px;
  display: inline;
}

.submit-content .title {
  margin: 10px 0 15px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
}

.submit-content .title span i {
  font-size: 20px;
  margin-right: 3px;
}

.submit-content .title span {
  cursor: pointer;
  color: #4285f4;
  line-height: 20px;
  font-size: 16px;
  margin-left: 10px;
  display: flex;
  align-items: center;
}

.submit-content .title .el-button {
  position: absolute;
  right: 0;
}

.submit-content-card {
  margin-top: 25px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.submit-content-card .top {
  padding: 25px 25px;
  background-color: rgb(248, 249, 250);
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
}

.submit-content-card .top .top-left {
  position: relative;
  width: 70%;
}

.submit-content-card .top .top-right {
  width: 20%;
}

.submit-content-card .top .top-left p {
  margin-bottom: 16px;
  font-size: 18px;
}
.submit-content-card .top .top-left div {
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
}

.submit-content-card .top .top-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.submit-content-card .top .top-right h1 {
  font-size: 26px;
  color: rgb(66, 133, 244);
  margin-top: 30px;
}

.submit-content-card .top .top-right p {
  font-size: 20px;
  height: 36px;
  line-height: 36px;
}

.submit-content-card .top .top-right p:nth-child(2) {
  font-size: 26px;
  color: rgb(95, 99, 104);
}

.submit-content-card .top .top-right p span {
  color: rgb(255, 96, 0);
}

.submit-content-card .center, .submit-content-card .bottom {
  padding: 15px 25px;
  border-radius: 0 0 8px 8px;
}

.submit-content-card .center>h6, .submit-content-card .bottom>h6 {
  display: inline-block;
  margin-bottom: 24px;
  font-size: 18px;
}
.submit-content-card .center>p, .submit-content-card .bottom>p {
  display: inline-block;
  font-size: 13px;
  color: #74787c;
  margin-left: 8px;
}

ul.homework-attachment {
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 5px 0 20px 0;
}

.homework-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.homework-card .left {
  padding: 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}
.homework-card .left div{
  margin: 0 5px;
}
.homework-card .download {
  margin-right: 25px;
}
.homework-card .left p {
  font-size: 13px;
}

ul.homework-attachment li .download {
  font-size: 14px;
  color: #4285f4;
  cursor: pointer;
}
/deep/ .el-upload-dragger {
  width: 1295px;
  padding: 45px;
  background: #f8f9fa;
  height: 200px;
  text-align: center;
  cursor: pointer;
}
.el-upload__text {
  margin-top: 15px;
  margin-bottom: 8px;
  color: #4285f4;
}
.el-upload__tip {
  font-size: 12px;
  color: #74787c;
  margin-left: 8px;
}
.el-icon-upload2 {
  font-size: 64px;
  color: #4285f4;
}

/deep/ .el-upload-dragger:hover {
  border-color: #ccc;
}
/deep/ .submit-content-card .bottom .el-textarea__inner {
  min-height: 100px;
  height: 100px;
}

</style>