
<!-- 设备取证 -->
<template>
  <div class="contain">
    <page-header title="设备" @onClickLeft="onClickLeft"></page-header>
    <input type="file" id="inputImage" name="file" accept="image/gif,image/jpg,image/jpeg,image/bmp,image/png">
    <div class="contentBox">
      <div class="addBox">
        <div class="addCon" @click="showPopup">
          <van-icon name="plus" />添加电子设备
        </div>
      </div>
      <div v-for="(item, index) in list" :key="index">
        <Case
          :leftimg="item.leftimg"
          :time="item.time"
          :getevidence="true"
          :ondoing="true"
          :doing="item.colorF"
          :title="item.title"
          @onClickRight="onClickRight"
        ></Case>
      </div>
    </div>
    <van-popup
      v-model="show"
      round
      position="bottom"
      :style="{ height: '70%' }"
    >
      <div class="popupBox">
        <van-field
          v-model="category"
          label="类别"
          input-align="right"
          right-icon="arrow"
          @click="openPopup"
          readonly
          placeholder="请选择类别"
        />
        <van-field
          v-model="manufactor"
          label="厂家"
          input-align="right"
          right-icon="arrow"
          placeholder="请选择厂家"
        />
        <van-field
          v-model="model"
          label="型号"
          input-align="right"
          right-icon="arrow"
          placeholder="请输入手机型号"
        />
        <van-field
          v-model="color"
          label="颜色"
          input-align="right"
          right-icon="arrow"
          placeholder="请输入手机颜色"
        />
        <van-field
          v-model="position"
          label="发现位置"
          input-align="right"
          right-icon="arrow"
          placeholder="请输入发现位置"
        />
        <van-field name="radio" input-align="right" label="原始状态">
          <template #input>
            <van-radio-group v-model="radio" direction="horizontal">
              <van-radio name="1">开机</van-radio>
              <van-radio name="2">关机</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field name="uploader" label="照片">
          <template #input>
            <van-uploader v-model="uploader" />
          </template>
        </van-field>
      </div>
      <div class="footerBtn" @click="complete">
        <van-button type="info" block>完成</van-button>
      </div>
      <Popup @openPopup="openPopup" :ispair="isShowPopup" title="类别"></Popup>
    </van-popup>
  </div>
</template>
<script>
import pageHeader from "../../components/header";
import Case from "../../components/case";
import Popup from "../../components/popup";
import { callDhBridgeHandler } from "../../assets/js/jsBridgeCommon";
export default {
  components: {
    pageHeader,
    Case,
    Popup,
  },
  data() {
    return {
      show: false,
      category: "手机", //类别
      manufactor: "华为", //厂家
      model: "p40", //型号
      color: "红色", //颜色
      position: "13", //位置
      radio: "1", //原始状态
      uploader: [{ url: "https://img.yzcdn.cn/vant/leaf.jpg" }],
      isShowPopup: false, //判断字典弹窗显示隐藏
      list: [
        // {
        //   leftimg: require("../../assets/image/phone.png"),
        //   time: "华为手机 001",
        //   title: "手机 华为Mate30",
        //   colorF: "蓝色",
        // },
        // {
        //   leftimg: require("../../assets/image/notePower.png"),
        //   time: "笔记本电脑 001",
        //   title: "笔记本 华为Mate30",
        //   colorF: "红色",
        // },
      ],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    //返回按钮
    onClickLeft() {
      this.$store.state.step = 3;
      this.$router.push({ path: "/workFlow" });
    },
    //添加设备事件
    showPopup() {
      this.show = true;
    },
    openPopup() {
      this.isShowPopup = !this.isShowPopup;
    },
    onClickRight() {
      this.$router.push({ path: "/equipmentPhoto" });
    },
    success(data) {
      // 添加完成后显示
      this.completeAdd(data);
    },
    fail() {
      alert("fail");
    },

    // 添加完成
    complete() {
      let data_ = {
        category: this.category,
        color: this.color,
        manufactor: this.manufactor,
        position: this.position,
        radio: this.radio,
        model: this.model,
      };
      let handlerName = {
        pluginName: "DHDataSpCachePlugin",
        pluginMethod: "putString",
      };
      let args = { key: "plugin_equipment", value: data_ };
      callDhBridgeHandler(handlerName, args, this.success, this.fail);
      this.show = false;
      this.getData();
    },

    // 读取存缓数据
    getData() {
      let handlerName = {
        pluginName: "DHDataSpCachePlugin",
        pluginMethod: "getString",
      };
      let args = { key: "plugin_equipment" };
      callDhBridgeHandler(handlerName, args, this.success, this.fail);
    },
    // 读取成功渲染数据
    completeAdd(data) {
      let _data = JSON.parse(data);
      this.list.push({
        title: _data.category + " " + _data.manufactor + _data.model,
        colorF: _data.color,
        time: "华为手机 001",
        leftimg: require("../../assets/image/notePower.png"),
      });
    },
  },
};
</script>
<style scoped>
.contain {
  height: 100%;
  background-color: #f5f5f5;
  padding: 50px 0 15px;
  box-sizing: border-box;
}
.contentBox {
  padding: 10px 10px;
}
.footerBtn {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px 30px;
  box-sizing: border-box;
}
.popupBox {
  padding-top: 15px;
}
.addBox {
  padding: 10px 0;
  background-color: transparent;
}
.addBox .addCon {
  background-color: #fff;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  padding: 0 20px;
  color: #333333;
}
.addBox .addCon >>> .van-icon {
  margin-right: 10px;
  vertical-align: middle;
  color: #333333;
}
</style>