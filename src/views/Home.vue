<template src="./Home.html"></template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import mainMenu from "@/components/MainMenu.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    mainMenu,
  },

  data() {
    return {
      systemMsg: [
        {
          id: 1,
          type: "欧联杯",
          status: "未開賽",
          time: "明天 03:00",
          home: "达姆施塔特",
          away: "德黑兰独立",
          homePic: require("../assets/07.png"),
          awayPic: require("../assets/15.jpg"),
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
        },
      ],
    };
  },
};
</script>

<style lang="scss" src="./Home.scss" scoped></style>
<style lang="scss">
.HomeWrap {
  .el-carousel__item {
    display: flex;
    justify-content: center;
    flex-flow: column;
    height: 100%;
  }

  .el-carousel--horizontal {
    height: 100%;
  }

  .el-carousel__arrow {
    background: none;
    font-size: 2em;
  }

  .el-carousel__arrow--left {
    left: 1%;
  }

  .el-carousel__arrow--right {
    right: 1%;
  }

  .el-carousel__indicators--outside {
    position: absolute !important;
    left: 0 !important;
    bottom: 0% !important;
    width: 100% !important;
    button {
      opacity: 0.7;
      background-color: #fff;
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
}
</style>
