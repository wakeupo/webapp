<template>
  <div class="contain">
    <page-header title="取证流程" :istranslate="true" @onClickLeft="onClickLeft"></page-header>
    <div class="content">
      <p>
        <span class="stepBox active">❶</span>
        <span class="stepName boldText">案件录入</span>
        <span class="stepStatus">✔</span>
      </p>
      <p>
        <span class="stepBox active">
          <span class="stepArrowBox">
            <span></span>
          </span>❷
        </span>
        <span class="stepName boldText">拍照取证</span>
      </p>
      <p>
        <span class="stepBox">
          <span class="stepArrowBox">
            <span></span>
            <i>•</i>
          </span>
        </span>
        <span class="stepName">环境拍照</span>
        <van-button @click="goTo" type="info" size="mini" v-if="photograph">去完成</van-button>
        <van-button @click="goTo" type="info" size="mini" v-else>查看</van-button>
      </p>
      <p>
        <span class="stepBox">
          <span class="stepArrowBox">
            <span></span>
            <i>•</i>
          </span>
        </span>
        <span class="stepName">设备取证</span>
      </p>
      <p>
        <span class="stepBox">
          <span class="stepArrowBox">
            <span></span>
            <i>•</i>
          </span>
        </span>
        <span class="stepName leftLeave">设备录入</span>
        <van-button
          :disabled="step<=2&&step>1?false:true"
          type="info"
          size="mini"
          @click="gotoEquipment"
          v-if="EquipmentEntry"
          ref="EquipmentEntry"
        >去完成</van-button>
        <van-button type="info" size="mini" @click="gotoEquipment" v-else>查看</van-button>
      </p>
      <p>
        <span class="stepBox">
          <span class="stepArrowBox">
            <span></span>
            <i>•</i>
          </span>
        </span>
        <span class="stepName leftLeave">证据固定</span>
      </p>
      <p>
        <span class="stepBox">
          <span class="stepArrowBox">
            <span></span>
            <i>•</i>
          </span>
        </span>
        <span class="stepName">封存合照</span>
        <van-button
          :disabled="step<=3&&step>2?false:true"
          type="info"
          size="mini"
          v-if="sealPhoto"
        >去完成</van-button>
        <van-button type="info" size="mini" v-else>查看</van-button>
      </p>
      <p>
        <span class="stepBox">
          <span class="stepArrowBox">
            <span></span>
            <i>•</i>
          </span>
        </span>
        <span class="stepName">嫌疑人拍照</span>
        <van-button
          :disabled="step<=4&&step>3?false:true"
          type="info"
          size="mini"
          @click="gotoSuspectMsg"
          v-if="suspect"
        >去完成</van-button>
        <van-button type="info" size="mini" v-else>查看</van-button>
      </p>
      <p>
        <span class="stepBox">
          <span class="stepArrowBox">
            <span></span>
          </span>❸
        </span>
        <span class="stepName boldText">报告编辑</span>
      </p>
      <p>
        <span class="stepBox">
          <span class="stepArrowBox">
            <span></span>
            <i>•</i>
          </span>
        </span>
        <span class="stepName">报告信息补充</span>
        <van-button
          :disabled="step<=5&&step>4?false:true"
          type="info"
          size="mini"
          @click="gotoAdditionalComment"
          v-if="ReportSupplement"
        >去完成</van-button>
        <van-button type="info" size="mini" @click="gotoAdditionalComment" v-else>查看</van-button>
      </p>
      <p>
        <span class="stepBox">
          <span class="stepArrowBox">
            <span></span>
            <i>•</i>
          </span>
        </span>
        <span class="stepName">报告编辑预览</span>
        <van-button
          :disabled="step<=6&&step>5?false:true"
          type="info"
          size="mini"
          @click="gotoWriteReport"
          v-if="preview"
        >去完成</van-button>
        <van-button type="info" size="mini" @click="gotoWriteReport" v-else>查看</van-button>
      </p>
      <p>
        <span class="stepBox">
          <span class="stepArrowBox">
            <span></span>
            <i>•</i>
          </span>
        </span>
        <span class="stepName">嫌疑人电子签名</span>
        <van-button
          :disabled="step<=7&&step>6?false:true"
          type="info"
          size="mini"
          @click="gotoWriteReport"
          v-if="sign"
        >去完成</van-button>
        <van-button type="info" size="mini" @click="gotoWriteReport" v-else>查看</van-button>
      </p>
      <p>
        <span class="stepBox">
          <span class="stepArrowBox">
            <span></span>
          </span>❹
        </span>
        <span class="stepName boldText">完成取证</span>
        <van-button disabled type="info" size="mini">去完成</van-button>
      </p>
    </div>
  </div>
