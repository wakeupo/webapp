<!--我的页面 -->
<template>
  <div id="mine">
    <div class="mine_me">
      <span>我的</span>
    </div>
    <div class="mine_message mine_com" @click="gotoInformation">
      <div class="mine_middle">
        <img src="../../assets/image/head.png" alt class="mine_headimg" />
        <span style="font-size:18px;">{{name}}</span>
      </div>
      <img src="../../assets/image/return.png" alt class="mine_go" />
    </div>
    <div class="mine_use mine_com">
      <div class="mine_middle">
        <img src="../../assets/image/course.png" alt class="mine_img" />
        <span>使用教程</span>
      </div>
      <img src="../../assets/image/return.png" alt class="mine_go" />
    </div>
    <div class="mine_setting mine_com" @click="setting">
      <div class="mine_middle">
        <img src="../../assets/image/setting.png" alt class="mine_img" />
        <span>设置</span>
      </div>
      <img src="../../assets/image/return.png" alt class="mine_go" />
    </div>
    <page-footer @openWrap="openWrap" homeColor="#B8B8B8" mineColor="#1989fa" @gotoHome="gotoHome"></page-footer>
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
            :style="{'pointerEvents':this.isEquipment?'auto':'none'}"
          >
            <img src="../../assets/image/equipment.png" />
            <p>2-设备取证</p>
          </div>
        </transition>
        <transition name="slide-up3" appear>
          <div v-if="show" class="listone" :style="{'pointerEvents':this.isSealup?'auto':'none'}">
            <img src="../../assets/image/sealup.png" />
            <p>3-封存合照</p>
          </div>
        </transition>
        <transition name="slide-up4" appear>
          <div
            v-if="show"
            class="listone"
            @click="gotoSuspectMsg"
            :style="{'pointerEvents':this.isSuspect?'auto':'none'}"
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
import { mapState } from "vuex";
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
      name: "",
      isBlur: false,
      show: false,
      isEquipment: false,
      isSealup: false,
      isSuspect: false,
    };
  },
  created() {
    const name = localStorage.getItem("name");
    this.name = name;
    let { isEquipment, isSealup, isSuspect } = this.$route.params;
    this.isEquipment = isEquipment;
    this.isSealup = isSealup;
    this.isSuspect = isSuspect;
  },
  methods: {
    // 跳转用户资料
    gotoInformation() {
      this.$router.push({ name: "Information" });
    },
    // 跳转设置页面
    setting() {
      this.$router.push({ name: "Setting" });
    },
    // 跳转首页
    gotoHome() {
      this.$router.push({ path: "/index" });
    },
    openWrap() {
      this.isBlur = true;
      this.show = true;
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
      this.$router.push({ path: "/inputCase" });
    },
    // 跳转我的页面
    gotoMine() {
      this.$router.push({ name: "Mine" });
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
    // 跳转环境拍照页面
    gotoEnvironment() {
      this.$router.push({ path: "/imageSave" });
    },
    // 跳转我的取证
    gotoMyEvidence() {
      this.$router.push({ path: "/MyEvidence" });
    },
    // 跳转环境拍照页面
    gotoEnvironment() {
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
      callDhBridgeHandler(handlerName, args, success, fail);
      //this.$router.push({ path: "/imageSave" });
    },
  },
};
</script>

<style scoped>
#mine {
  background: #f5f5f5;
  background-size: 100%;
  height: 100%;
}
.mine_me {
  width: 100%;
  height: 120px;
  background-size: 100% 100%;
  background: #2582fd;
  display: flex;
  justify-content: center;
}
.mine_me span {
  display: inline-block;
  font-size: 16px;
  margin: 40px auto;
  color: #ffffff;
}
.mine_headimg {
  width: 42px;
  height: 42px;
  margin-left: 18px;
}
.mine_com {
  width: 330px;
  border-radius: 8px 8px 8px 8px;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.mine_middle {
  display: flex;
  align-items: center;
  font-size: 14px;
}
.mine_middle span {
  margin-left: 14px;
}

.mine_message {
  top: 87px;
  height: 100px;
}
.mine_use {
  top: 202px;
  height: 50px;
}
.mine_setting {
  top: 264px;
  height: 50px;
}
.mine_img {
  width: 16px;
  height: 16px;
  margin-left: 16px;
  vertical-align: middle;
}
.mine_go {
  width: 7px;
  height: 12px;
  transform: rotate(180deg);
  margin-right: 14px;
}
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
.wrap {
  position: absolute;
  background-color: rgba(250, 250, 250, 0.9);
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

