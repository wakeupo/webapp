<template>
  <div class="contain">
    <p class="title">现场电子取证</p>
    <div class="formBox">
      <van-field
        v-model="username"
        name="警号"
        label="警号"
        label-width="40px"
        type="text"
        placeholder="请输入警号"
      />
      <van-field
        v-model="password"
        label="密码"
        placeholder="请输入密码"
        type="password"
        label-width="40px"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <van-checkbox label-disabled v-model="checked" shape="square">记住密码</van-checkbox>
      <div style="margin: 50px 30px 16px 30px;" class="subBtn">
        <van-button round block type="info" @click="login" native-type="submit">登录</van-button>
      </div>
    </div>
    <div class="ipBox" @click="changeIp">
      <p>IP:<span>{{ip}}</span>&nbsp;&nbsp;&nbsp;端口：<span>{{port}}</span></p>
    </div>
    <van-popup v-model="show" round position="bottom" :style="{ height: '30%', padding:'0 50px'}">
      <van-form @submit="onSubmit">
        <van-field
          v-model="ip"
          name="IP"
          label="IP"
          placeholder="请输入ip地址"
          :rules="[{ pattern, message: 'ip地址格式不正确' }]"
        />
        <van-field
          v-model="port"
          name="port"
          label="端口"
          placeholder="请输入端口号"
          :rules="[{ pattern:patternport, message: '端口号格式不正确' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            完成
          </van-button>
        </div>
      </van-form>
    </van-popup>
  </div>
</template>
<script>
import { Checkbox, Toast } from "vant";
import { post } from '../../assets/js/ajaxResource';
import Md5 from 'md5'
export default {
  data() {
    return {
      username: "",    //用户名
      password: "",     //用户密码
      checked: false,   //记住密码
      show:false,        //弹窗显示隐藏
      ip:'10.23.48.59',             //ip地址
      port:'8080',           //端口号
      pattern: /^((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))$/,
      patternport: /^[1-9]\d*$/
    };
  },
  methods: {
    //登录
    login() {
      let _this = this;
      if(this.username === ""){
        Toast('用户名不能为空！');
        return;
      }
      if(this.password === ""){
        Toast('密码不能为空！')
        return;
      }
      //第一次调用登录接口
      post("/api/videoService/accounts/authorize",{
        "userName" : _this.username,
        "clientType" : "android",
        "expiredTime":80000
      }).then(function(res){

      }).catch(function(res){
        if(res){
          return res; 
        }
      }).then(function(res){
        let signature  = Md5(_this.password);
        signature = Md5(_this.username+signature);
        signature = Md5(signature);
        signature = Md5(_this.username+":"+res.realm+":"+signature);
        signature = Md5(signature+":"+res.randomKey)
        //第二次调用登录接口
        post("/api/videoService/accounts/authorize",{
          "userName" : _this.username,
          "signature" : signature,
          "randomKey" : res.randomKey,
          "encryptType" : "MD5",
          "clientType" : "android",
        }).then(function(res){
          _this.$store.state.token = res.token;
          localStorage['token'] = res.token;
          //如果选择记住密码，缓存账号密码
          if(_this.checked){
            localStorage['password'] = _this.password;
            localStorage['username'] = _this.username;
          }else{
            localStorage.removeItem['password']
            localStorage.removeItem['username'];
          }
          if(localStorage['informationSuccess'] && localStorage['informationSuccess'] !=""){
              if(localStorage['guided'] && localStorage['guided'] !=""){
                _this.$router.push({path:'/index'})
              }else{
                _this.$router.push({path:'/guid'})
              }
          }else{
             _this.$router.push({path:'/improveInformation'})
          }
        })
      })
    },
    //修改ip和端口
    changeIp(){
      this.show = true;
    },
    //保存ip和端口 
    onSubmit(info){
        let signature  = Md5("system123");
        debugger
        signature = Md5("gd"+signature);
        signature = Md5(signature);
        signature = Md5("gd"+":"+"TheNextService"+":"+signature);
        signature = Md5(signature+":"+"a6be8a33b7c987f4ffb76d9c9805c7eb_c77e75fe-84cc-4dbc-b55d-649747b429b5")
    }
  },
  mounted:function(){
    localStorage.removeItem('token')
    if(localStorage['password'] != "undefined"){
      this.username = localStorage['username']
      this.password = localStorage['password']
    }
  }
};
</script>
<style scoped>
.contain >>> .van-popup{
  box-sizing: border-box;
}
.contain >>> .van-field__label{
  width:3.2em;
  color:#000;
}
.ipBox p{
  text-align: center;
  margin:10px;
  font-size: 14px;
  color:#b3b3b3;
}
.ipBox{
  position: absolute;
  bottom:0;
  width:100%;
}
.contain {
  overflow: hidden;
  height: 100%;
  background: url(../../assets/image/loginBg.png) no-repeat;
  background-size: 100% 100%;
}
.title {
  font-size: 28px;
  font-weight: bold;
  color: #0183ff;
  text-align: center;
  line-height: 50px;
  margin-top: 150px;
}
.formBox >>> .van-cell .van-cell__value .van-field__body > .van-field__control {
  background: none !important;
  font-size: 16px;
}
.formBox >>> .van-field__label > span {
  font-size: 18px;
  font-weight: bold;
  color: #000;
}
.formBox >>> .van-cell {
  padding: 20px 16px;
}
.formBox {
  padding: 0 40px;
}
.subBtn >>> .van-button {
  font-size: 18px;
}
.formBox >>> .van-checkbox {
  margin-left: 18px;
  margin-top: 15px;
}
.formBox >>> .van-checkbox span {
  color: #b3b3b3;
}
</style>