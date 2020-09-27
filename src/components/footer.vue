<template>
  <div class="footer">
    <van-grid :border="false" :column-num="3">
      <van-grid-item @click="gotoHome">
        <van-icon name="wap-home" :color="homeColor" />
        <p class="tabName">主页</p>
      </van-grid-item>
      <van-grid-item>
        <van-image @click="openWrap" :src="require('../assets/image/gotoPhoto.png')" />
        <p class="circle"></p>
      </van-grid-item>
      <van-grid-item @click="gotoMine">
        <van-icon name="manager" :color="mineColor" />
        <p class="tabName">我的</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  props:{
    homeColor:{
      type: String,
      default: ""
    },
    mineColor:{
      type: String,
      default: ""
    }
  },
  data() {
    return {

    }
  },
  methods: {
    openWrap() {
      this.$emit("openWrap");
    },
    gotoMine() {
      this.$emit("gotoMine");
    },
    gotoHome() {
      this.$emit("gotoHome");
    }
  },
  mounted:function(){
    
  }
};
</script>
<style scoped>
.van-grid-item__content {
  background: red;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.footer >>> .van-grid {
  border-top: 1px solid #e2e2e2;
  height: 60px;
}
.footer >>> .van-grid .van-grid-item__content {
  height: 60px;
}
.footer >>> .van-grid .van-grid-item:nth-child(1) .van-icon,
.footer >>> .van-grid .van-grid-item:nth-child(3) .van-icon {
  font-size:28px;
}
.footer >>> .van-grid .van-grid-item:nth-child(2) img {
  width: 60px;
  height: auto;
  margin: 10px auto;
}
.footer .van-grid .van-grid-item:nth-child(2) .van-image {
  bottom: 7px;
  height: 79px;
  width: 81px;
  border-radius: 50%;
  background-color: #fff;
}
.tabName {
  font-size: 12px;
  margin: 0;
}
.footer >>> .van-grid .van-grid-item__content {
  padding: 0;
}
.circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid #e2e2e2;
  position: absolute;
  top: -35px;
  z-index: -1;
}
</style>