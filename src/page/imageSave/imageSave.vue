<template>
    <div class="contain">
        <div class="imageBox">
            <van-image width="100" height="100" :src="require('../../assets/image/AdditionalCommentBg.png')" />
        </div>
        <div class="textBox">
            <p class="title">整体环境_PIC000</p>
            <p class="Pid"><span>MD5码</span><span>ASFDE-5545556556-41FSDFH45545
5455</span></p>
            <p class="Pid"><span>备注</span><span>现场勘查整体环境照片</span></p>
            <van-field
            v-model="message"
            rows="3"
            autosize
            label="描述"
            type="textarea"
            placeholder="请输入描述信息"
            />
            <van-row>
                <van-col span="12">
                    <van-button size="large" type="default">取消</van-button>
                </van-col>
                <van-col span="12">
                    <van-button @click="goto" size="large" type="info">保存</van-button>
                </van-col>
            </van-row>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message:''
        }
    },
    methods:{
        goto(){
            this.$router.push({path:'/environmentalPhoto'})
        }
    }
}
</script>
<style scoped>
    .contain{
        height:100%;
    }
    .imageBox{
        width:100%;
        height:50%;
        background-color:grey;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .imageBox img{
        max-width: 100%;
        height:auto;
    }
    .title{
        text-align: center;
        font-size:26px;
        font-weight: bold;
        margin: 0;
        padding:25px 0;
    }
    .Pid span{
        display: inline-block;
    }
    .Pid{
        padding:0 15px;
        color:#313131;
        display: flex;
        align-items: flex-start
    }
    .Pid span:first-child{
        display: inline-block;
        width:50px;
    }
    .Pid span:last-child{
        margin-left:15px;
        width:80%;
    }
    .footerBtn div{
        float:left;

    }
    .textBox{
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        background-color:#fff;
        margin-top: -10px;
    }
    .textBox >>> .van-col{
        padding:10px 15px;
    }
    .textBox >>> .van-col .van-button--default{
        background-color:#ecedee;
    }
    .textBox >>> .van-col .van-button--large{
        height: 40px;
    }
    .textBox >>> .van-row{
        position: absolute;
        bottom:0;
        width:100%;
    }
    .textBox >>> .van-field__label{
        width:50px;
    }
    .textBox >>> .van-field__control{
        font-size: 16px;
    }
</style>
