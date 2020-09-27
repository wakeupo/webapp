<!-- 服务协议与隐私政策 -->
<template>
  <div id="conceal">
    <page-header @onClickLeft="onClickLeft" :title="title" style="border-bottom:1px solid #d1d1d1;"></page-header>
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
      title: "服务协议与隐私政策"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "Setting" });
    }
  }
};
</script>

<style scoped>
#conceal {
  background: #f5f5f5;
  height: 100%;
  background-size: 100%;
}
</style>