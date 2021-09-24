<template src="./LogIn.html"></template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import mainMenu from "@/components/MainMenu.vue";

export default {
  name: "LogIn",
  components: {
    Header,
    Footer,
    mainMenu,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" src="./LogIn.scss" scoped></style>
<style lang="scss">
.logInAndSignUp {
  .el-tabs__nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .el-tabs__item {
      flex: 1;
      text-align: center;
    }
  }

  .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active,
  .el-tabs--border-card
    > .el-tabs__header
    .el-tabs__item:not(.is-disabled):hover {
    color: #444444;
  }
  .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active .mamberTit {
    font-size: 18px;
    font-weight: 700;
  }

  .el-tabs__content {
    height: calc(100vh - 138px - 45px - 46px - 40px - 30px);
  }
}
</style>
