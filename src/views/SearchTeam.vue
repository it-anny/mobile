<template src="./SearchTeam.html"></template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import mainMenu from "@/components/MainMenu.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "SearchTeam",
  components: {
    Header,
    Footer,
    mainMenu,
    SearchBar,
  },

  data() {
    return {
      testData: [
        {
          team: {
            id: 90824,
            name: "北京国安",
            imagepath:
              "https://cds-api-test.soikeo-thethao.com//v1/resources/team/30b507b7-17a7-457b-85ec-0a2c5ef3887e/origin.png",
          },
          article: [
            {
              id: 44,
              title: "【中超】赛事预测：7月16日，北京国安vs河北队",
              created_at: "2021-07-16 16:37:19",
              updated_at: "2021-07-28 15:00:01",
            },
            {
              id: 41,
              title: "【亚冠杯】赛事预测：7月8日，北京国安vs联城FC",
              created_at: "2021-07-08 11:07:32",
              updated_at: "2021-07-09 00:10:01",
            },
            {
              id: 41,
              title: "【亚冠杯】赛事预测：7月8日，北京国安vs联城FC",
              created_at: "2021-07-08 11:07:32",
              updated_at: "2021-07-09 00:10:01",
            },
            {
              id: 41,
              title: "【亚冠杯】赛事预测：7月8日，北京国安vs联城FC",
              created_at: "2021-07-08 11:07:32",
              updated_at: "2021-07-09 00:10:01",
            },
            {
              id: 41,
              title: "【亚冠杯】赛事预测：7月8日，北京国安vs联城FC",
              created_at: "2021-07-08 11:07:32",
              updated_at: "2021-07-09 00:10:01",
            },
            {
              id: 41,
              title: "【亚冠杯】赛事预测：7月8日，北京国安vs联城FC",
              created_at: "2021-07-08 11:07:32",
              updated_at: "2021-07-09 00:10:01",
            },
            {
              id: 41,
              title: "【亚冠杯】赛事预测：7月8日，北京国安vs联城FC",
              created_at: "2021-07-08 11:07:32",
              updated_at: "2021-07-09 00:10:01",
            },
          ],
        },
        {
          team: {
            id: 104523,
            name: "北京国安U19",
            imagepath:
              "https://cds-api-test.soikeo-thethao.com//v1/resources/team/5ad1158f-1133-45eb-975c-2b0791a50192/origin.png",
          },
          article: [
            {
              id: 44,
              title: "【中超】赛事预测：7月16日，北京国安vs河北队",
              created_at: "2021-07-16 16:37:19",
              updated_at: "2021-07-28 15:00:01",
            },
            {
              id: 41,
              title: "【亚冠杯】赛事预测：7月8日，北京国安vs联城FC",
              created_at: "2021-07-08 11:07:32",
              updated_at: "2021-07-09 00:10:01",
            },
            {
              id: 41,
              title: "【亚冠杯】赛事预测：7月8日，北京国安vs联城FC",
              created_at: "2021-07-08 11:07:32",
              updated_at: "2021-07-09 00:10:01",
            },
            {
              id: 41,
              title: "【亚冠杯】赛事预测：7月8日，北京国安vs联城FC",
              created_at: "2021-07-08 11:07:32",
              updated_at: "2021-07-09 00:10:01",
            },
            {
              id: 41,
              title: "【亚冠杯】赛事预测：7月8日，北京国安vs联城FC",
              created_at: "2021-07-08 11:07:32",
              updated_at: "2021-07-09 00:10:01",
            },
            {
              id: 41,
              title: "【亚冠杯】赛事预测：7月8日，北京国安vs联城FC",
              created_at: "2021-07-08 11:07:32",
              updated_at: "2021-07-09 00:10:01",
            },
          ],
        },
        {
          team: {
            id: 104597,
            name: "北京国安后备队",
            imagepath:
              "https://cds-api-test.soikeo-thethao.com//v1/resources/team/f677dcec-d882-498c-b519-e148aac07ef6/origin.png",
          },
          article: [],
        },
      ],
      testDataLength: 5,
    };
  },
  methods: {
    openList(e) {
      console.log(e.currentTarget.previousElementSibling);
      let mylist = e.currentTarget.previousElementSibling;
      var newHeight = mylist.firstElementChild.offsetHeight ;
      mylist.classList.add("sideDown");
      mylist.style.height = newHeight + "px";
      console.log(newHeight)


      // this.testDataLength = this.testData[i].article.length;
      // console.log("00");
      // alert("0");
    },
    test() {
      // alert("0123456");
      console.log("123");
    },
  },
};
</script>

<style lang="scss" src="./SearchTeam.scss" scoped></style>
