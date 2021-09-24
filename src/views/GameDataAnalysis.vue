<template src="./GameDataAnalysis.html"></template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import mainMenu from "@/components/MainMenu.vue";
import SearchBar from "@/components/SearchBar.vue";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper.scss";
// import 'swiper/swiper-bundle.css'
import "swiper/components/pagination/pagination.min.css";
// import SwiperCore, { Pagination } from "swiper/core";
// install Swiper modules
// SwiperCore.use([Pagination]);
export default {
  name: "GameDataAnalysis",
  components: {
    Header,
    Footer,
    mainMenu,
    SearchBar,
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperList: [
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
      ],
      swiperOption: {
        autoplay: {
          disableOnInteraction: false, // 使用者操作swiper之後，是否禁止autoplay
          delay: 3000, // 自動切換的時間間隔（單位ms）
        },
        initialSlide: 0,
        // loop: true,
        pagination: { el: ".swiper-pagination" }, // 分頁按鈕
        paginationClickable: true,
        // onSlideChangeEnd: (swiper) => {
        //   //console.log('onSlideChangeEnd', swiper.realIndex)
        // },
        freeMode: true,
        freeModeMomentum: true,
        slidesPerView: "auto",
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" src="./GameDataAnalysis.scss" scoped></style>

<style lang="scss">
.GameDataAnalysisCon {
  .switchTeam span {
    display: block;
  }

  .activeWALS {
    border: 1px solid #ccc;
    padding: 0 0.625rem;
    background: #fff;
    background: linear-gradient(180deg, #fff 0, #ccc);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#cccccc",GradientType=0);
  }

  .el-tabs__item {
    padding: 0;
  }

  .el-tabs__item.is-active {
    color: #000000;
  }

  .el-tabs__item.is-active .activeWALS {
    background: #b3b3b3;
    background: linear-gradient(180deg, #b3b3b3 0, #fff);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#b3b3b3",endColorstr="#ffffff",GradientType=0);
  }

  .el-tabs__active-bar {
    background-color: #09661f;
  }

  .el-tabs__header {
    display: flex;
    justify-content: center;
  }
}
</style>
