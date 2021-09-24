<template src="./MemberInfPr.html"></template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import mainMenu from "@/components/MainMenu.vue";
import BasicInf from "@/components/BasicInf.vue";

export default {
  name: "MemberInfPr",
  components: {
    Header,
    Footer,
    mainMenu,
    BasicInf,
  },

  data() {
    return {};
  },
    methods: {
    open() {
      this.$alert("验证码发送成功。","系統訊息", {
        confirmButtonText: "确定",
      });
    },
  },
};
</script>

<style lang="scss" src="./MemberInfPr.scss" scoped></style>
<style lang="scss">
input[type="text"].perText.phone {
  margin-left: 10px;
  margin-bottom:5px
}

.vue-country-intl {
  font-size: 12px;
  text-align: left;
  margin: 5px 0px 5px 10px;
}

.vue-country-intl .country-intl-input-wrap {
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  width: 225px;
}

.vue-country-intl .country-intl-label {
  height: 28px;

  box-sizing: border-box;
  padding: 5px;
  top: 0;
  line-height: 1em;
}

.vue-country-intl .country-intl-input {
  padding: 0px;
  margin: 5px;
  height: auto;
  width: calc(100% - 10px);
}

.vue-country-item {
  padding: 5px;
  white-space:pre-wrap;
  }

.vue-country-item:not(.selected):hover {
  background-color: #09661f;
}

.vue-country-intl .dropdown-flag {
  background-color: #fff;
  border-left: 1px solid #e8e8e8;
  border-radius: 0;
  width: auto;
}

.vue-country-intl.focused .dropdown-flag {
  border-right: 1px solid #e8e8e8;
  border-left: none;
  border-radius: 0;
}

.memberWrap {
  .changePerWrap {
    .btnWrap {
      display: flex;
      width: 100%;
      margin-top: 30px;
      justify-content: center;
    }
  }
}
</style>
