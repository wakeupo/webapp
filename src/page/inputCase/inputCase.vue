<!-- 录入案件 -->
<template>
  <div class="contain">
    <page-header title="案件信息" @onClickLeft="onClickLeft"></page-header>
    <div class="content">
      <van-form @submit="onSubmit">
      <van-field
        v-model="caseCode"
        label="案件编号"
        placeholder="请输入案件编号"
        input-align="right"
        right-icon="search"
        @click-right-icon="selectCase"
      />
      <van-field
        v-model="caseName"
        required
        label="案件名称"
        placeholder="请输入案件名称"
        input-align="right"
        right-icon="search"
        @click-right-icon="selectCase"
      />
      <van-field
        v-model="caseType"
        required
        readonly
        label="案件类别"
        placeholder="请选择案件类别"
        input-align="right"
        right-icon="arrow"
        @click="isShowPopup = !isShowPopup"
      />
      <van-field v-model="catchObj" required label="抓捕对象" placeholder="请输入抓捕对象" input-align="right" />
      <van-field v-model="catchAre" required label="抓捕地区" placeholder="请输入抓捕地区" input-align="right" />
      <van-field v-model="catchPolice" required label="抓捕民警" placeholder="请输入抓捕民警" input-align="right" />
      <van-field v-model="catchLeader" required label="抓捕组长" placeholder="请输入抓捕组长" input-align="right" />
      <van-field
        v-model="reason"
        rows="3"
        autosize
        label="勘验事由"
        type="textarea"
        placeholder="请输入勘验事由"
      />
      <p class="userInfo">取证民警</p>
      <van-cell-group>
        <van-cell title="单位" :value="deptName" />
        <van-cell title="姓名" :value="name" />
        <van-cell title="手机" :value="phone" />
        <div class="selectBtn">
          <span>角色</span>
          <p @click="evidenceType = '1'" :class="evidenceType == 1?'active':''">拍照取证</p>
          <p @click="evidenceType = '2'" :class="evidenceType == 2?'active':''">录像取证</p>
        </div>
      </van-cell-group>
      <div class="footerBtn">
        <van-button type="info" size="large" native-type="submit">完成</van-button>
      </div>
      </van-form>
    </div>
    <Popup @openPopup="openPopup" datatype="c003" :ispair="isShowPopup" title="类别"></Popup>
  </div>
</template>
<script>
import pageHeader from "../../components/header";
import Popup from "../../components/popup";
import {post} from '../../assets/js/ajaxResource';
import {put} from '../../assets/js/ajaxResource';
import {get} from '../../assets/js/ajaxResource';
import { Toast } from 'vant';
export default {
  components: {
    pageHeader,
    Popup
  },
  data() {
    return {
      caseCode: "",      //案件编号
      reason: "",        //勘验事由
      caseName:'',     //案件名称
      caseType:'',     //案件类别 
      catchObj:'',      //抓捕对象
      catchAre:'',        //抓捕地区
      recordIdx:'',
      catchPolice:'',       //抓捕民警
      catchLeader:'',      //抓捕组长
      evidenceType: '1',      //照片和录像选择
      deptName:localStorage['dept']?localStorage['dept']:'',         //用户单位
      name:localStorage['name']?localStorage['name']:'',             //用户名称
      phone:localStorage['phone']?localStorage['phone']:'',              //用户手机号
      isShowPopup:false                        //案件类别弹窗
    };
  },
  methods: {
    //返回事件
    onClickLeft() {
      this.$router.push({ path: "/index" });
    },
    //如果是修改，初始化数据
    startData(){
      if(this.recordIdx && this.recordIdx != ""){
        get('/api/ci/case/'+this.recordIdx+'/0',{}).then((res)=>{
          this.caseCode = res.caseCode,
          this.caseName = res.caseName,
          this.caseType = res.catchCaseType,
          this.catchObj = res.catchTarget,
          this.catchAre = res.catchArea,
          this.catchPolice = res.catchPolice,
          this.catchLeader = res.catchLeader,
          this.reason = res.inquestEvent
        })
      }
    },
    //选择案件
    selectCase() {
      this.$router.push({ path: "/selectCase" });
    },
    //选择案件类别
    openPopup(item){
      this.caseType = item.itemKey;
      this.isShowPopup = !this.isShowPopup;
    },
    // 跳转案件页面
    onSubmit() {
      let this_ =this;
      let nowTime = new Date()
      let nowTimeBig = nowTime.getTime();
      const data_ = [{
          "caseCode":this.caseCode,
          "caseName":this.caseName,
          "catchCaseType":this.caseType,
          "catchTarget":this.catchObj,
          "catchArea":this.catchAre,
          "catchPolice":this.catchPolice,
          "catchLeader":this.catchLeader,
          "inquestEvent":this.reason,
          "evidenceType":this.evidenceType
      }]
      post("/api/ci/case",data_).then((res)=>{
        if(res.recordIdx){
          //这个到时候要保存在app设备端
          localStorage['recordIdx'] = res.recordIdx;
          localStorage['evidenceType'] = this_.evidenceType;
          localStorage['caseDetail'] = JSON.stringify(data_);
          Toast('保存成功！')
          setTimeout(()=>{
            this_.$router.push({
              path:'/index'
            })
          },1000)
        }
      }).catch((res)=>{
        debugger;
        if(res.code == 13001002){
          data_[0].recordIdx = this_.recordIdx;
          put("/api/ci/case",data_).then((res)=>{
            localStorage['recordIdx'] = this_.recordIdx
            localStorage['evidenceType'] = this_.evidenceType;
            localStorage['caseDetail'] = JSON.stringify(data_)
            Toast('保存成功！')
            setTimeout(()=>{
              this_.$router.push({
                path:'/index'
              })
            },1000)
          })
        }
      })
      //this.$router.push({ path: "/workFlow" });
    }
  },
  mounted:function(){
    if(this.$route.query.caseCode){
      this.caseCode = this.$route.query.caseCode;
    }
    if(this.$route.query.caseName){
      this.caseName = this.$route.query.caseName;
    }
    if(this.$route.query.recordIdx){
      this.recordIdx = this.$route.query.recordIdx;
    }
    if(localStorage['evidenceType']){
      this.evidenceType = localStorage['evidenceType'];
    }
    //如果是修改，初始化数据
    this.startData();
  }
};
</script>
<style scoped>
.content{
  margin-top:50px;
}
.content >>> .van-cell:nth-child(1) .van-field__control,
.content >>> .van-cell:nth-child(2) .van-field__control {
  padding-right: 10px;
  border-right: 1px solid #cccccc;
}
.userInfo {
  padding-left: 15px;
  font-size: 14px;
  color: #afafaf;
  background-color: #f5f5f5;
  line-height: 30px;
}
.selectBtn {
  padding: 10px 15px;
}
.selectBtn p.active {
  background-color: #0183ff;
  color: #fff;
}
.selectBtn p {
  border: 1px solid #dadada;
  padding: 4px 10px;
  border-radius: 5px;
  font-size: 12px;
  background-color: #f5f5f5;
  float: right;
  margin: 0 20px 0 0;
}
.footerBtn {
  padding: 100px 20px 20px 20px;
}
</style>