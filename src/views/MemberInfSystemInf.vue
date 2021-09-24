<template src="./MemberInfSystemInf.html"></template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import mainMenu from "@/components/MainMenu.vue";
import BasicInf from "@/components/BasicInf.vue";

export default {
  name: "MemberInfSystemInf",
  components: {
    Header,
    Footer,
    mainMenu,
    BasicInf,
  },

  data() {
    return {
      msg: [
        {
          id: 1,
          title: "一致性 Consistency",
          con: "在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",
        },
        {
          id: 2,
          title: "反馈 Feedback",
          con: "控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；",
        },
        {
          id: 3,
          title: "效率 Efficiency",
          con: "清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；",
        },
        {
          id: 4,
          title: "可控 Controllability",
          con: "用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；",
        },
        {
          id: 5,
          title: "一致性 Consistency",
          con: "在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",
        },
      ],
    };
  },
};
</script>

<style lang="scss" src="./MemberInfSystemInf.scss" scoped></style>
<style lang="scss">

.el-collapse-item{
    padding: 0 15px;

}
</style>
