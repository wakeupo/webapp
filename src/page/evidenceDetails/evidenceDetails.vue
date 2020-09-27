<!-- 我的取证详情 -->
<template>
  <div id="evidenceDetails">
    <page-header :lefttext="lefttext" :isSearch="true" @onClickLeft="onClickLeft"></page-header>
    <div class="evidenceDetails_mian">
      <!-- 报告 -->
      <div class="mian_message">
        <div style="margin-bottom:20px;font-size:14px;">
          <span class="leftline"></span>
          <span>报告</span>
        </div>
        <div class="record">
          <img src="../../assets/image/pdf1.png" alt />
          <span>现场勘验检查工作记录</span>
        </div>
      </div>
      <!-- 嫌疑人信息 -->
      <div class="mian_message">
        <div style="margin-bottom:20px;font-size:14px;">
          <span class="leftline"></span>
          <span>嫌疑人信息</span>
        </div>
        <div style="flex-direction:row;display:flex;">
          <div class="person">
            <img src="../../assets/image/informationhead.png" alt />
            <span>张大锤</span>
          </div>
          <div class="person">
            <img src="../../assets/image/informationhead.png" alt />
            <span>身份证</span>
          </div>
          <div class="person" @click="previewVideo">
            <img src="../../assets/image/informationhead.png" alt />
            <span>指认视频</span>
          </div>
        </div>
      </div>
      <!-- 环境 -->
      <div class="mian_message">
        <div v-show="videoPreview" style="margin-bottom:20px;font-size:14px;">
          <span class="leftline"></span>
          <span>环境</span>
        </div>
        <!-- 图片预览 -->
        <div v-show="preview" @click="closePic" class="previewPic">
          <img :src="src" alt style="width:100%;margin:40% 0;" />
        </div>
        <!-- 视频预览 -->
        <div v-if="videoPreview" @click="closePic" class="previewPic">
          <video controls autoplay style="width:100%;margin:50% 0;">
            <source
              src="https://h5player.bytedance.com/video/mp4/xgplayer-demo-720p.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="environment" @click="previewPic">
          <img src="../../assets/image/pdf1.png" alt ref="previewImg" />
          <span>现场勘验检查工作记录</span>
        </div>
        <div class="environment">
          <img src="../../assets/image/pdf1.png" alt />
          <span>现场勘验检查工作记录</span>
        </div>
        <div class="environment">
          <img src="../../assets/image/pdf1.png" alt />
          <span>现场勘验检查工作记录</span>
        </div>
      </div>
      <!-- 设备 -->
      <div class="mian_message">
        <div style="margin-bottom:20px;font-size:14px;">
          <span class="leftline"></span>
          <span>设备</span>
        </div>
        <van-collapse v-model="activeNames">
          <van-collapse-item title="标题1" name="1">
            <span class="systime">系统时间</span>
            <div class="environment">
              <img src="../../assets/image/pdf1.png" alt style="margin-left:0;" />
              <span>现场勘验检查工作记录</span>
            </div>
            <span class="systime">IMEI码</span>
            <div class="environment">
              <img src="../../assets/image/pdf1.png" alt style="margin-left:0;" />
              <span>现场勘验检查工作记录</span>
            </div>
            <span class="systime">手机系统信息</span>
            <div>
              <div class="environment">
                <img src="../../assets/image/pdf1.png" alt style="margin-left:0;" />
                <span>现场勘验检查工作记录</span>
              </div>
              <div class="environment">
                <img src="../../assets/image/pdf1.png" alt style="margin-left:0;" />
                <span>现场勘验检查工作记录</span>
              </div>
            </div>
            <span class="systime">手机硬件信息</span>
            <div>
              <div class="environment">
                <img src="../../assets/image/pdf1.png" alt style="margin-left:0;" />
                <span>现场勘验检查工作记录</span>
              </div>
              <div class="environment">
                <img src="../../assets/image/pdf1.png" alt style="margin-left:0;" />
                <span>现场勘验检查工作记录</span>
              </div>
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
      <!-- 封存合照 -->
      <div class="mian_message">
        <div style="margin-bottom:20px;font-size:14px;">
          <span class="leftline"></span>
          <span>封存合照</span>
        </div>
        <div class="environment">
          <img src="../../assets/image/pdf1.png" alt />
          <span>现场勘验检查工作记录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "../../components/header";
import { ImagePreview } from "vant";
export default {
  components: {
    pageHeader
  },
  data() {
    const { idx } = JSON.parse(this.$route.params.data);
    return {
      lefttext: "上饶市杀人案" + idx,
      activeNames: ["1"],
      src: "",
      preview: false,
      videoPreview: false
      // listData: ["../../assets/image/informationhead.png"] //图片数组
    };
  },
  methods: {
    // 返回我的取证页面
    onClickLeft() {
      this.$router.push({ path: "/MyEvidence" });
    },
    // // 嫌疑人图片预览
    // getImg(images) {
    //   ImagePreview(["../../assets/image/informationhead.png"]);
    // },
    // 预览图片
    previewPic() {
      console.log(this.$refs.previewImg.src);
      this.src = this.$refs.previewImg.src;
      this.preview = true;
    },
    // 预览视频
    previewVideo() {
      this.videoPreview = true;
    },
    // 关闭预览
    closePic() {
      this.preview = false;
      this.videoPreview = false;
    }
  }
};
</script>

<style scoped>
#evidenceDetails {
  height: 100%;
  background: #f5f5f5;
}
/* 图片预览 */
.previewPic {
  width: 100%;
  height: 100%;
  background: #000;
  position: absolute;
  top: 0;
  z-index: 1000;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
#evidenceDetails >>> .van-nav-bar__text {
  color: #000;
}
.leftline {
  width: 3px;
  height: 13px;
  background: #158cd7;
  display: inline-block;
}
.mian_message {
  background: #fff;
  margin-bottom: 8px;
  padding: 20px;
}
.mian_message .record {
  background: #e4f1fe;
  width: 310px;
  height: 45px;
  margin: 0 auto;
  font-size: 13px;
  line-height: 45px;
}
.record img,
.environment img {
  width: 21px;
  height: 21px;
  vertical-align: middle;
  margin: 0 9px 0 15px;
}
.person {
  width: 74px;
  background: #fff;
  text-align: center;
  margin-right: 16px;
}
.person img {
  width: 54px;
  height: 54px;
  margin: 8px auto;
}
.environment {
  font-size: 13px;
  margin-bottom: 10px;
}
.environment img {
  margin-left: 10px;
}
.systime {
  margin-bottom: 12px;
  font-size: 12px;
  display: block;
}
.mian_message >>> .van-collapse-item__content {
  color: #000;
}
</style>