<!-- 取证完成  报告信息补充 -->
<template>
  <div id="AdditionalComment">
    <page-header
      @onClickLeft="onClickLeft"
      style="background: none"
    ></page-header>
    <h2>报告信息补充</h2>
    <div class="AdditionalComment_message">
      <van-field label-width="80" label="抓捕地区" :value="place" readonly />
      <van-field label-width="80" label="取证时间" :value="time" readonly />
      <van-field
        label-width="80"
        v-model="person"
        label="见证人"
        placeholder="请填写见证人姓名"
      />
      <van-cell title="环境光线" value="内容">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </van-cell>
      <van-cell title="天气" value="内容">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
      </van-cell>
      <van-field
        label-width="80"
        v-model="temperature"
        label="温度"
        placeholder="请填写温度"
      />
      <van-field
        label-width="80"
        v-model="humidity"
        label="湿度"
        placeholder="请填写湿度"
      />
      <van-field
        label-width="80"
        v-model="wind"
        label="风向"
        placeholder="请填写风向"
      />
      <p style="padding: 0 16px; font-size: 14px">现场勘验利用的光线</p>
      <div class="line">
        <van-radio-group v-model="leight" direction="horizontal">
          <van-radio name="1">特种光</van-radio>
          <van-radio name="2">自然光</van-radio>
          <van-radio name="3">灯光</van-radio>
        </van-radio-group>
      </div>
      <div class="situation">
        <van-radio-group v-model="scene" direction="horizontal">
          <span>现场情况</span>
          <van-radio name="1">变动现场</van-radio>
          <van-radio name="2">原始现场</van-radio>
        </van-radio-group>
      </div>
      <div
        style="
          border-bottom: 1px solid #e2e2e2;
          margin: 0 16px 10px;
          padding-bottom: 15px;
        "
        v-show="changeReason"
      >
        <p style="font-size: 14px; line-height: 30px">变动原因</p>
        <van-radio-group v-model="radio" class="reason">
          <van-radio name="1" shape="square">事主进入</van-radio>
          <van-radio name="2" shape="square">报案人进入</van-radio>
          <van-radio name="3" shape="square">其他原因</van-radio>
        </van-radio-group>
        <textarea
          v-model="otherReason"
          placeholder="请输入其他原因"
          cols="30"
          rows="10"
          v-show="elseReason"
        ></textarea>
      </div>
      <div class="measures">
        <p>
          <span>保护措施</span>
          <span>（多选）</span>
        </p>
        <van-checkbox-group v-model="result">
          <van-checkbox name="1" shape="square"
            >设立警戒带，划定禁行区域</van-checkbox
          >
          <van-checkbox name="2" shape="square"
            >专人看护现场，防止他人进入</van-checkbox
          >
          <van-checkbox name="3" shape="square">被害人自行措施</van-checkbox>
          <van-checkbox name="4" shape="square">其他措施</van-checkbox>
        </van-checkbox-group>
        <textarea
          placeholder="请输入其他保护措施"
          cols="30"
          rows="10"
          v-model="otherProtect"
          v-show="elseStep"
        ></textarea>
      </div>
      <van-button type="info" class="complete" @click="gotoReportEditor"
        >取证完成</van-button
      >
    </div>
  </div>
</template>

<script>
import pageHeader from "../../components/header";
import { callDhBridgeHandler } from "../../assets/js/jsBridgeCommon";

