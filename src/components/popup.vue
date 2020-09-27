<template>
    <div class="popcontain" v-if="ispair">
        <van-icon class="closeBtn" @click="close" name="cross"/>
        <div class="conBox">
            <p class="title">{{title}}</p>
            <ul class="list">
                <li v-for="item in list" :key="item.itemCode" @click="selectOne(item)"><span class="name">{{item.itemKey}}</span><van-icon v-show="code == item.itemCode" name="success" color="#0089ff" /></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        title: {           //字典标题
        type: String,
        default: ""
        },
        righttext: {        //右边按钮文字
        type: String,
        default: ""
        },
        lefttext: {         //左边按钮文字
        type: String,
        default: ""
        },
        ispair: {         //左边按钮文字
        type: Boolean,
        default: false
        },
        datatype:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            list:[
                {name:'手机',id:'1'},
            ],
            code:''
        }
    },
    methods:{
        //选中和关闭事件
        selectOne(item){
            this.$emit('openPopup',item)
        },
        //
        close(){
            this.$emit('openPopup')
        }
    },
    mounted:function(){
        if(this._props.datatype == "c003"){
            const typeall = JSON.parse(localStorage['alltype'])
            console.log(typeall[0])
            this.list = typeall[0].dicList
        }
    }
}
</script>
<style scoped>
    .popcontain{
        height: 100%;
        width: 100%;
        top:0;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.3);
        overflow: hidden;
        z-index: 1002;
    }
    .popcontain >>> .van-icon-cross{
        position: absolute;
        left:48%;
        top: 7%;
        font-size: 26px;
    }
    .title{
        text-align: center;
    }
    .conBox{
        width: 80%;
        height:70%;
        margin-top:20%;
        margin-left:10%;
        background-color: #fff;
        border-radius: 5px;
        padding:15px;
        box-sizing: border-box;
        overflow-y: auto;
    }
    .list li{
        padding:0 15px;
        height:40px;
        line-height: 40px;
    }
    .list li >>> .van-icon{
        float:right;
        margin-top:12px;
    }
</style>