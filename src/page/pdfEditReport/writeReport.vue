<!-- pdf报告预览 -->
<template>
    <div class="contain">
        <page-header righttext="保存" style="background:#0183ff;" @onClickRight="onClickRight"></page-header>
        <div class="pageOne">
            <p class="codeNum">公  (   ) 勘〔2020〕   号</p>
            <p class="topic">现场勘验检查工作记录</p>
            <p class="unit">制作单位：<span>茂名市公安局</span></p>
        </div>
        <div class="pageTwo">
            <p class="twoTitle">现场勘验检查笔录</p>
            <p class="twoRightTitle">X公（网）勘〔XXXX〕XXX号</p>
            <p><span w30>现场勘验单位：</span><span border w70>123456</span></p>
            <p><span w33>现场勘验开始时间</span><span w15 border>2020</span>年<span w8 border>09</span>月<span w8 border>09</span>日<span w8 border>16</span>时<span w8 border>32</span>分</p>
            <p><span w33>现场勘验结束时间</span><span w15 border>2020</span>年<span w8 border>09</span>月<span w8 border>09</span>日<span w8 border>16</span>时<span w8 border>32</span>分</p>
            <p><span w20>现场地点：</span><span border w80>123456</span></p>
            <p><span w35>指挥人姓名，单位：</span><span border w65>123456</span></p>
            <p><span w38>侦查人员姓名，单位：</span><span border w62>123456</span></p>
            <p><span w38>记录人员姓名，单位：</span><span border w62>123456</span></p>
            <p><span w30>现场勘验单位：</span><span border w70>123456</span></p>
            <p><span w15>见证人：</span><span border w85>123456</span></p>
            <p class="reason"><span w20>勘验事由：</span><span w100>123456123456123456123456123456123456123456123456123456123456123456123456</span><ul><li></li><li></li><li></li></ul></p>
            <p class="reason sceneCase"><span w26>现场保护情况：</span><span w100>123456123456123456123456123456123456123456123456123456123456123456123456</span><ul><li></li><li></li></ul></p>
            <p><span w20>现场情况：</span><span border w80>变动现场□/&nbsp;&nbsp;&nbsp;原始现场☑</span></p>
            <p><span w20>变动原因：</span><span border w80>事主进入□/&nbsp;&nbsp;&nbsp;报案人进入☑/&nbsp;&nbsp;&nbsp;其他□</span></p>
            <p><span w10>天气：</span><span border w37>阴□/晴☑/雨□/雪□/雾□</span><span>温度：</span><span w7 border></span><span>湿度：</span><span w7 border></span><span>风向：</span><span w5 border></span></p>
            <p><span w38>现场勘验利用的光线：</span><span border w62>自然光□/&nbsp;&nbsp;&nbsp;灯光☑/&nbsp;&nbsp;&nbsp;特种光□</span></p>
            <p><span w35 style="text-indent:30px;">现场保护情况：</span><span w65 border>1234561234561</span></p>
            <p class="pageCount">第<span></span>页&nbsp;&nbsp;&nbsp;共<span></span>页</p>
        </div>
        <div class="pageThree">
            <p class="paragraphOne">
                的技术标准有：《GA/T 1170-2014移动终端取证检验方法》、《GA/T 756-2008数字化设备证据数据发现提取固定方法》。本次电子数据检查过程使用的硬件设备及软件有：民警工作手机进行拍照取证；执法记录仪进行录像取证；电子取证专家（V1.0.04301）软件。
            </p>
            <p>二、勘验过程 </p>
            <p>一）现场在XXX（发现位置，例：室内桌子上）发现有一台（颜色+品牌+类别，例：白色联想电脑）。该设备在发现时处于xx状态（状态，例：开机）对设备进行拍照，XXXXXXX（图片编号，例：电脑001打开的文档_004.jpg）,完整性校验值是：XXXXXX。XXXXXXX（图片编号，例：电脑001打开的文档_004.jpg）,完整性校验值是：XXXXXX。如下： </p>
            <ul><li v-for="(item,index) in 20" :key=index></li></ul>
            <div class="imageBox">
                
            </div>
        </div>
        <p class="pageCount">第<span></span>页&nbsp;&nbsp;&nbsp;共<span></span>页</p>
        <div class="pageFour">
            <ul><li v-for="(item,index) in 19" :key=index></li></ul>
            <div class="imageBox"></div>
            <p>对该xx（类别）进行初步检查，电子数据信息如下： </p>
            <p>1、xx（类别）的XXXXXX（电子证据类型，例：打开的文档）电子数据信息已拍照固定。XXXXXXX（图片编号，例：电脑001打开的文档_004.jpg）,完整性校验值是：XXXXXX。XXXXXXX（图片编号，例：电脑001打开的文档_005.jpg）,完整性校验值是：XXXXXX。 </p>
            <div class="imageBox"></div>
        </div>
        <p class="pageCount">第<span></span>页&nbsp;&nbsp;&nbsp;共<span></span>页</p>
        <div class="pageFive">
            <ul><li v-for="(item,index) in 21" :key=index></li></ul>
            <div class="imageBox"></div>
            <p>2、xx（类别）的XXXXXX（电子证据类型，例： MAC信息）该电子数据信息已拍照固定，原图文件名是XXXXXXX（图片编号，例：电脑001MAC信息_006.jpg）,完整性校验值是：XXXXXX。</p>
            <div class="imageBox middleImg"></div>
            <p style="text-indent:30px;">综上，将以上XXX（录入设备类型列举，例：电脑、移动硬盘、U盘）等原始存储介质查点清楚后，采取拍照固定的的方式进行固定，固定后按要求进行扣押、开列《提取痕迹、物证登记表》，至此整个勘验过程结束。</p>
        </div>
        <p class="pageCount">第<span></span>页&nbsp;&nbsp;&nbsp;共<span></span>页</p>
        <div class="pageSix">
            <ul><li v-for="(item,index) in 19" :key=index></li></ul>
            <p>xxxx年x月xx日xx时xx分结束录像,一共生成录像文件x个，生成的录像文件的名称及完整值校验值如下：</p>
            <p>文件名：xxxx.MOV</p>
            <p>文件SHA-256值：xxxxxxx </p>
            <p style="margin-top:32px;">备注：电子数据检查过程照相X张；勘验全程使用执法记录仪录像。  </p>
            <div class="pageSixBottom">
                <p style="padding-right:80px;">侦查人员：</p>
                <p>电子数据持有人（提供人）/见证人：       （电子签名） </p>
                <p>电子数据持有人（提供人）/见证人：       （手写签名）</p>
                <p style="padding-right:80px;">记录人：</p>
            </div>
        </div>
        <p class="pageCount">第<span></span>页&nbsp;&nbsp;&nbsp;共<span></span>页</p>
        <div class="pageSeven">
            <p>附件 1</p>
            <p class="tableTitle">提取痕迹、物证登记表</p>
            <van-row>
                <van-col span="2">序号</van-col>
                <van-col span="3">名称</van-col>
                <van-col span="4">基本特征</van-col>
                <van-col span="2">数量</van-col>
                <van-col span="4">提取部位</van-col>
                <van-col span="4">提取方法</van-col>
                <van-col span="3">提取人</van-col>
                <van-col span="2">备注</van-col>
            </van-row>
            <van-row v-for="(item,index) in 11" :key=index>
                <van-col span="2">1</van-col>
                <van-col span="3">1</van-col>
                <van-col span="4">1</van-col>
                <van-col span="2">1</van-col>
                <van-col span="4">1</van-col>
                <van-col span="4">1</van-col>
                <van-col span="3">1</van-col>
                <van-col span="2">1</van-col>
            </van-row>
            <van-row class="sevenTableB">
                <van-col span="12">
                    <p style="text-align:left;margin-top:30px;">见证人：</p>
                    <p style="text-align:right;margin-top:50px;">2020 年 09 月 10 日</p>
                </van-col>
                <van-col span="12">
                    <p style="text-align:right;margin-top:30px;margin-right:50px;">办案单位（盖章）</p>
                    <p style="text-align:right;margin-top:10px;margin-right:30px;">提取人：<span>王警官</span></p>
                    <p style="text-align:right;margin-top:5px;">2020 年 09 月 10 日</p>
                </van-col>
            </van-row>
        </div>
        <p class="pageCount">第<span></span>页&nbsp;&nbsp;&nbsp;共<span></span>页</p>
        <div class="pageEight">
            <p>附件 2</p>
            <p class="tableTitle">电子数据提取固定清单</p>
            <van-row>
                <van-col span="4">案由</van-col>
                <van-col span="20">名称</van-col>
            </van-row>
            <van-row>
                <van-col span="4">提取固定时间</van-col>
                <van-col span="20">名称</van-col>
            </van-row>
            <van-row>
                <van-col span="4">电子数据</van-col>
                <van-col span="2">类别</van-col>
                <van-col span="3">来源</van-col>
                <van-col span="3">文件格式</van-col>
                <van-col span="9">完整性校验值</van-col>
                <van-col span="3">备注</van-col>
            </van-row>
            <van-row v-for="(item,index) in 6" :key=index>
                <van-col span="4">1</van-col>
                <van-col span="2">1</van-col>
                <van-col span="3">1</van-col>
                <van-col span="3">1</van-col>
                <van-col span="9">1</van-col>
                <van-col span="3">1</van-col>
            </van-row>
            <van-row class="tableC">
                <van-col span="8">
                    <p style="text-align:left;">电子数据持有人（提供人）：</p>
                    <p style="text-align:right;margin-top:25px;">2020 年 09 月 10 日</p>
                </van-col>
                <van-col span="8">
                    <p style="text-align:left;margin-top:10px;margin-right:30px;">侦查人员：</p>
                    <p style="text-align:right;margin-top:48px;">2020 年 09 月 10 日</p>
                </van-col>
                <van-col span="8">
                    <p style="text-align:left;margin-top:10px;">办案单位（盖章）</p>
                    <p style="text-align:right;margin-top:48px;">2020 年 09 月 10 日</p>
                </van-col>
            </van-row>
        </div>
        <p class="pageCount">第<span></span>页&nbsp;&nbsp;&nbsp;共<span></span>页</p>
        <div class="pageNine">
            <p>附件 2</p>
            <p class="tableTitle">现场照片</p>
            <div class="imageBigBox">

            </div>
            <div class="imageBigBox">

            </div>
            <p class="nineDetail" style="text-align:right">照相人：<span border w35>王警官</span></p>
            <p class="nineDetail" style="text-align:right">照相时间：<span border w35>2020-09-10</span></p>
        </div>
        <p class="pageCount">第<span></span>页&nbsp;&nbsp;&nbsp;共<span></span>页</p>
        <div class="pageTen">
            <p>附件 2</p>
            <p class="tableTitle">封存合照</p>
             <van-row class="tenRowOne">
                <van-col span="2">编号</van-col>
                <van-col span="22">名称</van-col>
            </van-row>
            <van-row class="tenRowTwo">
                <van-col span="2">备注</van-col>
                <van-col span="22">名称</van-col>
            </van-row>
            <van-row class="tenRowThree">
                <van-col span="24">备注</van-col>
            </van-row>
        </div>
        <p class="pageCount">第<span></span>页&nbsp;&nbsp;&nbsp;共<span></span>页</p>
    </div>
