<!-- 案件页面 -->
<template>
  <div class="contain">
    <page-header
      :isSearch="true"
      title="案件"
      @search="search"
      @onClickLeft="onClickLeft"
      @onClickRight="onClickRight"
    ></page-header>
    <div style="margin-top:50px;">
      <div v-for="(item,index) in list" :key="index" @click="getCaseDetail(item)">
        <Case
          :leftimg="leftimg"
          :searchKey="searchKey"
          :time="item.createTimeStamp"
          :title="heigLight(item.caseName)"
        ></Case>
      </div>
    </div>
  </div>
</template>
<script>
import pageHeader from "../../components/header";
import Case from "../../components/case";
import { post } from "../../assets/js/ajaxResource";
export default {
  components: {
    pageHeader,
    Case
  },
  data() {
    return {
      leftimg: require("../../assets/image/case.png"),
      time: "2020-09-08",
      title: "4654",
      list: [],
      searchKey: ""
    };
  },
  methods: {
    //获取案件方法
    getCaseList(searchText) {
      let data_ = {
        condition: {
          keyCondition: {
            caseName: searchText ? searchText : ""
          },
          querySource: 0
        },
        page: 1,
        pageSize: 20
      };
      let this_ = this;
      post("/api/ci/case/casesList", data_).then(res => {
        this_.list = res.results;
      });
    },
    //对搜索关键词进行高亮显示
    heigLight(con) {
      const text = con.replace(
        this.searchKey,
        '<span style="color:#0183FF">' + this.searchKey + "</span>"
      );
      return text;
    },
    //点击获取案件部分信息
    getCaseDetail(res) {
      debugger;
      const caseName = res.caseName;
      const caseCode = res.caseCode;
      const recordIdx = res.recordIdx;
      this.$router.push({
        path:'/inputCase',
        query:{
          caseName:caseName,
          caseCode:caseCode,
          recordIdx:recordIdx
        }
      });
    },
    //返回按钮
    onClickLeft() {
      this.$store.state.step = 3; //取证流程的案件取证完成
      this.$router.push({ path: "/inputCase" });
    },
    //搜索事件
    search(text) {
      this.searchKey = text;
      this.getCaseList(text);
    },
    // 搜索框显示
    onClickRight() {}
  },
  mounted: function() {
    this.getCaseList();
  }
};
</script>