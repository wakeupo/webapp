<template>
    <div class="contain">
        <page-header :istranslate=true @onClickLeft='onClickLeft'></page-header>
        <p class="title">完善信息</p>
        <van-form @submit="onSubmit">
        <div class="contentBox">
            <van-field v-model="username" readonly label-width="40px" label="姓名"/>
            <van-field v-model="policenum" readonly label-width="40px" label="警号"/>
            <van-field
             v-model="phonenum"  
             label-width="40px" 
             label="手机" 
             placeholder="请输入手机"
             :rules="[{ pattern, message: '请输入正确手机号' }]"
             />
            <van-field v-model="commpany" label-width="40px" label="单位" placeholder="请输入单位"/>
            <van-field v-model="simpleCom" label-width="75px" label="单位简称" placeholder="请输入单位简称"/>
        </div>
        <div class="btnBox">
            <van-button round block size="large" native-type="submit" type="info">完成</van-button>
        </div>
        </van-form>
    </div>
</template>
<script>
import { NavBar } from 'vant';
import pageHeader from '../../components/header'
import {get} from '../../assets/js/ajaxResource'
import {put} from '../../assets/js/ajaxResource'
export default {
    components:{
        pageHeader
    },
    data(){
        return{
            username:"",       //用户姓名
            userCode:"",        //用户编号
            policenum:"",       //用户警号
            phonenum:"",        //手机号码
            commpany:"",        //单位
            pattern:/^1(3|4|5|6|7|8|9)\d{9}$/,     //手机正则校验
            deptCode:"",         //部门编号
            userType:"",            //用户角色
            roles:"" || [],         //用户角色
            userName:"",            //用户名
            simpleCom:"",           //部门简称
            isReuse:1              //是否复用 0 不复用，1复用
        }
    },
    methods:{
        //获取用户信息
        getUserInfo(){
            let this_ = this;
            get('/api/ras/user/info',{}).then((res)=>{
                this_.username = res.name;
                this_.userCode = res.userCode;
                this_.policenum = res.policeCode;
                this_.phonenum = res.terminalPhone;
                const userMemo = res.userMemo?eval("("+res.userMemo+")"):'';
                this_.commpany = userMemo?userMemo.commpany:res.deptName;
                this_.simpleCom = userMemo?userMemo.simpleCom:"";
                this_.deptCode = res.deptCode;
                this_.userType = res.userType;
                this_.roles = res.roles;
                this_.userName = res.userName;
                this_.isReuse = res.isReuse;
                localStorage['name'] = res.name;
                localStorage['phone'] = res.terminalPhone;
                localStorage['dept'] = userMemo?userMemo.commpany:res.deptName;
                localStorage['userPicUrl'] = res.userPicUrl?res.userPicUrl:"";
            })
        },
        //提交按钮事件
        onSubmit(){
            let _this = this;
            const data_ = {
                "name": _this.username,
                "policeCode":_this.policenum,
                "terminalPhone":_this.phonenum,
                "deptCode":_this.deptCode,
                "userType":_this.userType,
                "roles":[
                    _this.roles[0].roleCode?_this.roles[0].roleCode:_this.roles[0]
                ],
                "userName":_this.userName,
                "userMemo":"{"+
                    "commpany:"+'"'+_this.commpany+'"'+","+ 
                    "simpleCom:"+'"'+_this.simpleCom+'"'+
                "}",
                "isReuse":_this.isReuse
            }
            //完成接口
            put("/api/ras/user/"+_this.userCode,data_).then((res)=>{
                //用于完善信息
                localStorage['informationSuccess'] = '1'
                this.$router.push({path:'/guid'})
            })
        },
        //返回事件
        onClickLeft(){
            this.$router.push({path:'/login'})
        }
    },
    mounted:function(){
        //进入首页首先执行获取用户信息的方法
        this.getUserInfo();
    }
}
</script>
<style scoped>
    .contain{
        height:100%;
        overflow: hidden;
        background: url(../../assets/image/improveInformation.png) no-repeat;
        background-size: 100%;
    }
    .title{
        font-size: 32px;
        color:#000;
        font-weight: bold;
        text-align: center;
        margin-top: 100px;
    }
    .btnBox{
        margin:50px 100px;
    }
    .contentBox{
        padding:15px 60px;
    }
    .contentBox >>> .van-field__label>span{
        font-size: 18px;
        font-weight: bolder;
        color: #000;
    }
    .btnBox >>> .van-button{
        font-size: 18px;
    }
    .contentBox >>> .van-cell{
        padding:30px 0px 10px 0px;
    }
    .contentBox >>> .van-cell .van-cell__value .van-field__body>.van-field__control{
        font-size: 18px;
    }
    .contentBox >>> .van-cell{
        border-bottom:1px solid #e2e2e2;
    }
</style>