</template>
<script>
import pageHeader from "../../components/header";
import { mapState } from "vuex";
export default {
  components: {
    pageHeader
  },
  data() {
    return {
      photograph: true,
      EquipmentEntry: true,
      sealPhoto: true,
      suspect: true,
      ReportSupplement: true,
      preview: true,
      sign: true
    };
  },
  computed: {
    ...mapState(["step"])
  },
  mounted() {
    this.limitClick();
  },
  methods: {
    //返回按钮
    onClickLeft() {
      this.$router.push({ path: "/index" });
    },
    //跳转图片保存页面
    goTo() {
      this.$router.push({ path: "/imageSave" });
    },
    // 跳转设备录入
    gotoEquipment() {
      this.$router.push({ path: "/equipment" });
    },
    // 报告信息补充
    gotoAdditionalComment() {
      this.$router.push({ path: "/AdditionalComment" });
    },
    // 嫌疑人录入
    gotoSuspectMsg() {
      this.$router.push({ path: "/suspectMsg" });
    },
    // 报告编辑预览
    gotoWriteReport() {
      this.$router.push({ path: "/writeReport" });
    },
    // 判断步骤流程
    limitClick() {
      let { step } = this.$store.state;
      switch (step) {
        case 2:
          this.photograph = false;
          break;
        case 3:
          this.photograph = this.EquipmentEntry = false;
          break;
        case 4:
          this.photograph = this.EquipmentEntry = this.sealPhoto = false;
          break;
        case 5:
          this.photograph = this.EquipmentEntry = this.sealPhoto = this.suspect = false;
          break;
        case 6:
          this.photograph = this.EquipmentEntry = this.sealPhoto = this.suspect = this.ReportSupplement = false;
          break;
        case 7:
          this.photograph = this.EquipmentEntry = this.sealPhoto = this.suspect = this.ReportSupplement = this.preview = false;
          break;
        case 8:
          this.photograph = this.EquipmentEntry = this.sealPhoto = this.suspect = this.ReportSupplement = this.preview = this.sign = false;
          break;
      }
    }
  }
};
</script>
<style scoped>
.contain {
  height: 100%;
  background: url(../../assets/image/process.png) no-repeat;
  background-size: 100%;
}
.content {
  padding: 50px 35px 0;
  box-sizing: border-box;
}
.stepArrowBox {
  position: absolute;
  display: inline-block;
  width: 5px;
  height: 30px;
  bottom: 16px;
  left: 4px;
}
.content p {
  display: flex;
  align-items: flex-end;
  margin: 0;
}
.content p >>> .van-button {
  position: absolute;
  right: 60px;
  padding: 0 12px;
}
.content p .stepBox {
  display: flex;
  width: 22px;
  height: 50px;
  float: left;
  align-items: flex-end;
  position: relative;
  color: #afafaf;
}
.content p .stepBox.active {
  color: #0183ff;
}
.stepArrowBox i {
  position: absolute;
  bottom: -18px;
  left: 1px;
  font-size: 30px;
}
.stepArrowBox span {
  position: absolute;
  left: 5px;
  font-size: 25px;
  display: inline-block;
  width: 3px;
  height: 30px;
  background-image: linear-gradient(#ebf6ff, #afafaf);
}
.stepBox.active .stepArrowBox span {
  background-image: linear-gradient(#ebf6ff, #0183ff);
}
.stepBox.active .stepArrowBox {
  color: #0183ff;
}
.stepName.boldText {
  font-size: 18px;
  font-weight: bold;
}
.stepName.leftLeave {
  margin-left: 40px;
}
.stepName {
  margin-left: 15px;
}
.stepStatus {
  position: absolute;
  right: 60px;
  font-size: 20px;
}
.stepBox.active .stepArrowBox i,
.stepBox.active .stepArrowBox span {
  color: #0183ff;
}
.stepBox .stepArrowBox i,
.stepBox .stepArrowBox span {
  color: #afafaf;
}
</style>