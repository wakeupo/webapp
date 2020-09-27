<template>
  <div class="MyEvidence_now" @click="onClick">
    <div class="now_left">
      <img :src="leftimg" alt class="file" />
      <div class="now_message">
        <div>
          <span style="font-size:14px;" v-html="title"></span>
          <span class="doing" v-if="ondoing">{{doing}}</span>
        </div>
        <div class="content" v-if="content"><span v-if="size">大小：</span>{{contenttext}}</div>
        <div class="time"><span v-if="startTime">开始时间：</span>{{time}}</div>
      </div>
    </div>
    <img src="../assets/image/return.png" alt class="inside" v-if="jump" />
    <div class="getevidence" v-if="getevidence" @click="onClickRight">取证</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    leftimg: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    ondoing: {
      type: Boolean,
      default: false
    },
    doing: {
      type: String,
      default: "进行中"
    },
    time: {
      type: String,
      default: ""
    },
    jump: {
      type: Boolean,
      default: false
    },
    getevidence: {
      type: Boolean,
      default: false
    },
    content: {
      type: Boolean,
      default: false
    },
    contenttext: {
      type: String,
      default: ""
    },
    searchKey:{
      type: String,
      default: ""
    },
    startTime:{
      type:Boolean,
      default:false
    },
    size:{
      type:Boolean,
      default:false
    }
  },
  methods: {
    onClickRight() {
      this.$emit("onClickRight");
    },
    onClick() {
      this.$emit("onClick");
    }
  }
};
</script>

<style scoped>
.MyEvidence_now {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  padding: 0 15px;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
}
.now_message .doing {
  font-size: 10px;
  background: #ff7212;
  border-radius: 9px;
  padding: 0 5px;
  height: 18px;
  display: inline-block;
  text-align: center;
  line-height: 18px;
  color: #fff;
  margin-left: 8px;
}
.now_message .time {
  font-size: 9px;
  color: #afafaf;
  margin-top: 9px;
}
.now_message .content {
  font-size: 9px;
  color: #afafaf;
  margin-top: 2px;
}
.now_left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.MyEvidence_now .file {
  width: 24px;
  margin-right: 14px;
  height: auto;
}
.MyEvidence_now .inside {
  width: 7px;
  height: 12px;
  transform: rotate(180deg);
}
.getevidence {
  width: 60px;
  height: 24px;
  text-align: center;
  background: #0183ff;
  font-size: 12px;
  color: #fff;
  line-height: 24px;
  border-radius: 12px;
}
</style>