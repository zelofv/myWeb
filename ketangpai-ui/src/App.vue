<template>
  <div id="app">
    <!--    <vue-scroll id="scroll" :ops="ops" >-->
    <!--      <IndexPage/>-->
    <router-view></router-view>

    <!--    </vue-scroll>-->
    <div class="back-top">
      <el-backtop class="back-top-button" target="#app">
        <div class="back-top-content"><i class="el-icon-top"></i>
          <span>顶部</span></div>
      </el-backtop>
    </div>
  </div>
</template>

<script>
import IndexPage from "@/pages/indexpage/IndexPage";

export default {
  name: 'App',
  components: {
    IndexPage,
  },
  data() {
    return {
      ops: {
        vuescroll: {
          mode: 'native',
        },
        scrollPanel: {
          scrollingX: false,
          verticalNativeBarPos: 'right'
        },
        rail: {
          keepShow: true,
          background: "#e4e4e4",
          size: '9px',
          opacity: 1,
        },
        bar: {
          hoverStyle: true,
          onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
          keepShow: true,
          background: "#9e9e9e",//滚动条颜色
          opacity: 1,//滚动条透明度
          size: '9px',
          "overflow-x": "hidden",
        }
      }
    }
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

html, body {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  overflow-x: hidden;
}

ul {
  list-style: none;
}

img {
  -webkit-user-drag: none;
}

a, article, aside, body, button, dd, details, div, dl, dt, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, img, input, li, menu, nav, ol, p, section, select, table, tbody, td, textarea, th, tr, ul, video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  font: inherit;
  font-weight: 400;
  vertical-align: baseline;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.back-top-button {
  position: absolute;
  color: rgb(95, 99, 104);
  border-radius: 0;
  transform: translate(16px, -25px);
  display: flex;
}
.back-top-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  padding: 2px;
  font-weight: 400;
}
.back-top-content i{font-size: 20px}

/*滚动条位置*/
/*.__rail-is-vertical {*/
/*  z-index: 100 !important;*/
/*  right: 0 !important;*/
/*  bottom: 0 !important;*/
/*  height: 100% !important;*/
/*}*/

/*.__bar-is-vertical {*/
/*  border-radius: 3px !important;*/
/*}*/

/*!*隐藏横向滚动条*!*/
/*.__rail-is-horizontal {*/
/*  display: none !important;*/
/*}*/

/*滚动条整体部分*/
#app::-webkit-scrollbar, div::-webkit-scrollbar, section::-webkit-scrollbar, textarea::-webkit-scrollbar, ul::-webkit-scrollbar {
  width: 8px;
  height: 100%;
  border-radius: 5px;
  background-color: #b5b1b1;
  position: fixed;
}
/*scroll轨道背景*/
#app::-webkit-scrollbar-track, div::-webkit-scrollbar-track, textarea::-webkit-scrollbar-track, ul::-webkit-scrollbar-track {
  /*-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);*/
  border-radius: 5px;
  background-color: #e4e4e4;

}
/*滚动条中能上下移动的小块*/
#app::-webkit-scrollbar-thumb, div::-webkit-scrollbar-thumb, textarea::-webkit-scrollbar-thumb, ul::-webkit-scrollbar-thumb {
  border-radius: 3px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  background-color: #9e9e9e;
}
</style>
