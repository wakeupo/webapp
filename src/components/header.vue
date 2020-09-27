<template>
  <div class="headerBox" :class="istranslate?'trans':''">
    <div v-show="isshow">
      <van-nav-bar
        :left-arrow="arrow"
        :title="title"
        :right-text="righttext"
        :left-text="lefttext"
        :border="border"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template v-if="isSearch" #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </div>
    <div v-show="!isshow">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      //标题
      type: String,
      default: ""
    },
    righttext: {
      //右边按钮文字
      type: String,
      default: ""
    },
    lefttext: {
      //左边按钮文字
      type: String,
      default: ""
    },
    border: {
      //是否有边框
      type: Boolean,
      default: false
    },
    isSearch: {
      //是否显示搜索框
      type: Boolean,
      default: false
    },
    arrow: {
      type: Boolean,
      default: true
    },
    istranslate:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      isshow: true, //显示和隐藏navbar或者搜索框
      value: "" //搜索框里的内容
    };
  },
  methods: {
    //左边返回键
    onClickLeft() {
      this.$emit("onClickLeft");
    },
    //右边按键
    onClickRight() {
      if (this.isSearch) {
        this.isshow = false;
      }
      this.$emit("onClickRight");
    },
    //搜索事件
    onSearch(val) {
      this.$emit("search", val);
    },
    //搜索取消键
    onCancel() {
      if (this.isSearch) {
        this.isshow = true;
      }
    }
  }
};
</script>
<style scoped>
.headerBox.trans{
  background-color:transparent;
}
.headerBox{
  position: fixed;
  top: 0;
  width:100%;
  background-color:#fff;
  z-index: 999;
}
.headerBox >>> .van-nav-bar {
  background: transparent;
}
.headerBox >>> .van-nav-bar .van-icon {
  color: #000;
  font-size: 22px;
}
.headerBox >>> .van-nav-bar .van-nav-bar__title {
  font-size: 18px;
}
.headerBox >>> .van-search {
  padding: 6px 12px;
}
.headerBox >>> .van-nav-bar__title {
  font-weight: bold;
}
</style>