export default {
  components: {
    pageHeader,
  },
  data() {
    return {
      time: "1232", //取证时间
      place: "456", //取证地点
      otherReason: "13", //其他原因
      otherProtect: "123", //其他保护措施
      leight: "1", //勘验光线
      scene: "2", //现场环境
      radio: "1", //变动原因
      checked: true,
      person: "123", //见证人
      temperature: "123", //温度
      humidity: "123", //湿度
      wind: "123", //风向
      reason: false,
      cause: false,
      step: false,
      result: ["1", "2", "3", "4"],
      value1: "c", //环境光线
      value2: "c", //天气
      option1: [
        { text: "阴", value: "a" },
        { text: "晴", value: "b" },
        { text: "雨", value: "c" },
        { text: "雪", value: "d" },
      ],
      option2: [
        { text: "阴", value: "a" },
        { text: "晴", value: "b" },
        { text: "雨", value: "c" },
        { text: "雪", value: "d" },
      ],
    };
  },
  computed: {
    // 显示变动元婴框
    changeReason() {
      if (this.scene == 1) {
        return (this.reason = true);
      }
    },
    // 显示其他原因框
    elseReason() {
      if (this.radio == 3) {
        return (this.cause = true);
      }
    },
    elseStep() {
      if (this.result.indexOf("4") !== -1) {
        return (this.step = true);
      }
    },
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/workFlow" });
    },
    // 数据存储成功
    success(data) {
      alert("success");
    },
    // 数据存储失败
    fail(data) {
      alert("fail");
    },

    // 取证完成
    gotoReportEditor() {
      this.$store.state.step = 6;
      // this.$router.push({ name: "ReportEditor" });
      // 存储数据存缓
      let data_ = {
        time: this.time,
        place: this.place,
        person: this.person,
        leight: this.leight,
        scene: this.scene,
        temperature: this.temperature,
        humidity: this.humidity,
        wind: this.wind,
        radio: this.radio,
        otherReason: this.otherReason,
        otherProtect: this.otherProtect,
        result: this.result,
      };
      let handlerName = {
        pluginName: "DHDataSpCachePlugin",
        pluginMethod: "putString",
      };
      let args = { key: "plugin_AdditionalComment", value: data_ };
      callDhBridgeHandler(handlerName, args, this.success, this.fail);
    },
  },
};
</script>

<style scoped>
#AdditionalComment {
  background: url(../../assets/image/AdditionalCommentBg.png) no-repeat;
  background-size: 100%;
  overflow: hidden;
}
::-webkit-input-placeholder {
  font-size: 14px;
}
#AdditionalComment >>> .van-nav-bar .van-icon {
  color: #fff;
  font-size: 22px;
}
h2 {
  margin: 46px auto 0;
  text-align: center;
  font-size: 29px;
  color: #fff;
}
.AdditionalComment_message {
  border-radius: 10px 10px 0 0;
  margin: 20px 20px 0 20px;
  overflow: hidden;
}
.AdditionalComment_message >>> .van-dropdown-menu__bar {
  box-shadow: none;
  height: auto;
}
.AdditionalComment_message >>> .van-popup--top {
  left: auto;
}
.AdditionalComment_message >>> .van-dropdown-item__content {
  margin: 0 auto;
  width: 90%;
  left: 0;
  right: 0;
}
.AdditionalComment_message >>> .van-dropdown-menu__item {
  justify-content: flex-end;
  padding: 0 5px;
}
.line {
  border-bottom: 1px solid #e2e2e2;
  height: 30px;
  margin: 0 16px;
}
.line >>> .van-radio__icon,
.line >>> .van-radio__label,
.situation >>> .van-radio__icon,
.situation >>> .van-radio__label {
  font-size: 14px;
}
.line >>> .van-radio--horizontal {
  margin-right: 20px;
}
.situation {
  padding: 15px 0;
  margin: 0 16px;
  border-bottom: 1px solid #e2e2e2;
}
.situation span {
  margin-right: 20px;
  font-size: 14px;
}
.reason .van-radio {
  margin: 16px 0;
  font-size: 16px;
}
.reason {
  margin-top: 0;
}
.reason >>> .van-radio__label {
  font-size: 10px;
}
.reason >>> i {
  vertical-align: top;
  font-size: 10px;
}
textarea {
  resize: none;
  width: 90%;
  height: 80px;
  padding: 14px;
  background: #f5f5f5;
  border-radius: 8px 8px 8px 8px;
}
.measures {
  margin: 0 16px;
}
.measures :nth-child(1) {
  font-size: 15px;
}
.measures :nth-child(2) {
  font-size: 11px;
  color: #afafaf;
}
.measures .van-checkbox {
  margin-bottom: 14px;
}
.measures >>> .van-checkbox i {
  font-size: 10px;
}
.complete {
  width: 90%;
  margin: 120px 16px 30px;
  border-radius: 8px 8px 8px 8px;
}
</style>