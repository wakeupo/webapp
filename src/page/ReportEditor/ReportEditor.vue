<!--报告编辑 -->
<template>
  <div id="ReportEditor">
    <pageHeader :title="edit" @onClickLeft="onClickLeft"></pageHeader>
    <div class="ReportEditor_main">
      <div class="main_top"></div>
      <div class="main_middle"></div>
      <div class="main_report">
        <img src="../../assets/image/pdf2.png" alt />
        <h2>现场勘验检查工作记录</h2>
        <div class="editbtn" @click="gotoPdf">编辑</div>
        <div class="previewbtn" @click="previewPdf">预览</div>
      </div>
    </div>
    <div class="sign">
      <span style="margin:20px 0;display:block;font-size:14px;">嫌疑人电子签名 ></span>
      <div class="sign_report">
        <span>生成报告</span>
        <span>报告生成则被固定，不能再修改</span>
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "../../components/header";

export default {
  components: {
    pageHeader
  },
  data() {
    return {
      edit: "报告编辑"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "AdditionalComment" });
    },
    // 编辑报告
    gotoPdf() {
      this.$router.push({ name: "PdfEditReport" });
    },
    // 预览报告
    previewPdf() {
      this.$router.push({ path: "/writeReport" });
    }
  }
};
</script>

<style scoped>
#ReportEditor >>> .van-nav-bar .van-nav-bar__title {
  font-weight: bold;
}
.ReportEditor_main {
  background: linear-gradient(#0585ff, #fff 50%);
  height: 500px;
  margin-top: 46px;
  position: relative;
}
.main_report,
.main_top,
.main_middle {
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.main_report {
  margin: 43px auto 0;
  width: 330px;
  z-index: 2;
  box-shadow: 0 2px 8px #000;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.main_top {
  width: 303px;
  margin: 32px auto 0;
  opacity: 0.6;
}
.main_middle {
  width: 283px;
  margin: 25px auto 0;
  opacity: 0.2;
}
.main_report img {
  width: 80px;
  height: 80px;
  margin-top: 54px;
}
h2 {
  font-size: 18px;
  margin: 33px 0;
}
.editbtn,
.previewbtn {
  width: 150px;
  height: 36px;
  font-size: 13px;
  text-align: center;
  line-height: 36px;
  margin-bottom: 18px;
  border-radius: 6px;
}
.editbtn {
  background: #0183ff;
  color: #fff;
}
.previewbtn {
  background: #cce6ff;
  color: #0183ff;
}
.sign {
  position: absolute;
  height: 140px;
  width: 100%;
  background: #fff;
  bottom: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 -5px 5px #edf6ff;
}
.sign_report {
  background: linear-gradient(to right, #0185ff, #01baff 80%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  color: #fff;
  margin: 0 auto;
  width: 330px;
  height: 50px;
}
.sign_report :nth-child(1) {
  font-size: 15px;
}
.sign_report :nth-child(2) {
  font-size: 9px;
}
</style>