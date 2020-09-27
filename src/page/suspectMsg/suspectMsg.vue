<!-- 嫌疑人录入 -->
<template>
  <div id="suspectMsg">
    <page-header
      :title="title"
      style="border-bottom: 1px solid #dadada; background: #fff"
      @onClickLeft="onClickLeft"
    ></page-header>
    <div class="msg">
      <div class="personName">姓名：张下雨</div>
      <div class="personHead">人脸照片</div>

      <input
        class="addPicInput"
        type="file"
        ref="uploadFile"
        @change="fileChange"
        accept="image/*"
        multiple
      />
      <van-uploader :after-read="afterRead">
        <img src="../../assets/image/add.png" alt />
      </van-uploader>
    </div>
    <div class="msg">
      <div class="personHead">身份证照片</div>
      <van-uploader :after-read="afterRead">
        <img src="../../assets/image/add.png" alt />
        <span>头像页</span>
      </van-uploader>
      <van-uploader :after-read="afterRead">
        <img src="../../assets/image/add.png" alt />
        <span>国徽页</span>
      </van-uploader>
    </div>
    <div class="msg" style="height: 30%">
      <div class="personHead">指认视频</div>
      <van-uploader :after-read="afterRead">
        <img src="../../assets/image/add.png" alt />
      </van-uploader>
    </div>
    <div class="btn">
      <span style="background: #ecedee" @click="gotoWorkFlow">取消</span>
      <span style="background: #0183ff; color: #fff" @click="save">保存</span>
    </div>
  </div>
</template>

<script>
import pageHeader from "../../components/header";
export default {
  components: {
    pageHeader,
  },
  data() {
    return {
      title: "嫌疑人信息",
    };
  },
  methods: {
    afterRead() {},
    // 返回流程页面
    onClickLeft() {
      this.$router.push({ path: "/workFlow" });
    },
    // 保存取消跳转流程页面
    gotoWorkFlow() {
      this.$router.push({ path: "/workFlow" });
    },
    save() {
      this.$store.state.step = 5;
      this.$router.push({ path: "/workFlow" });
    },
  },
};
</script>

<style scoped>
#suspectMsg {
  background: #f5f5f5;
  height: 100%;
}
.msg {
  background: #fff;
  padding: 0 16px 20px;
  overflow: hidden;
  margin-bottom: 8px;
}
.personName {
  font-size: 17px;
  font-weight: bold;
  margin: 18px 0;
}
.personHead {
  font-size: 14px;
  margin: 12px 0;
}
.msg >>> .van-uploader__upload {
  border-radius: 10px;
}
.msg >>> img {
  width: 100px;
  height: 100px;
  display: block;
}
.msg span {
  position: absolute;
  bottom: 0;
  text-align: center;
  background: #eee;
  font-size: 9px;
  width: 100%;
  padding: 5px 0;
  border-radius: 0 0 8px 8px;
}
#suspectMsg {
  position: relative;
}
.btn {
  position: fixed;
  bottom: 10px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.btn span {
  width: 155px;
  height: 36px;
  display: inline-block;
  text-align: center;
  line-height: 36px;
  border-radius: 4px;
}
</style>