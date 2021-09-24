<template src="./Article.html"></template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import mainMenu from "@/components/MainMenu.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "Article",
  components: {
    Header,
    Footer,
    mainMenu,
    SearchBar,
  },

  data() {
    return {
      banner: [
        {
          id: 1,
          type: "欧联杯",
          status: "未開賽",
          time: "明天 03:00",
          home: "达姆施塔特",
          away: "德黑兰独立",
          homePic: require("../assets/07.png"),
          awayPic: require("../assets/15.jpg"),
          title: "【探长甄选福利↑】​中超19:30北京国安-河北队王牌归来！",
          autherPic: require("../assets/20191226094626.jpg"),
          name: "5亿探长",
          postTime: "2021/05/03 13:12:22",
        },
        {
          id: 2,
          type: "聯賽2",
          status: "未開賽",
          time: "明天 10:00",
          home: "施特",
          away: "德黑兰独立",
          homePic: require("../assets/15.jpg"),
          awayPic: require("../assets/16.jpg"),
          title: "【探长甄选福利↑】​中超19:30北京国安-河北队王牌归来！",
          autherPic: require("../assets/3372795_20210323110130.jpg"),
          name: "5亿探长",
          postTime: "2021/05/03 13:12:22",
        },
        {
          id: 3,
          type: "聯賽3",
          status: "未開賽",
          time: "明天 14:00",
          home: "菲尔特",
          away: "赫尔蒙德",
          homePic: require("../assets/15.jpg"),
          awayPic: require("../assets/16.jpg"),
          title: "【探长甄选福利↑】​中超19:30北京国安-河北队王牌归来！",
          autherPic: require("../assets/2155966_20170718115016.jpg"),
          name: "5亿探长",
          postTime: "2021/05/03 13:12:22",
        },
      ],
    };
  },
};
</script>

<style lang="scss" src="./Article.scss" scoped></style>
<style lang="scss">
.ArticleWrap {
  .el-carousel {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .el-carousel__indicators--outside {
    position: absolute !important;
    width: 100% !important;
    left: 0 !important;
    bottom: 0 !important;
    button {
      opacity: 0.7;
      background-color: #fff;
    }
  }

  .el-carousel__button {
    padding: 0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #fff;
    margin: 0px;
  }
}
</style>
