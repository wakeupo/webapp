<template>
  <div>
    <div class="contain" :class="[isBlur ? 'toblur' : '']">
      <div class="con-top">
        <div class="userInfo">
          <van-image round width="3rem" height="3rem" :src="userImage" />
          <span class="userName">{{ username }}</span>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item @click="inputCase">
            <van-image :src="require('../../assets/image/writeIn.png')" />
            <p>录入案件</p>
          </van-grid-item>
          <van-grid-item @click="gotoMyEvidence">
            <van-image :src="require('../../assets/image/myEvdence.png')" />
            <p>我的取证</p>
          </van-grid-item>
          <van-grid-item @click="gotovedio">
            <van-image :src="require('../../assets/image/vedio.png')" />
            <p>录像取证</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div>
        <div class="con-middle">
          <div class="card-list" v-show="isrepair" @click="gotoWorkFlow">
            <p class="caseName">{{ caseName }}</p>
            <p class="codeNum">
              <span>编号：{{ caseCode }}</span>
            </p>
            <p class="catchPerson">
              抓捕对象：
              <span>{{ catchObj }}</span>
            </p>
            <div class="stepBox">
              <p class="active">
                <span class="addline">❶</span>
                <span>案件录入</span>
              </p>
              <p>
                <span class="addline">❷</span>
                <span>拍照取证</span>
              </p>
              <p>
                <span class="addline">❸</span>
                <span>报告编辑</span>
              </p>
              <p>
                <span>❹</span>
                <span>完成取证</span>
              </p>
            </div>
          </div>
        </div>
        <div ref="log">{{ logMessige }}</div>
        <page-footer
          @openWrap="openWrap"
          homeColor="#1989fa"
          mineColor="#B8B8B8"
          @gotoMine="gotoMine"
        ></page-footer>
      </div>
    </div>
    <div v-if="isBlur" class="wrap">
      <transition appear name="slide-fade">
        <p v-if="show" class="largetext">现场电子取证</p>
      </transition>
      <transition appear name="slide-fader">
        <p v-if="show" class="smalltext">电子行业取证专家</p>
      </transition>
      <div class="btnlist">
        <transition name="slide-up1" appear>
          <div v-if="show" class="listone" @click="gotoEnvironment">
            <img src="../../assets/image/environmental.png" />
            <p>1-环境拍照</p>
          </div>
        </transition>
        <transition name="slide-up2" appear>
          <div
            v-if="show"
            class="listone"
            ref="EquipmentEntry"
            @click="gotoEquipment"
            :style="{ pointerEvents: this.isEquipment ? 'auto' : 'none' }"
          >
            <img src="../../assets/image/equipment.png" />
            <p>2-设备取证</p>
          </div>
        </transition>
        <transition name="slide-up3" appear>
          <div
            v-if="show"
            class="listone"
            :style="{ pointerEvents: this.isSealup ? 'auto' : 'none' }"
          >
            <img src="../../assets/image/sealup.png" />
            <p>3-封存合照</p>
          </div>
        </transition>
        <transition name="slide-up4" appear>
          <div
            v-if="show"
            class="listone"
            @click="gotoSuspectMsg"
            :style="{ pointerEvents: this.isSuspect ? 'auto' : 'none' }"
          >
            <img src="../../assets/image/suspect.png" />
            <p>4-嫌疑人录入</p>
          </div>
        </transition>
      </div>
      <p class="closeBtn" v-if="isshow">
        <van-icon name="cross" color="#666666" size="30" @click="isshow" />
      </p>
    </div>
  </div>
