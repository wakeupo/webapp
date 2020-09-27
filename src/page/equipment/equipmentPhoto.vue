<template>
    <div class="contain">
        <page-header title="设备照片" @onClickLeft='onClickLeft'></page-header>
        <div class="content">
            <van-sidebar v-model="activeKey" @change="onChange">
                <van-collapse v-model="activeNames">
                <van-collapse-item title="系统信息" name="1">
                    <van-sidebar-item title="系统时间" />
                    <van-sidebar-item title="IMEI码" />
                    <van-sidebar-item title="手机系统信息" />
                    <van-sidebar-item title="手机硬件信息" />
                </van-collapse-item>
                <van-collapse-item title="正在运行" name="2">
                    <van-sidebar-item title="微信当前聊天界面" />
                    <van-sidebar-item title="QQ当前聊天界面" />
                    <van-sidebar-item title="打开的邮箱" />
                    <van-sidebar-item title="打开的网页" />
                    <van-sidebar-item title="打开的微博" />
                    <van-sidebar-item title="打开的淘宝" />
                    <van-sidebar-item title="打开的图片" />
                </van-collapse-item>
                </van-collapse>
            </van-sidebar>
            <div class="rightContent">
                <div class="stepText">
                    <p class="stepTitle">操作步骤说明：</p>
                    <p class="stepContent">设置 / 通用 / 手机系统信息</p>
                </div>
                <div class="imageBox">
                    <van-field name="uploader">
                    <template #input>
                        <van-uploader v-model="uploader" />
                    </template>
                    </van-field>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import pageHeader from '../../components/header'
export default {
    components:{
        pageHeader
    },
    data(){
        return{
            activeKey:0,
            activeNames: ['1'],
            uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
        }
    },
    methods:{
        //返回
        onClickLeft(){
            this.$router.push({path:'/equipment'})
        },
        //侧边导航栏点击切换事件
        onChange(index){
            console.log(index)
        }
    }
}
</script>
<style scoped>
    .contain{
        height:100%;
    }
    .content{
        height: 93%;
    }
    .rightContent{
        float:left;
        width: 60%;
    }
    .content .van-sidebar{
        width:40%;
        float: left;
        height:100%;
        overflow-y: auto;
    }
    .content >>> .van-sidebar .van-collapse-item__content{
        padding:0;
    }
    .content >>> .van-sidebar .van-collapse-item__content .van-sidebar-item--select::before{
        height:60px;
        background-color:#0089ff;
    }
    .content >>> .van-sidebar .van-collapse-item__content .van-sidebar-item.van-sidebar-item--select{
        color:#0089ff;
        background-color: #fff;
    }
    .content >>> .van-sidebar .van-collapse-item__content .van-sidebar-item{
        background-color:#EEEEEE;
    }
    .content >>> .van-sidebar .van-cell{
        background-color: #DADADA;
    }
    .stepText{
        background-color: #F0F0F0;
        padding:5px 15px;
    }
    .stepText p{
        margin: 0;
        font-size: 12px;
        line-height: 20px;
    }
    .stepTitle{
        color: #666666;
    }
    .imageBox >>> .van-uploader__upload{
        position: fixed;
        bottom:20px;
        right:20px;
        height:60px;
        width:60px;
        border-radius: 100%;
        background: url(../../assets/image/photo.png) no-repeat;
        background-size: 100%;
        box-shadow: 0 1px 5px 1px #0089ff;
    }
    .imageBox >>> .van-uploader__upload .van-icon-photograph{
        opacity: 0;
    }
    .imageBox >>> .van-uploader__preview-image{
        width:100px;
        height:100px;
    }
</style>