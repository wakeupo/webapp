<!-- 用户资料 -->
<template>
  <div id="information">
    <page-header :righttext="righttext" @onClickLeft="onClickLeft" @onClickRight="onClickRight" style="background:transparent;"></page-header>
    <div class="information_middle">
      <div class="information_message">
        <img :src="userPicUrl" alt />
        <div class="message_right">
          <div>
            <span
              style="font-size:17px;margin:0 0 13px 0;display:inline-block;"
            >{{this.datalist.name}}</span>
            <span class="sex">男</span>
          </div>
          <span class="message_bottom">警号：{{this.datalist.policeCode}}</span>
          <span class="message_bottom">手机：{{this.datalist.userTel}}</span>
          <span class="message_bottom">单位：{{this.datalist.deptName}}</span>
        </div>
      </div>
      <div class="information_modify" @click="changePsd">
        <div class="modify_left">
          <img src="../../assets/image/lock.png" alt />
          <span>修改密码</span>
        </div>
        <img class="modify_right" src="../../assets/image/return.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "../../components/header";
import { get, post, put } from "../../assets/js/ajaxResource";
export default {
  components: {
    pageHeader
  },
  data() {
    return {
      righttext: "编辑资料",
      userPicUrl: require("../../assets/image/person.png"),
      datalist: {
        name: "",
        policeCode: "",
        userTel: "",
        deptName: "",
        userCode: "",
        userPicUrl: "",
        userType: "",
        deptCode: "",
        roles: "",
        userName: ""
      }
    };
  },
  created() {
    get("/api/ras/user/info").then(res => {
      const {
        userCode,
        name,
        policeCode,
        userTel,
        deptName,
        userPicUrl,
        userType,
        deptCode,
        roles,
        userName
      } = res;
      this.datalist.name = name;
      this.datalist.policeCode = policeCode;
      this.datalist.userTel = userTel;
      this.datalist.deptName = deptName;
      this.datalist.userCode = userCode;
      this.datalist.deptName = deptName;
      this.datalist.userPicUrl = userPicUrl;
      this.datalist.userType = userType;
      this.datalist.deptCode = deptCode;
      this.datalist.roles = roles;
      this.datalist.userName = userName;
      if (userPicUrl === undefined) {
        this.datalist.userPicUrl = require("../../assets/image/person.png");
      } else {
        this.datalist.userPicUrl = userPicUrl;
      }
    });
  },
  methods: {
    // 返回上一个页面
    onClickLeft() {
      this.$router.push({ name: "Mine" });
    },
    // 跳转编辑用户资料
    onClickRight() {
      this.$router.push({
        name: "EditInformation",
        params: { datalist: this.datalist }
      });
    },
    // 跳转修改密码界面
    changePsd() {
      this.$router.push({
        name: "ChangePassword",
        params: { userCode: this.datalist.userCode }
      });
    }
  }
};
</script>

<style scoped>
#information {
  height: 100%;
  background-size: 100%;
  overflow: hidden;
  background: url(../../assets/image/information.png) no-repeat;
}
#information >>> .van-nav-bar__text {
  color: #000;
}
.information_middle {
  width: 330px;
  height: 200px;
  margin: 70px auto 41px;
  position: relative;
}
.sex {
  font-size: 9px;
  background: #96c3fe;
  border-radius: 15px 15px 15px 15px;
  width: 24px;
  height: 15px;
  opacity: 0.7;
  color: #2582fd;
  display: inline-block;
  text-align: center;
}
.information_message {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
}
.information_message img {
  width: 92px;
  height: 90px;
  margin-left: 20px;
}
.message_right {
  margin-left: 25px;
  display: flex;
  flex-direction: column;
}
.message_bottom {
  display: inline-block;
  font-size: 12px;
  margin-bottom: 9px;
}
.information_modify {
  height: 50px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  background: #fff;
  border-radius: 8px 8px 8px 8px;
}
.modify_left {
  font-size: 14px;
  display: flex;
}
.modify_left img {
  width: 13px;
  height: 16px;
  margin: 0 16px 0 20px;
}
.modify_right {
  width: 7px;
  height: 12px;
  transform: rotate(180deg);
  margin-right: 20px;
}
</style>