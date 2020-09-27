<!--修改密码 -->
<template>
  <div id="changePassword">
    <page-header title="修改密码" @onClickLeft="onClickLeft"></page-header>
    <div class="tips">账号作为唯一登录凭证，请谨慎修改密码。</div>
    <van-form @submit="complete">
      <van-field
        v-model="oldPassword"
        type="password"
        placeholder="输入旧密码"
        class="psd"
        :rules="[{ required: true}]"
      />
      <van-field
        v-model="newPasswordFirst"
        type="password"
        placeholder="输入新密码"
        class="psd"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="newPassword"
        type="password"
        placeholder="再次确认密码"
        class="psd"
        :rules="[{ required: true }]"
      />
      <van-button
        type="info"
        class="psd"
        @click="complete"
        :class="this.oldPassword && this.newPasswordFirst && this.newPassword ? '' : 'psdbtn'"
      >完成</van-button>
    </van-form>
  </div>
</template>

<script>
import pageHeader from "../../components/header";
import { Notify } from "vant";
import Md5 from "md5";
import { put } from "../../assets/js/ajaxResource";
export default {
  components: {
    pageHeader
  },
  data() {
    return {
      oldPassword: "",
      newPasswordFirst: "",
      newPassword: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "Information" });
    },
    complete() {
      const { userCode } = this.$route.params;
      const username = localStorage.getItem("username");
      if (this.oldPassword && this.newPasswordFirst && this.newPassword) {
        if (this.newPasswordFirst === this.newPassword) {
          // 旧密码加密
          let oldPassword = Md5(this.oldPassword);
          oldPassword = Md5(username + oldPassword);
          oldPassword = Md5(oldPassword);
          // 新密码加密
          let newPassword = Md5(this.newPassword);
          newPassword = Md5(username + newPassword);
          newPassword = Md5(newPassword);
          put("/api/videoService/accounts/users/password/" + userCode, {
            oldPassword,
            newPassword
          }).then(res => {
            console.log(res);
          });
          Notify({ type: "success", message: "修改成功" });
          this.$router.push({ name: "Information" });
        } else {
          Notify("两次密码不一致");
          this.newPasswordFirst = "";
          this.newPassword = "";
        }
      }
    }
  }
};
</script>

<style scoped>
#changePassword {
  height: 100%;
  background: #f5f5f5;
  background-size: 100%;
  overflow: hidden;
}
.tips {
  font-size: 14px;
  margin: 71px 0 23px 20px;
}
.psd {
  margin: 0 15px 15px 15px;
  border-radius: 8px 8px 8px 8px;
  width: 330px;
}
.psdbtn {
  opacity: 0.2;
}
</style>