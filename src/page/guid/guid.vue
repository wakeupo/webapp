<template>
  <div>
    <div class="contain" :class="[isBlur?'toblur':'']">
        <div class="dwrap"></div>
        <van-image v-show="isHighLigth==1" class="guidimage" :src="require('../../assets/image/importCase.png')"/>
        <van-image v-show="isHighLigth==2" class="guidimage guidimage2" :src="require('../../assets/image/mycase.png')"/>
        <van-image v-show="isHighLigth==3" class="guidimage guidimage3" :src="require('../../assets/image/vedioTip.png')"/>
        <van-image v-show="isHighLigth==4" class="guidimage guidimage4" :src="require('../../assets/image/stepTip.png')"/>
        <van-image v-show="isHighLigth==5" class="guidimagebt guidimage5" :src="require('../../assets/image/menuTip.png')"/>
        <van-image v-show="isHighLigth==5" class="guidimagesm guidimage5" :src="require('../../assets/image/oneKey.png')"/>
        <div @click="isHighLigth++" v-show="isHighLigth!=5" class="nextBtn"><span>我知道了</span></div>
        <div @click="gotoStart" v-show="isHighLigth==5" class="startBtn"><span>开始体验</span></div>
      <div class="con-top">
        <div class="userInfo">
          <van-image round width="3rem" height="3rem" :src="require('../../assets/image/person.png')" />
          <span class="userName">王警官</span>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item :class="isHighLigth == 1?'higthLigth':''">
              <div class="divBox">
                  <van-image :src="require('../../assets/image/writeIn.png')" />
                    <p>录入案件</p>
              </div>
          </van-grid-item>
          <van-grid-item :class="isHighLigth == 2?'higthLigth':''">
              <div class="divBox">
                <van-image :src="require('../../assets/image/myEvdence.png')" />
                <p>我的取证</p>
              </div>
          </van-grid-item>
          <van-grid-item :class="isHighLigth == 3?'higthLigth':''">
            <div class="divBox">
                <van-image :src="require('../../assets/image/vedio.png')" />
                <p>录像取证</p>
            </div>
          </van-grid-item>
        </van-grid>
      </div>
      <div>
        <div class="con-middle">
        <div class="card-list">
          <p class="caseName">xxxxxxxxxxxxxx案件</p>
          <p class="codeNum">
            <span>编号：xxxxxxxxxxxxx编号</span>
          </p>
          <p class="catchPerson">
            抓捕对象：
            <span>xxx</span>
          </p>
          <div class="stepBox" :class="isHighLigth==4?'higthLigth':''">
            <p class="active">
              <span class="addline">❶</span>
              <span>案件录入</span>
            </p>
            <p>
              <span class="addline">❷</span>
              <span>拍照取证</span>
            </p>
            <p>
              <span class="addline">❸</span>
              <span>报告编辑</span>
            </p>
            <p>
              <span>❹</span>
              <span>完成取证</span>
            </p>
          </div>
        </div>
      </div>
      <page-footer
        homeColor="#1989fa"
        mineColor="#B8B8B8"
      ></page-footer>
      </div>
      
    </div>
    <div v-if="isBlur" class="wrap">
      <transition appear name="slide-fade">
        <p v-if="show" class="largetext">现场电子取证</p>
      </transition>
      <transition appear name="slide-fader">
        <p v-if="show" class="smalltext">电子行业取证专家</p>
      </transition>
      <div class="btnlist">
        <transition name="slide-up1" appear>
          <div v-if="show" class="listone">
            <img src="../../assets/image/environmental.png" />
            <p>1-环境拍照</p>
          </div>
        </transition>
        <transition name="slide-up2" appear>
          <div
            v-if="show"
            class="listone"
            ref="EquipmentEntry"
            @click="gotoEquipment"
            :style="{'pointerEvents':step<=2&&step>1?'auto':'none'}"
          >
            <img src="../../assets/image/equipment.png" />
            <p>2-设备取证</p>
          </div>
        </transition>
        <transition name="slide-up3" appear>
          <div v-if="show" class="listone" :style="{'pointerEvents':step<=3&&step>2?'auto':'none'}">
            <img src="../../assets/image/sealup.png" />
            <p>3-封存合照</p>
          </div>
        </transition>
        <transition name="slide-up4" appear>
          <div
            v-if="show"
            class="listone"
            @click="gotoSuspectMsg"
            :style="{'pointerEvents':step<=4&&step>3?'auto':'none'}"
          >
            <img src="../../assets/image/suspect.png" />
            <p>4-嫌疑人录入</p>
          </div>
        </transition>
      </div>
      <p class="closeBtn" v-if="isshow">
        <van-icon name="cross" color="#666666" size="30" @click="isshow" />
      </p>
    </div>
  </div>
