<!-- 我的取证 -->
<template>
  <div id="MyEvidence">
    <page-header :isSearch="true" title="我的取证" @onClickLeft="onClickLeft" @search="search"></page-header>
    <div style="margin-top:46px;">
      <Case
        :jump="true"
        :ondoing="true"
        :leftimg="leftimg"
        :time="time"
        :title="title"
        @onClick="gotoEvidenceDetails"
        v-show="ondoing"
      />

      <div class="MyEvidence_history">
        <div v-if="this.noData">
          <img src="../../assets/image/nodata.png" alt style="background-size:100%;" />
          <span style="color:#999;font-size:14px;text-align:center;display:block;">暂无数据</span>
        </div>
        <div class="history" v-show="isHistory">历史记录</div>
        <Case
          :jump="true"
          :leftimg="leftimg"
          v-for="(item,index) in list"
          :time="item.time"
          :title="heigLight(item.title)"
          :key="index"
          :searchKey="searchKey"
          @onClick="gotoEvidenceDetails(index)"
        />
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
      leftimg: require("../../assets/image/MyEvidence.png"),
      isHistory: true,
      time: "123",
      title: "4654",
      list: [],
      ondoing: true,
      noData: false,
      searchKey: "",
      data: [
        {
          time: "123",
          title: "123",
          idx: 1
        },
        {
          time: "12123",
          title: "445566",
          idx: 2
        },
        {
          time: "11231223",
          title: "112233",
          idx: 3
        },
        {
          time: "11231223",
          title: "11463",
          idx: 4
        },
        {
          time: "11231223",
          title: "11893",
          idx: 5
        }
      ]
    };
  },
  created() {
    let data_ = {
      condition: {
        keyCondition: {
          caseName: ""
        },
        querySource: 0
      },
      page: 1,
      pageSize: 20
    };
    post("/api/ci/case/casesList", data_).then(res => {
      console.log(res);
    });
    // 初始化案件列表
    this.search("");
  },
  methods: {
    // 返回首页
    onClickLeft() {
      this.$router.push({ path: "/index" });
    },
    // 跳转详情页面
    gotoEvidenceDetails(idx) {
      this.$router.push({
        name: "EvidenceDetails",
        params: { data: JSON.stringify(this.data[idx]) }
      });
    },
    // 查询数据
    search(val) {
      this.list = [];
      this.isHistory = false;
      this.ondoing = false;
      this.data.map(res => {
        if (val == "") {
          this.ondoing = true;
          this.noData = false;
          this.setlist(this.data);
        } else {
          if (res.title.indexOf(val) !== -1) {
            this.list.push(res);
            this.setlist(this.list);
            this.searchKey = val;
          }
        }
      });
      if (this.list.length == 0) {
        this.noData = true;
      } else {
        this.noData = false;
      }
    },
    //对搜索关键词进行高亮显示
    heigLight(val) {
      const text = val.replace(
        this.searchKey,
        '<span style="color:#0183FF">' + this.searchKey + "</span>"
      );
      return text;
    },
    // 实时渲染页面
    setlist(val) {
      this.list = JSON.parse(JSON.stringify(val));
    }
  }
};
</script>

<style>
#MyEvidence {
  overflow: hidden;
  height: 100%;
  background: #fff;
  margin-top:50px;
}
.MyEvidence_history .history {
  font-size: 13px;
  height: 30px;
  line-height: 30px;
  background: #f5f5f5;
  color: #c2c2c2;
  padding: 0 15px;
}
</style>