<template>
  <div class="contain">
    <page-header title="环境照片" @onClickLeft="onClickLeft"></page-header>
    <div class="imageBox">
      <van-row gutter="20" type="flex" justify="center">
        <van-col span="8">
          <van-image :src="require('../../assets/image/logo.png')" />
        </van-col>
        <van-col span="8">
          <van-image :src="require('../../assets/image/logo.png')" />
        </van-col>
        <van-col span="8">
          <van-image :src="require('../../assets/image/logo.png')" />
        </van-col>
      </van-row>
    </div>
    <div class="photoBtn">
      <van-image :src="require('../../assets/image/photo.png')" />
    </div>
  </div>
</template>
<script>
import pageHeader from "../../components/header";
export default {
  components: {
    pageHeader
  },
  data() {
    return {
    };
  },
  methods: {
    //返回按钮
    onClickLeft() {
      this.$store.state.step = 2;
      this.$router.push({ path: "/workFlow" });
    }
  }
};
</script>
<style scoped>
    .imageBox{
        padding:50px 15px 20px;
        box-sizing: border-box;
    }
    .photoBtn{
        width:70px;
        height:70px;
        position: fixed;
        bottom:30px;
        right:30px;
        z-index: 99;
        box-shadow: 3px 2px 10px 1px #79A6E2;
        border-radius: 100%;
    }
</style>