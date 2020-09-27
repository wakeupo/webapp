<!--电子签名 -->
<template>
  <div>
    <canvas ref="box" id="box" style="box-sizing: content-box"></canvas>
    <button @click="clear">清空</button>
    <button @click="save">保存</button>
    <img :src="src" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "",
    };
  },
  methods: {
    // 电子签名
    sign() {
      let box = this.$refs.box;
      let ctx = box.getContext("2d");
      box.width = window.screen.width;
      box.height = 200;

      document.body.addEventListener(
        "touchmove",
        function (e) {
          e.preventDefault();
        },
        { passive: false }
      );

      box.ontouchstart = function (e) {
        ctx.beginPath();
        moveTo(
          e.touches[0].pageX - box.offsetLeft,
          e.touches[0].pageY - box.offsetTop
        );
      };
      box.ontouchmove = function (e) {
        ctx.lineTo(
          e.touches[0].pageX - box.offsetLeft,
          e.touches[0].pageY - box.offsetTop
        );
        ctx.lineWidth = 2;
        ctx.stroke();
      };
      box.ontouchend = function () {
        ctx.closePath();
      };
    },
    // 清屏操作
    clear() {
      let ctx = box.getContext("2d");
      ctx.clearRect(0, 0, box.width, box.height);
    },
    // 保存签名
    save() {
      let cavurl = box.toDataURL();
      localStorage.setItem("cavurl", cavurl);
      this.src = localStorage.getItem("cavurl");
    },
  },
  mounted() {
    // 初始化电子签名
    this.sign();
  },
};
</script>

<style>
</style>