<template src="./MemberPublishNew.html"></template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import mainMenu from "@/components/MainMenu.vue";
import SearchBar from "@/components/SearchBar.vue";
import BasicInf from "@/components/BasicInf.vue";

export default {
  name: "MemberPublishNew",
  components: {
    Header,
    Footer,
    mainMenu,
    SearchBar,
    BasicInf,
  },

  data() {
    return {
      dialogVisible: false,
      value: "",
      options1: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],

      options2: [
        {
          value: "选项1",
          label: "黄金糕2",
        },
        {
          value: "选项2",
          label: "双皮奶2",
        },
        {
          value: "选项3",
          label: "蚵仔煎2",
        },
        {
          value: "选项4",
          label: "龙须面2",
        },
        {
          value: "选项5",
          label: "北京烤鸭2",
        },
      ],

      options3: [
        {
          value: "选项1",
          label: "黄金糕3",
        },
        {
          value: "选项2",
          label: "双皮奶3",
        },
        {
          value: "选项3",
          label: "蚵仔煎3",
        },
        {
          value: "选项4",
          label: "龙须面3",
        },
        {
          value: "选项5",
          label: "北京烤鸭3",
        },
      ],
      activeNames: ["1"],
      result_1: "",
      result_2: "",
      result_3: "",
      result_4: "",
      result_5: "",
      radio_1: " ",
      radio_2: " ",
    };
  },
};
</script>

<style lang="scss" src="./MemberPublishNew.scss" scoped></style>

<style lang="scss">
.el-radio {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.el-radio__label {
  padding-left: 5px;
}

.el-collapse {
  border-top: 0;
}
.el-collapse-item__header {
  padding-left: 10px;
  line-height: 24px;
  height: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.el-collapse-item__content {
  padding-bottom: 0;
}

.el-button--primary.is-plain {
  background-color: #cccccc;
  border-color: transparent;
  color: #fff;
}

.el-collapse-item:nth-child(3) .el-collapse-item__wrap {
  border-bottom: 1px solid #ccc;
}

.el-collapse-item:nth-child(3) .el-collapse-item__header {
  border-bottom: 1px solid #ccc;
}

.el-collapse-item:nth-child(3) .el-collapse-item__header.is-active {
  border-bottom-color: transparent;
}
.articleLan {
  .el-button-group {
    display: flex;
  }
  .butBorder {
    width: 42px;
    height: 42px;
    border-radius: 5px;
    box-shadow: 0 0 5px #0000009e;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
  button {
    width: 38px;
    height: 38px;
    font-size: 18px;
    padding: 0;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    background-color: #cccccc;
    border-color: transparent;
  }
  .el-button--primary.is-plain:focus,
  .el-button--primary.is-plain:hover {
    background-color: #7dd4e2;
    border: none;
  }
}

.el-dialog {
  min-width: 300px;
}
.el-dialog__header {
  border-bottom: 1px solid #ccc;
  padding: 15px;
}
.el-dialog__headerbtn {
  top: 15px;
  width: auto;
}

.el-button--primary {
  background-color: #09661f;
  border-color: #09661f;
}

.el-select {
  display: block;
  margin-bottom: 10px;
}

.el-popper[x-placement^="bottom"] {
  margin-top: 0;
}

.el-popper[x-placement^="bottom"] .popper__arrow {
  display: none;
}

.el-dialog__body {
  padding-bottom: 10px;
}

.dialog-footer .el-button {
  width: calc(50% - 7.5px);
}

.pointInput {
  width: 55px;
  display: flex;
  align-items: center;
  margin-right: 5px;

  .el-input__inner {
    padding: 5px;
    height: 30px;
  }
}
.el-radio-button__orig-radio:checked + .el-radio-button__inner {
  background-color: transparent;
  box-shadow: inset 0 0 8px 5px rgba(0, 0, 0, 0.2) !important;
  color: #5a5a5a;
  border-color: #c9c9c9;
}

.el-radio-button__inner {
  padding-left: 12px;
  padding-right: 12px;
  min-width: 2em;
}

.el-tabs__nav {
  display: flex;
  width: 100%;
}

.el-tabs--bottom .el-tabs--left > .el-tabs__header .el-tabs__item:nth-child(2),
.el-tabs--bottom .el-tabs--right > .el-tabs__header .el-tabs__item:nth-child(2),
.el-tabs--bottom.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:nth-child(2),
.el-tabs--bottom.el-tabs--card > .el-tabs__header .el-tabs__item:nth-child(2),
.el-tabs--top .el-tabs--left > .el-tabs__header .el-tabs__item:nth-child(2),
.el-tabs--top .el-tabs--right > .el-tabs__header .el-tabs__item:nth-child(2),
.el-tabs--top.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:nth-child(2),
.el-tabs--top.el-tabs--card > .el-tabs__header .el-tabs__item:nth-child(2) {
  padding: 0;
}

.el-tabs--bottom .el-tabs--left > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--bottom .el-tabs--right > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--bottom.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:last-child,
.el-tabs--bottom.el-tabs--card > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--top .el-tabs--left > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--top .el-tabs--right > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--top.el-tabs--border-card > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--top.el-tabs--card > .el-tabs__header .el-tabs__item:last-child {
  padding: 0;
}

.el-tabs--border-card > .el-tabs__header .el-tabs__item {
  margin-top: 0;
}
.el-tabs__item {
  display: flex;
  align-items: center;
  border-right: 1px solid #dcdfe6;
  flex: 1;
  text-align: center;
  justify-content: center;
  padding: 0;
  margin: 0;

  > span {
    width: 100%;
    height: 100%;

    label {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
    }
  }
}

.el-tabs--border-card > .el-tabs__header .el-tabs__item + .el-tabs__item {
  // margin-left: 0;
  // border-right: 1px solid #dcdfe6;
  border-left: 1px solid #dcdfe6;
}

// .el-tabs--border-card > .el-tabs__header .el-tabs__item:last-child{
//   border: none;

// }

.el-radio__input.is-checked .el-radio__inner {
  border-color: #09661f;
  background: #09661f;
}

.el-radio__input.is-checked + .el-radio__label {
  color: #09661f;
  font-weight: 900;
}
.el-tabs--border-card > .el-tabs__header {
  background: #fff;
}

.el-tabs--border-card {
  box-shadow: none;
}
</style>
