<template src="./SearchBar.html"></template>

<script>
import mainMenu from "@/components/MainMenu.vue";
export default {
  name: "SearchBar",

  components: {
    mainMenu,
  },
  data() {
    return {
       show: false,
      open: false,

        radio: '',

    };
  },
  methods: {

    openScreen() {
        this.show = !this.show
    },
    search(){
        this.$router
            .push({
              name: this.radio,
            })
            .catch();
    }


  },
  mounted() {

  },
};


</script>

<style lang="scss" src="./SearchBar.scss" scoped></style>
<style lang="scss">
.searchScreen {
.el-radio-button__inner {
    color: #fff;
    background: none;
    border: 1px solid #fff;
    width: 100%;
    font-size: 16px;
  }

  .el-radio-button:first-child .el-radio-button__inner {
    border-radius: 0;
  }

  .el-radio-button:last-child .el-radio-button__inner {
    border-radius: 0;
  }

  .el-radio-button__orig-radio:checked + .el-radio-button__inner {
    background-color: #fff;
    color: darkgreen;
    border-color: #fff;
    box-shadow: 1px 1px 5px #000;
  }

  .saarchInput {
    width: calc(100% - 10px);
    border: none;
    margin: 5px 5px 10px 5px;
  }
  .el-button--primary {
    background-color: #09661f;
    border-radius: 4px;
    border: none;
    float: right;
    margin-right: 5px;
    font-size: 16px;
  }
}
</style>
