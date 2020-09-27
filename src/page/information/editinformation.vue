<!-- 编辑资料 -->
<template>
  <div id="editinformation">
    <page-header
      title="编辑资料"
      righttext="保存"
      lefttext="取消"
      :arrow="false"
      @onClickLeft="onClickLeft"
      @onClickRight="onClickRight"
      style="background:transparent;"
    ></page-header>
    <div class="editformation_message" style="margin-top:46px;">
      <span>姓名</span>
      <input :value="name" style="text-align:right;border:none;" />
    </div>
    <div class="editformation_message" style="border-top:1px solid #d1d1d1;margin-bottom:8px;">
      <span>性别</span>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
    </div>
    <div class="editformation_message">
      <span>警号</span>
      <input :value="policeCode" style="text-align:right;border:none;" />
    </div>
    <div
      class="editformation_message"
      style="border-top:1px solid #d1d1d1;border-bottom:1px solid #d1d1d1;"
    >
      <span>手机号</span>
      <input :value="userTel" style="text-align:right;border:none;" />
    </div>
    <div class="editformation_message">
      <span>单位</span>
      <input :value="deptName" style="text-align:right;border:none;" />
    </div>
  </div>
</template>

<script>
import pageHeader from "../../components/header";
import { put } from "../../assets/js/ajaxResource";
export default {
  components: {
    pageHeader
  },
  data() {
    return {
      name: "",
      policeCode: "",
      userTel: "",
      deptName: "",
      value1: 0,
      option1: [
        { text: "男", value: 0 },
        { text: "女", value: 1 }
      ]
    };
  },
  created() {
    const data = this.$route.params.datalist;
    const _data = {
      isReuse: 1,
      name: data.name,
      deptCode: data.deptCode,
      userType: data.userType,
      roles: [data.roles[0].roleCode],
      userName: data.userName
    };
    this.name = data.name;
    this.policeCode = data.policeCode;
    this.userTel = data.userTel;
    this.deptName = data.deptName;
  },
  methods: {
    // 返回用户信息界面
    onClickLeft() {
      this.$router.push({ name: "Information" });
    },

    onClickRight() {
      put("/api/ras/user/" + data.userCode, _data).then(res => {
        console.log("success");
      });
      this.$router.push({ name: "Information" });
    }
  }
};
</script>

<style scoped>
#editinformation {
  height: 100%;
  background: #f5f5f5;
  background-size: 100%;
  overflow: hidden;
}
#editinformation >>> .van-nav-bar__text {
  color: #000;
}
.editformation_head {
  display: flex;
  margin: 0 15px;
  justify-content: space-between;
  height: 32px;
  padding-top: 40px;
}
.editformation_message {
  background: #fff;
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}
.editformation_message >>> .van-dropdown-menu__bar {
  box-shadow: none;
}
</style>