</template>
<script>
import pageFooter from "../../components/footer";
import { get, post } from "../../assets/js/ajaxResource";
import { mapState } from "vuex";
import { Toast } from "vant";
import { callDhBridgeHandler } from "../../assets/js/jsBridgeCommon";
export default {
  components: {
    pageFooter,
  },
  computed: {
    ...mapState(["step"]),
  },
  data() {
    return {
      isBlur: false,
      show: false,
      isrepair: false, //办理案件模块显示与否
      caseName: "", //案件名称
      username: "", //用户名称
      userPicUrl: "", //用户头像
      userImage: "",
      caseCode: "", //案件编码
      catchObj: "",
      isEquipment: false,
      isSealup: false,
      isSuspect: false,
      logMessige: "123",
    };
  },
  methods: {
    //获取用户信息
    getUserInfo() {},
    //获取当前正在办理的案件
    getCurrentCase() {
      if (localStorage["recordIdx"] && localStorage["recordIdx"] != "") {
        this.isrepair = true;
        const recordIdx = localStorage["recordIdx"];
        get("/api/ci/case/" + recordIdx + "/0", {}).then((res) => {
          (this.caseCode = res.caseCode),
            (this.caseName = res.caseName),
            (this.catchObj = res.catchTarget);
        });
      }
    },
    //获取字典方法
    getalldata() {
      const params = {
        typeCodes: ["C003", "C004", "C005", "C006"], //c003-案件类别，c004-设备类别，c005-电子数据类别，c006-单位简称
      };
      post("/api/ras/dic/batch/query", params).then((res) => {
        localStorage["alltype"] = JSON.stringify(res);
      });
    },
    //录像取证

    success(data) {
      this.logMessige = JSON.stringify(data);
      this.$router.push({
        name: "VedioReport",
        params: {
          filePath:JSON.parse(data).filePath,
          fileMD5: JSON.parse(data).fileMD5,
          fileDuration: JSON.parse(data).fileDuration,
          fileCreateTime: JSON.parse(data).fileCreateTime,
        },
      });
    },
    fail(code, data) {
      this.logMessige = JSON.stringify(data);
      //var failLog = "code:" + code + " | data:" + data;
      //this.$ref.log.innerHTML = JSON.stringify(data)
    },
    gotovedio() {
      if (localStorage["evidenceType"] && localStorage["evidenceType"] == 1) {
        Toast("您选择的取证类别是拍照取证！");
        return;
      }
      //调用录像插件

      //打开录像
      var handlerName = {
        pluginName: "DirectionCameraPlugin",
        pluginMethod: "takeVideo",
      };
      var args = { HighQuality: false }; //是否高质量拍摄
      callDhBridgeHandler(handlerName, args, this.success, this.fail);
      //this.$router.push({ path: "/imageSave" });
    },
    /*关闭遮罩*/
    isshow() {
      setTimeout(() => {
        this.isBlur = false;
      }, 800);
      this.show = false;
    },
    // 点击底部取证按钮开始取证
    openWrap() {
      this.isBlur = true;
      this.show = true;
    },
    //录入案件跳转
    inputCase() {
      this.$router.push({
        path: "/inputCase",
        query: {
          recordIdx: localStorage["recordIdx"] ? localStorage["recordIdx"] : "",
        },
      });
    },
    // 跳转我的页面
    gotoMine() {
      this.$router.push({
        name: "Mine",
        params: {
          isEquipment: this.isEquipment,
          isSealup: this.isSealup,
          isSuspect: this.isSuspect,
        },
      });
    },
    // 跳转环境拍照页面
    gotoEnvironment() {
      debugger;
      let success = function (data) {
        this.logMessige = JSON.stringify(data);
        //this.$ref.log.innerHTML = JSON.stringify(data)
      };
      let fail = function (code, data) {
        this.logMessige = JSON.stringify(data);
        //var failLog = "code:" + code + " | data:" + data;
        //this.$ref.log.innerHTML = JSON.stringify(data)
      };

      //打开拍照
      var handlerName = {
        pluginName: "DirectionCameraPlugin",
        pluginMethod: "takePhoto",
      };
      var args = {}; //是否高质量拍摄
      callDhBridgeHandler(handlerName, args, this.success, this.fail);
      //this.$router.push({ path: "/imageSave" });
    },

    // 跳转嫌疑人页面
    gotoSuspectMsg() {
      this.$router.push({ name: "SuspectMsg" });
    },
    // 跳转设备取证
    gotoEquipment() {
      this.$router.push({ path: "/equipment" });
    },
    // 跳转拍照设备流程图
    gotoWorkFlow() {
      this.$router.push({ path: "/workFlow" });
    },
    // 跳转我的取证
    gotoMyEvidence() {
      this.$router.push({ path: "/MyEvidence" });
    },

    // 判断步骤流程
    limitClick() {
      let step = this.$store.state.step;
      switch (step) {
        case 2:
          this.isEquipment = true;
          break;
        case 3:
          this.isSealup = this.isEquipment = true;
          break;
        case 4:
          this.isSuspect = this.isSealup = this.isEquipment = true;
          break;
      }
    },
  },
  mounted: function () {
    this.username = localStorage["name"];
    this.userImage = localStorage["userPicUrl"]
      ? require('"' + localStorage["userPicUrl"] + '"')
      : require("../../assets/image/person.png");
    //初始化字典数据
    this.getalldata();
    // 初始化步骤流程
    this.limitClick();
    //初始化当前案件
    this.getCurrentCase();
  },
};
</script>
<style scoped>
/* 底部动画 */
.slide-up1-enter-active {
  transition: all 0.3s ease 0s;
}
.slide-up1-leave-active {
  transition: all 0.9s cubic-bezier(1, 0.5, 0.8, 1) 0.1s;
}
.slide-up1-enter {
  transform: translateY(800px);
  opacity: 0;
}
.slide-up1-leave-to {
  transform: translateY(800px);
  opacity: 0;
}

