<template>
  <div id="vedioReport">
    <page-header
      :title="title"
      style="border-bottom: 1px solid #dadada"
      @onClickLeft="onClickLeft"
    ></page-header>
    <van-swipe-cell>
      <!-- <video controls autoplay style="width: 100%; height: 10%">
        <source :src="src" type="video/mp4" />
      </video> -->
      <img :src="bb" style="width: 200px; height: 200px; border: 1px solid" />
      <!-- <input src="file://storage/emulated/0/DCIM/Camera/VIDEO_20200925_094108.mp4"/> -->
      <Case
        v-for="(item, index) in list"
        :key="index"
        class="case"
        :leftimg="require('../../assets/image/logo.png')"
        :title="'录像' + (index + 1)"
        :startTime="true"
        :size="true"
        :content="true"
        :contenttext="item.contenttext"
        :time="item.fileCreateTime"
        @onClick="gotoVedio(index)"
      />
      <template #right>
        <van-button
          square
          text="删除"
          type="danger"
          class="delete-button"
          @click="del"
        />
      </template>
    </van-swipe-cell>
    <div>{{ list }}</div>
    <canvas id="aa"></canvas>
    <div class="btn">
      <van-button type="danger">完成取证</van-button>
      <van-button type="info" @click="goonVedio">继续录像</van-button>
    </div>
  </div>
</template>

<script>
import pageHeader from "../../components/header";
import Case from "../../components/case";
import { callDhBridgeHandler } from "../../assets/js/jsBridgeCommon";
export default {
  components: {
    pageHeader,
    Case,
  },
  data() {
    return {
      title: "上饶市案件",
      // leftimg: require("../../assets/image/logo.png"),
      // src: "https://h5player.bytedance.com/video/mp4/xgplayer-demo-720p.mp4",
      src: "/storage/emulated/0/DCIM/Camera/VIDEO_20200925_094108.mp4",
      datalist: "",
      list: [],
      bb: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/index" });
    },
    del() {
      console.log(this);
    },
    // 去录像详情信息
    gotoVedio(idx) {
      this.$router.push({
        name: "Vedio",
        params: { list: this.list[idx] },
      });
    },
    // 成功返回信息
    success(data) {
      this.datalist = JSON.stringify(data);
      let {
        filePath,
        fileMD5,
        fileDuration,
        fileCreateTime,
      } = this.$route.params;
      fileCreateTime = this.getDateTime(fileCreateTime);
      this.list.push({ filePath, fileMD5, fileDuration, fileCreateTime });
    },
    // 失败返回信息
    fail(code, data) {
      this.logMessige = JSON.stringify(data);
    },
    // 继续录像
    goonVedio(data) {
      let handlerName = {
        pluginName: "DirectionCameraPlugin",
        pluginMethod: "takeVideo",
      };
      let args = { HighQuality: false }; //是否高质量拍摄
      callDhBridgeHandler(handlerName, args, this.success, this.fail);
    },
    // 时间戳转化为日期格式
    getDateTime(time) {
      time = Number(time);
      let aatime = new Date(time);
      let Y = aatime.getFullYear() + "/";
      let M =
        (aatime.getMonth() + 1 < 10
          ? "0" + (aatime.getMonth() + 1)
          : aatime.getMonth() + 1) + "/";
      let D = aatime.getDate() + " ";
      let h = aatime.getHours() + ":";
      let m = aatime.getMinutes() + ":";
      let s = aatime.getSeconds();
      return Y + M + D + h + m + s;
    },
  },
  created() {
    this.success();
    let url = "内部存储/th/threathunter_demo.png";
    alert(url);
    let canvas = document.getElementById("aa");
    alert(canvas);
    // var imgFile = new FileReader();
    // let aa = imgFile.readAsDataURL(
    //   "/内部存储/CDIM/Camera/IMG_20200919_195328.jpg"
    // );
    this.bb = canvas.toDataURL(url);
    alert(this.bb);
  },
};
</script>

<style scoped>
#vedioReport {
  margin-top: 46px;
}
.goods-card {
  margin: 0;
}

.delete-button {
  height: 100%;
}
#vedioReport >>> .MyEvidence_now {
  height: 80px;
}
#vedioReport >>> .file {
  width: 54px;
  height: 54px;
}
.btn {
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
}
.btn button {
  width: 130px;
  border-radius: 20px;
}
</style>