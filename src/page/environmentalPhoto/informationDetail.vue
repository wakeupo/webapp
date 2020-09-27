<template>
    <div class="contain">
        <page-header title="照片详情" @onClickLeft='onClickLeft'></page-header>
        <div class="swiperBox">
            <van-swipe @change="onChange" :autoplay="3000000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <van-image
                :src="image"
                />
            </van-swipe-item>
            <template #indicator>
                <div class="custom-indicator">
                {{ current + 1 }}/2
                </div>
            </template>
            </van-swipe>
        </div>
        <div class="detail">
            <p class="title">整体环境001</p>
            <p><span>备注：</span><span class="noteText">现场勘查整体环境照片</span></p>
            <p><span>Md5码：</span><span class="md5Num">ASFDE-5545556556-41FSDFH455455455</span></p>
            <p><span>描述：</span><span class="describle"><span>这是很长一段描述，这是很长一段描述，这是很长
一段描述，这是很长一段描述。</span><span class="write" @click="openWrite">编辑</span></span></p>
        </div>
        <van-popup v-model="show" round position="bottom" :style="{ height: '30%' }">
            <p class="button"><span @click="cancel">取消</span><span @click="sure">保存</span></p>
            <van-field
            v-model="message"
            rows="4"
            autosize
            type="textarea"
            placeholder="请输入描述"
            />
        </van-popup>
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
             images: [
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg',
            ],
            current: 0,
            show:false,
            message:''
        }
    },
    methods:{
        //返回事件
        onClickLeft(){
            this.$router.push({path:'/equipmentPhoto'})
        },
        onChange(index){
            this.current = index;
        },
        //打开编辑弹窗
        openWrite(){
            this.show=true;
        },
        //取消
        cancel(){
            this.show = false;
        },
        //保存
        sure(){
            this.show = false;
        }
    }
}
</script>
<style scoped>
    .swiperBox >>> .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 16px;
    }
    .detail{
        padding:15px;
    }
    .detail p>span:first-child{
        color:#929292;
        width: 20%;
        display: inline-block;
        vertical-align: top;
    }
    .detail p span:nth-child(2){
        width: 80%;
        display: inline-block;
    }
    .title{
        font-size: 24px;
        font-weight: bold;
    }
    .noteText{
        width:70%;
        display:inline-block;
    }
    .write{
        color:#0183ff;
        margin-left: 10px;
    }
    .button{
        padding:0 15px;
    }
    .button span:last-child{
        float:right;
    }
</style>