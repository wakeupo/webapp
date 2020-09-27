<!--设置页面 -->
<template>
  <div id="setting">
    <page-header
      @onClickLeft="onClickLeft"
      :title="title"
      style="background:#fff;border-bottom:1px solid #d1d1d1;"
    ></page-header>
    <div style="margin-top:8px;">
      <div class="setting_font" @click="gotoLogin">
        <span>服务协议与隐私政策</span>
        <img src="../../../assets/image/return.png" alt />
      </div>
      <div class="setting_font" @click="gotoLogin">
        <span>运行权限检测</span>
        <img src="../../../assets/image/return.png" alt />
      </div>
    </div>
    <div class="setting_font setting_check" @click="gotoLogin">
      <span>检测新版本</span>
      <img src="../../../assets/image/return.png" alt />
    </div>
    <div class="setting_exit" @click="exit">退出</div>
  </div>
</template>

<script>
import pageHeader from "../../../components/header";
export default {
  components: {
    pageHeader
  },
  data() {
    return {
      title: "设置"
    };
  },
  methods: {
    // 退回上一个页面
    onClickLeft() {
      this.$router.push({ name: "Mine" });
    },
    // 退出跳回登录页面
    exit() {
      this.$router.push({ path: "/login" });
    },
    // 隐私协议页面/运行权限检测/检测新版本
    gotoLogin() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style scoped>
#setting {
  background: #f5f5f5;
  height: 100%;
  background-size: 100%;
}
.setting_head img {
  width: 10px;
  height: 17px;
  margin-left: 15px;
}
.setting_head span {
  margin: 0 auto;
  font-size: 16px;
  font-weight: bold;
}
.setting_font img {
  width: 7px;
  height: 12px;
  transform: rotate(180deg);
  margin-right: 15px;
}
.setting_font {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  height: 50px;
  font-size: 15px;
}
.setting_check {
  margin: 9px auto 8px;
}
.setting_font span {
  margin-left: 16px;
}
.setting_exit {
  height: 50px;
  background: #fff;
  line-height: 50px;
  font-size: 14px;
  text-align: center;
}
</style>