<!--生成报告 -->
<template>
  <div id="ReportGeneration">
    <page-header :title="title" @onClickLeft="onClickLeft" style="background:transparent;"></page-header>
    <div class="ReportGeneration_mian">
      <img src="../../assets/image/pdf3.png" alt />
      <p>现场勘验检查工作记录</p>
      <div class="mian_report">
        <van-field label="案件名称" label-width="60" value="请输入用户名" />
        <van-field label="路径" label-width="60" value="请输入用户名" />
        <span>打开文件</span>
        <van-field label="MD5码" label-width="60" value="请输入用户名" />
      </div>
      <div class="preview_btn" @click="gotoPreviewPdf">预览</div>
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
      title: "生成报告"
    };
  },methods:{
    // 返回上一个页面
    onClickLeft(){
      this.$router.push({name:"ReportEditor"})
    },
    // 跳转预览页面
    gotoPreviewPdf(){
      this.$router.push({path:"/PreviewPdf"})

    }
  }
};
</script>

<style scoped>
#ReportGeneration {
  background: linear-gradient(#02c7bc, #0183ff);
  height: 100%;
  overflow: hidden;
}
.ReportGeneration_mian {
  background: url(../../assets/image/Generate.png) no-repeat;
  margin: 72px auto;
  height: 530px;
  width: 330px;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ReportGeneration_mian img {
  width: 118px;
  height: 118px;
  margin: 80px auto 18px;
}
.ReportGeneration_mian p {
  font-size: 20px;
  font-weight: bold;
  background-image: linear-gradient(to right, #02c5be, #0185fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.mian_report {
  width: 260px;
}
.mian_report .van-cell::after {
  border-bottom: none;
}
.preview_btn {
  width: 180px;
  height: 40px;
  text-align: center;
  font-size: 14px;
  line-height: 40px;
  background: linear-gradient(to right, #02c5be, #0185fd);
  font-weight: bold;
  border-radius: 20px;
  margin-top: 26px;
  color: #fff;
}
.mian_report  {
  position: relative;
}
.mian_report span {
  position: absolute;
  z-index: 10;
  bottom: 60px;
  font-size: 12px;
  color: #157efb;
  right: 0;
}
</style>