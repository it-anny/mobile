<template src="./ArticlePage.html"></template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import mainMenu from "@/components/MainMenu.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "ArticlePage",
  components: {
    Header,
    Footer,
    mainMenu,
    SearchBar,
  },

  data() {
    return {
      show:false
    };
  },
  methods: {
    openSubOption() {
      this.show = !this.show;
    },
    btnIn() {
      this.fadeIn(".hide", 100); //第二個引數是設定speed,預設為30，可自由修改
      this.lockOnHide();
    },

    fadeIn(element, s) {
      let speed = s || 30;
      let num = 0;
      let con = document.querySelectorAll(element);

      con[0].style.display = "inline-block";
      con[1].style.display = "inline-block";
      con[2].style.display = "inline-block";
      con[3].style.display = "flex";
      var st = setInterval(function () {
        num++;
        con[0].style.opacity = num / 10;
        con[1].style.opacity = num / 10;
        con[2].style.opacity = num / 10;
        con[3].style.opacity = num / 10;
        if (num >= 10) {
          clearInterval(st);
        }
      }, speed);
    },

    lockOnHide() {
      var lockOnWrap = document.querySelector(".lockOnWrap");
      var lockOnWrapHeight = lockOnWrap.offsetHeight;
      var lockOnWrapHeightAct = lockOnWrapHeight;

      var lockOnHideSt = setInterval(function () {
        lockOnWrapHeightAct--;
        lockOnWrap.style.height = lockOnWrapHeightAct + "px";
        console.log(lockOnWrapHeightAct);

        if (lockOnWrapHeightAct == 0) {
          clearInterval(lockOnHideSt);
        }
      }, 5);
    },
  },
};
</script>

<style lang="scss" src="./ArticlePage.scss" scoped></style>
