<template>
  <div id="vedio">
    <page-header
      :title="title"
      style="border-bottom: 1px solid #dadada"
      @onClickLeft="onClickLeft"
    ></page-header>
    <video controls class="vedio" autoplay>
      <source
        poster="http://60.10.25.240/api/common/UEditorDownload?suburl=image/video_loading.jpg"
        src="https://h5player.bytedance.com/video/mp4/xgplayer-demo-720p.mp4"
        type="video/mp4"
      />
    </video>
    <video
      poster="http://60.10.25.240/api/common/UEditorDownload?suburl=image/video_loading.jpg"
      autoplay
      src="https://h5player.bytedance.com/video/mp4/xgplayer-demo-720p.mp4"
      controls
    ></video>
    <div class="vedio_mian">
      <div class="mian">
        <span class="mian_left">文件名：</span>
        <span>{{ name }}</span>
      </div>
      <div class="mian">
        <span class="mian_left">大小：</span>
        <span>{{ size }}</span>
      </div>
      <div class="mian">
        <span class="mian_left">开始时间：</span>
        <span>{{ startTime }}</span>
      </div>
      <div class="mian">
        <span class="mian_left">完整性校验值：</span>
        <span class="md5">{{ resMD5 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "../../components/header";
import { post } from "../../assets/js/ajaxResource";
export default {
  components: {
    pageHeader,
  },
  data() {
    return {
      title: "录像一",
      name: "13",
      size: "46",
      startTime: "",
      resMD5: "",
      src: "https://h5player.bytedance.com/video/mp4/xgplayer-demo-720p.mp4",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "VedioReport" });
    },
    // 获取数据
    getList() {
      const {
        filePath,
        fileMD5,
        fileCreateTime,
        fileDuration,
      } = this.$route.params.list;
      this.name = filePath;
      this.resMD5 = fileMD5;
      this.startTime = fileCreateTime;
      this.src = filePath;
    },
  },
  created() {
    this.getList();
    let data_ = {
      condition: {
        keyCondition: {
          caseName: "",
        },
        querySource: 0,
      },
      page: 1,
      pageSize: 20,
    };
    post("/api/ci/case/casesList", data_).then(() => {
      debugger;
    });
  },
};
</script>

<style scoped>
#vedio .vedio {
  width: 330px;
  height: 165px;
  margin: 61px auto 15px;
  display: block;
  border-radius: 8px;
}
.mian {
  margin-bottom: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow: hidden;
}
.vedio_mian {
  margin-left: 30px;
  padding-top: 10px;
  font-size: 15px;
}
.mian_left {
  font-size: 11px;
  color: #999;
}
.md5{
  display: block;
  line-height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>