</template>
<script>
// import "../assets/css/common.css"
import pageHeader from "../../components/header"
import htmlToPdf from "../../assets/js/htmlToPdf";

export default {
    components:{
        pageHeader
    },
    data(){
        return{
            message:""
        }
    },
    methods:{
onClickRight(){
    this.$store.state.step=8;
    this.$router.push({path:"/workFlow"})
}
    },
    mounted(){
        // htmlToPdf.downloadPDF( document.querySelector('.contain'),'我的PDF');
    }
}
</script>
<style scoped> 
.contain >>> .van-nav-bar {
  background: #0183ff;
}
.contain >>> .van-nav-bar__text,
.contain >>> .van-nav-bar .van-icon {
  color: #fff;
}
    .pageTen >>> .van-row.tenRowOne .van-col{
        height:50px;
    }
    .pageTen >>> .van-row.tenRowTwo .van-col{
        height:80px;
    }
    .pageTen >>> .van-row.tenRowThree .van-col{
        height:200px;
    }
    .nineDetail span{
        display: inline-block;
        text-align: left;
    }
    .imageBigBox{
        width:350px;
        height:150px;
        border:1px solid #000;
        margin:20px auto;
    }
    .contain .van-row.tableC .val-col:nth-child(2){
        border-left:none;
    }
    .contain >>> .van-row.tableC .van-col{
        height:120px;
        font-size: 12px;
    }
    .contain >>> .van-row.sevenTableB .van-col{
        height: 150px;
    }
    .contain >>> .van-row.sevenTableB .van-col:last-child{
        border-left:none;
    }
    .contain >>> .van-row{
        border-right:1px solid #000;
    }
    .contain >>> .van-row:last-child{
        border-bottom:1px solid #000;
    }
    .contain >>> .van-row .van-col p{
        font-size: 12px;
        margin:0;
        padding:0 8px;
    }
    .contain >>> .van-row .van-col{
        text-align: center;
        font-size: 12px;
        border-top: 1px solid #000;
        border-left: 1px solid #000;
        height: 32px;
        line-height: 32px;
    }
    .tableTitle{
        font-size: 24px;
        text-align: center;
        margin:20px 0;
    }
    .pageSix .pageSixBottom{
        position: absolute;
        width: 100%;
        bottom:0;
    }
    .pageSix .pageSixBottom p{
        text-align: right;
    }
    .pageSix{
        height: 600px;
        position: relative;
    }
    .pageFive{
        height:660px;
        position: relative;
    }
    .pageFour{
        height:600px;
        position: relative;
    }
    .imageBox.middleImg{
        height:175px;
    }
    .imageBox{
        width:130px;
        height:169px;
        border:1px solid #000;
        margin:20px auto;
    }
    .pageThree p{
        line-height: 32px;
        margin:0;
    }
    .pageThree ul{
        left:15px;
    }
    .pageThree{
        position: relative;
        height: 630px;
    }
    .pageCount span{
        margin:0 20px;
    }
    .pageCount{
        text-align: right;
        padding-right:50px !important;
        box-sizing: border-box;
    }
    .reason.sceneCase{
        height:55px;
    }
    .reason.sceneCase span:nth-child(2){
        text-indent: 100px;
    }
    .reason.sceneCase ul li:first-child{
        width:74%;
        margin-left:26%;
    }
    ul li{
        border-bottom:1px solid #000;
        line-height: 31px;
        height:31px;
        top: 0;
    }
    ul{
        position: absolute;
        width:93%;
        height: 100%;
        top:-8px;

    }
    .reason span:nth-child(2){
        position: absolute;
        left:0;
        text-indent: 80px;
        line-height: 30px;
        padding:0 15px;
        box-sizing: border-box;
    }
    .reason{
        position: relative;
        height: 90px;
    }
    .pageTwo .twoRightTitle{
        text-align: right;
        font-size:16px;
    }
    .pageTwo{
        margin-top:200px;
    }
    .pageTwo .twoTitle{
        font-size:18px;
        font-weight: bold;
        text-align: center;
    }
    .pageTwo p span{
        display: inline-block;
        word-wrap:break-word;
    }
    p{
        font-size: 14px;
        padding:0 15px;
        line-height: 32px;
        margin:0;
    }
    .codeNum{
        text-align: right;
        font-size:24px;
        padding-right:15px;
        margin-top:100px;
        font-weight: bold;
    }
    .topic{
        text-align: center;
        font-size:35px;
        font-weight: bold;
        margin-top:150px;
    }
    .unit{
        font-size:20px;
        font-weight: bold;
        text-align: right;
        margin-top:200px;
        padding-right:15px;
    }
    .unit span{
        display: inline-block;
        width:200px;
        text-align: left;
        border-bottom:1px solid #000;
    }
    [w5]{
        width:5%;
    }
    [w7]{
        width:7%;
    }
    [w8]{
        width:8%;
    }
    [w15]{
        width:15%;
    }
    [w20]{
        width:20%;
    }
    [w26]{
        width:26%;
    }
    [w30]{
        width:30%;
    }
    [w33]{
        width:33%;
    }
    [w35]{
        width:35%;
    }
    [w37]{
        width:37%;
    }
    [w38]{
        width:38%;
    }
    [w40]{
        width:40%;
    }
    [w50]{
        width:50%;
    }
    [w62]{
        width:62%;
    } 
    [w65]{
        width:65%;
    } 
    [w70]{
        width:70%;
    } 
    [w80]{
        width:80%;
    }
    [w85]{
        width:85%;
    }
    [w100]{
        width:100%;
    }
    [border]{
        border-bottom:1px solid #000;
    }
</style>