</template>
<script>
import pageFooter from "../../components/footer";
import { mapState } from "vuex";
export default {
  components: {
    pageFooter
  },
  computed: {
    ...mapState(["step"])
  },
  data() {
    return {
      isBlur: false,
      show: false,
      caseName:'',          //案件名称
      username: "",         //用户名称
      userPicUrl: "",       //用户头像
      caseCode:"",            //案件编码
      catchObj:"",
      isHighLigth:1
    };
  },
  methods: {
    gotoStart(){
        localStorage['guided'] = '1';
        this.$router.push({path:'/index'})
    }
  },
  mounted: function() {
    
  }
};
</script>
<style scoped>
.nextBtn{
    position: absolute;
    width:100%;
    text-align: center;
    z-index: 10000;
    top:75%;
}
.startBtn{
    position: absolute;
    width:100%;
    text-align: center;
    z-index: 10000;
    top:50%;
}
.startBtn span{
    line-height: 50px;
    padding:0 80px;
    color:#EDEDED;
    height: 50px;
    display: inline-block;
    border-radius: 25px;
    background-color:#0183ff;
}
.nextBtn span{
    line-height: 50px;
    padding:0 80px;
    border:1px solid #EDEDED;
    color:#EDEDED;
    height: 50px;
    display: inline-block;
    border-radius: 25px;
}
.guidimage{
    position: absolute;
    z-index: 10000;
    width:50%;
    top:35%;
    left:6%;
}
.guidimagebt{
    position: absolute;
    z-index: 10000;
    bottom:0;
}
.guidimagesm{
    position: absolute;
    z-index: 10000;
    width:30%;
    right:13%;
    bottom:1%;
}
.guidimage.guidimage2{
    left:40%;
}
.guidimage.guidimage3{
    left:40%;
}
.guidimage.guidimage4{
    left:20%;
    top:60%;
}
.dwrap{
    position: absolute;
    background-color:rgba(0,0,0,0.5);
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index: 9999;
}
.divBox{
    background-color:#0183ff;
    text-align: center;
    width: 85%;
    border-radius: 10px;
    padding-top:10px;
}
.higthLigth{
    z-index:10000;
    position: relative;
}
.closeBtn {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 10px;
}
.btnlist {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 100px;
}
.btnlist .listone {
  float: left;
  width: 25%;
  background-color: transparent;
  text-align: center;
  bottom: -600px;
}
.listone img {
  width: 70px;
  height: 70px;
}
.listone p {
  margin: 5px 0;
  font-size: 13px;
}
.contain {
  height: 100%;
  background-color: #f3f3f3;
}
.contain.toblur {
  -webkit-filter: blur(50px);
  -moz-filter: blur(40px);
  -o-filter: blur(40px);
  -ms-filter: blur(40px);
  filter: blur(50px);
}
.con-top {
  background-image: linear-gradient(#02aad8 1%, #0183ff);
}
.con-top .userInfo {
  text-align: left;
  padding: 60px 50px 0px 50px;
}
.con-top >>> .van-grid .van-grid-item__content {
  background: transparent;
}
.con-top >>> .van-image {
  vertical-align: middle;
}
.userName {
  font-size: 20px;
  color: #fff;
  margin-left: 15px;
}
.con-top >>> .van-grid p {
  color: #fff;
  margin:7px 0 15px 0;
}
.con-top >>> .van-grid img {
  width: 40px;
  height: auto;
}
.con-middle{
  background-color: #eeeeee;
  padding:10px 0;
  margin-top:-10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.con-middle .card-list {
  margin: 0px 15px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
}
.con-middle .card-list .caseName {
  color: #000;
  font-size: 22px;
  font-weight: bold;
}
.con-middle .card-list p {
  text-align: left;
  margin: 0;
  margin-bottom: 10px;
}
.codeNum span {
  font-size: 12px;
  background-color: #ededed;
  display: inline-block;
  padding: 1px 8px;
  color: #313131;
}
.catchPerson {
  color: #999999;
}
.stepBox {
  text-align: left;
  background-color: #e2e2e2;
  padding: 7px 5px;
  border-radius: 3px;
}
.stepBox p > span:first-child {
  display: inline-block;
  width: 100%;
  font-size: 18px;
  position: relative;
  color: #b8b8b8;
  z-index: 999;
}
.stepBox p > span:last-child {
  font-size: 12px;
  color: #313131;
}
.addline::after {
  content: "";
  display: inline-block;
  border-top: 2px solid #b8b8b8;
  position: absolute;
  left: 25%;
  top: 50%;
  width: 80%;
  z-index: -1;
}
.stepBox p {
  display: inline-block;
  width: 23%;
  margin-bottom: 0 !important;
}
.stepBox p.active span {
  color: #0183ff;
}
.wrap {
  position: absolute;
  background-color: transparent;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.largetext {
  font-size: 40px;
  color: #000;
  padding-left: 30px;
  top: 18%;
  position: absolute;
}
.smalltext {
  padding-left: 30px;
  position: absolute;
  margin: 0;
  top: 32%;
}
</style>