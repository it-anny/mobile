<template src="./Header.html"></template>

<script>
import mainMenu from "@/components/MainMenu.vue";
export default {
  name: "Header",

  components: {
    mainMenu,
  },
  data() {
    return {
       show: false,
      open: false,

      scrollNum: 0, //滾動距離
      isTop: false, //是否顯示回到頂部按鈕
    };
  },
  methods: {


    openMenu() {
      this.show = !this.show
      let body = document.querySelector("body");
      // let Main = document.querySelector(".mainMenu");
      let menuBtn = document.querySelector(".menuBtn");

      // console.log(body, Main);
      if (this.open == false) {
        menuBtn.classList.add("open");
        // Main.classList.add("show");
        this.open = true;
        body.style.overflow = "hidden";
        body.style.height = "100vh";
        // Main.style.backdropFilter = "grayscale(50%) blur(5px)";
      } else {
        menuBtn.classList.remove("open");
        // Main.classList.remove("show");
        this.open = false;
        body.style.overflow = "auto";
        body.style.height = "auto";
        // Main.style.backdropFilter = "grayscale(0%) blur(0)";
      }
    },
    goToPage(page) {
      let body = document.querySelector("body");
      // let Main = document.querySelector(".mainMenu");
      // let menuBtn = document.querySelector(".menuBtn");
      // menuBtn.classList.remove("open");
      // Main.classList.remove("show");
      // this.open = false;
      body.style.overflow = "auto";
      body.style.height = "auto";
      // Main.style.backdropFilter = "grayscale(0%) blur(0)";
      this.$router
        .push({
          name: page,
        })
        .catch();
    },

    	goTop() {
      document.documentElement.scrollTop = 0;
    },
    
  },
  mounted() {
        window.addEventListener("scroll", () => {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.scrollNum = top;
      if (top >= 100) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    });

  },
};
</script>

<style lang="scss" src="./Header.scss" scoped></style>