.slide-up2-enter-active {
  transition: all 0.3s ease;
}
.slide-up2-leave-active {
  transition: all 0.9s cubic-bezier(1, 0.5, 0.8, 1) 0.1s;
}
.slide-up2-enter,
.slide-up2-leave-to {
  transform: translateY(800px);
  opacity: 0;
}

.slide-up3-enter-active {
  transition: all 0.6s ease;
}
.slide-up3-leave-active {
  transition: all 0.9s cubic-bezier(1, 0.5, 0.8, 1) 0.2s;
}
.slide-up3-enter,
.slide-up3-leave-to {
  transform: translateY(800px);
  opacity: 0;
}

.slide-up4-enter-active {
  transition: all 0.9s ease;
}
.slide-up4-leave-active {
  transition: all 0.9s cubic-bezier(1, 0.5, 0.8, 1) 0.3s;
}
.slide-up4-enter,
.slide-up4-leave-to {
  transform: translateY(800px);
  opacity: 0;
}
/* 现场电子取证 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter {
  opacity: 1;
  transform: translateX(-300px);
}
.slide-fade-leave-to {
  transform: translateX(-300px);
  opacity: 0;
}
/* 电子行业取证专家 */
.slide-fader-enter-active {
  transition: all 0.5s ease;
}
.slide-fader-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1) 0.1s;
}
.slide-fader-enter {
  transform: translateX(-200px);
  opacity: 1;
}
.slide-fader-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
.closeBtn {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 10px;
}
.btnlist {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 100px;
}
.btnlist .listone {
  float: left;
  width: 25%;
  background-color: transparent;
  text-align: center;
  bottom: -600px;
}
.listone img {
  width: 70px;
  height: 70px;
}
.listone p {
  margin: 5px 0;
  font-size: 13px;
}
.contain {
  height: 100%;
  background-color: #f3f3f3;
}
.contain.toblur {
  -webkit-filter: blur(50px);
  -moz-filter: blur(40px);
  -o-filter: blur(40px);
  -ms-filter: blur(40px);
  filter: blur(50px);
}
.con-top {
  background-image: linear-gradient(#02aad8 1%, #0183ff);
}
.con-top .userInfo {
  text-align: left;
  padding: 60px 50px 0px 50px;
}
.con-top >>> .van-grid .van-grid-item__content {
  background: transparent;
}
.con-top >>> .van-image {
  vertical-align: middle;
}
.userName {
  font-size: 20px;
  color: #fff;
  margin-left: 15px;
}
.con-top >>> .van-grid p {
  color: #fff;
  margin: 7px 0 15px 0;
}
.con-top >>> .van-grid img {
  width: 40px;
  height: auto;
}
.con-middle {
  background-color: #eeeeee;
  padding: 10px 0;
  margin-top: -10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.con-middle .card-list {
  margin: 0px 15px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
}
.con-middle .card-list .caseName {
  color: #000;
  font-size: 22px;
  font-weight: bold;
}
.con-middle .card-list p {
  text-align: left;
  margin: 0;
  margin-bottom: 10px;
}
.codeNum span {
  font-size: 12px;
  background-color: #ededed;
  display: inline-block;
  padding: 1px 8px;
  color: #313131;
}
.catchPerson {
  color: #999999;
}
.stepBox {
  text-align: left;
  background-color: #e2e2e2;
  padding: 7px 5px;
  border-radius: 3px;
}
.stepBox p > span:first-child {
  display: inline-block;
  width: 100%;
  font-size: 18px;
  position: relative;
  color: #b8b8b8;
  z-index: 999;
}
.stepBox p > span:last-child {
  font-size: 12px;
  color: #313131;
}
.addline::after {
  content: "";
  display: inline-block;
  border-top: 2px solid #b8b8b8;
  position: absolute;
  left: 25%;
  top: 50%;
  width: 80%;
  z-index: -1;
}
.stepBox p {
  display: inline-block;
  width: 23%;
  margin-bottom: 0 !important;
}
.stepBox p.active span {
  color: #0183ff;
}
.wrap {
  position: absolute;
  background-color: transparent;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.largetext {
  font-size: 40px;
  color: #000;
  padding-left: 30px;
  top: 18%;
  position: absolute;
}
.smalltext {
  padding-left: 30px;
  position: absolute;
  margin: 0;
  top: 32%;
}
</style>