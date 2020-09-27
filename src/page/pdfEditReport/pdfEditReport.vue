<!-- pdf编辑报告 -->
<template>
  <div id="pdfEditReport">
    <page-header righttext="保存" @onClickLeft="onClickLeft" @onClickRight="onClickRight"></page-header>
    <!-- 首页 -->
    <div class="firstPage">
      <div class="numberright">
        公 (
        <input style="width:40px;border:none;" /> ) 勘〔2020〕 号
      </div>
      <h2>现场勘验检查工作记录</h2>
      <div class="Company">
        制作单位：
        <input type="text" />
      </div>
    </div>
    <!-- 第二页 -->
    <div class="firstPage">
      <h3>现场勘验检查笔录</h3>
      <div style="float:right;" class="adressnum">
        <input /> 公（网）勘〔
        <input /> 〕
        <input /> 号
      </div>
      <div class="first_mian">
        <div class="adress">
          现场勘验单位：
          <input value=""/>
        </div>
        <div class="starttime">
          现场勘验开始时间：
          <input style="width:30px;" :value="beginTime"/> 年
          <input /> 月
          <input /> 日
          <input /> 时
          <input /> 分
        </div>
        <div class="starttime">
          现场勘验结束时间：
          <input style="width:30px;" :value="endTime"/> 年
          <input /> 月
          <input /> 日
          <input /> 时
          <input /> 分
        </div>
        <div>
          现场地点：
          <input style="width:81%;" />
        </div>
        <div>
          指挥人姓名、单位：
          <input style="width:67%;" />
        </div>
        <div>
          侦查人员姓名、单位：
          <input style="width:64%;" />
        </div>
        <div>
          记录人员姓名、单位：
          <input style="width:64%;" />
        </div>
        <div>
          见证人：
          <input style="width:85%;" />
        </div>
        <div class="longline">
          <span>勘验事由：</span>
          <textarea cols="10" rows="3" maxlength="73" style="text-indent:65px;"></textarea>
        </div>
        <div class="longline">
          <span>现场保护情况：</span>
          <textarea cols="10" rows="2" maxlength="45" style="text-indent:90px;"></textarea>
        </div>
        <div class="spanline">
          变动原因：
          <span style="width:81%;">
            事主进入
            <input type="checkbox" class="checkbox" /> / 原始现场
            <input type="checkbox" class="checkbox" />
          </span>
        </div>
        <div class="spanline">
          现场情况：
          <span style="width:81%;">
            <input class="checkbox" type="checkbox" />
            变动现场 /
            <input class="checkbox" type="checkbox" /> 报案人进入 /
            <input class="checkbox" type="checkbox" />其他;
          </span>
        </div>
        <div style="position:absolute;right:20px;bottom:20px;">
          第
          <input style="width:20px;background:none;" /> 页&nbsp;&nbsp;&nbsp; 共
          <input style="width:20px;background:none;" /> 页
        </div>
      </div>
    </div>
    <!-- 第三页 -->
    <div class="firstPage">
      <div class="first_mian">
        <div class="spanline">
          天气：
          <span>
            阴
            <input class="checkbox" type="checkbox" /> /晴
            <input class="checkbox" type="checkbox" /> /雨
            <input class="checkbox" type="checkbox" /> /雪
            <input class="checkbox" type="checkbox" /> /雾
            <input class="checkbox" type="checkbox" />，
          </span>
          温度：
          <input style="width:10%;" />
          湿度：
          <input style="width:10%;" />
          风向：
          <input style="width:10%;" />
        </div>
        <div class="spanline">
          现场勘验利用的光线：
          <span style="width:62%;">
            自然光
            <input type="checkbox" class="checkbox" /> / 灯光
            <input type="checkbox" class="checkbox" /> / 特种光
            <input type="checkbox" class="checkbox" />
          </span>
        </div>
        <div class="longline">
          <span style="text-indent:24px;">现场勘验情况：</span>
          <textarea cols="10" rows="6" style="text-indent:90px;" maxlength="168">一、勘验方法：本次电子数据检查过程采用的技术标准有：《GA/T 1170-2014移动终端取证检验方法》、《GA/T 756-2008数字化设备证据数据发现提取固定方法》。本次电子数据检查过程使用的硬件设备及软件有：民警工作手机进行拍照取证；执法记录仪进行录像取证；电子取证专家（V1.0.04301）软件。 </textarea>
        </div>
        <div class="spanline">
          <span style="width:100%;">二、勘验过程</span>
          <div class="longline">
            <textarea name id cols="30" rows="9" maxlength="252">（一）现场在XXX（发现位置，例：室内桌子上）发现有一台（颜色+品牌+类别，例：白色联想电脑）。该设备在发现时处于xx状态（状态，例：开机）对设备进行拍照，XXXXXXX（图片编号，例：电脑001打开的文档_004.jpg）,完整性校验值是：XXXXXX。XXXXXXX（图片编号，例：电脑001打开的文档_004.jpg）,完整性校验值是：XXXXXX。如下：   </textarea>
          </div>
        </div>
        <!-- 页码 -->
        <div style="position:absolute;right:20px;bottom:20px;">
          第
          <input style="width:20px;background:none;" /> 页&nbsp;&nbsp;&nbsp; 共
          <input style="width:20px;background:none;" /> 页
        </div>
      </div>
    </div>
    <!-- 第四页 -->
    <div class="firstPage" style="position: relative;">
      <div class="first_mian">
        <!-- 放图片 -->
        <div class="longline">
          <textarea name id cols="30" rows="12" readonly></textarea>
        </div>
        <input style="width:100%;" value="对该xx（类别）进行初步检查，电子数据信息如下：" />
        <div class="longline">
          <textarea name id cols="30" rows="6" maxlength="168">1、xx（类别）的XXXXXX（电子证据类型，例：打开的文档）电子数据信息已拍照固定。XXXXXXX（图片编号，例：电脑001打开的文档_004.jpg）,完整性校验值是：XXXXXX。XXXXXXX（图片编号，例：电脑001打开的文档_005.jpg）,完整性校验值是：XXXXXX。 </textarea>
        </div>
        <!-- 页码 -->
        <div style="position:absolute;right:20px;bottom:20px;">
          第
          <input style="width:20px;background:none;" /> 页&nbsp;&nbsp;&nbsp; 共
          <input style="width:20px;background:none;" /> 页
        </div>
        <div class="pic" style="top:10px;">
          <span>照片</span>
        </div>
        <div class="pic" style="top:170px;">
          <span>照片</span>
        </div>
      </div>
    </div>
    <!-- 第五页 -->
    <div class="firstPage">
      <div class="first_mian">
        <!-- 放图片 -->
        <div class="longline">
          <textarea name id cols="30" rows="12" readonly></textarea>
        </div>
        <div class="longline">
          <textarea cols="30" rows="7" maxlength="196">2、xx（类别）的XXXXXX（电子证据类型，例： MAC信息）该电子数据信息已拍照固定，原图文件名是XXXXXXX（图片编号，例：电脑001MAC信息_006.jpg）,完整性校验值是：XXXXXX。</textarea>
        </div>
        <!-- 页码 -->
        <div style="position:absolute;right:20px;bottom:20px;">
          第
          <input style="width:20px;background:none;" /> 页&nbsp;&nbsp;&nbsp; 共
          <input style="width:20px;background:none;" /> 页
        </div>
        <div class="pic" style="top:10px;">
          <span>照片</span>
        </div>
        <div class="pic" style="top:170px;">
          <span>照片</span>
        </div>
      </div>
    </div>
    <!-- 第六页 -->
    <div class="firstPage">
      <div class="first_mian">
        <!-- 放图片 -->
        <div class="longline">
          <textarea name id cols="30" rows="6" readonly></textarea>
        </div>
        <div class="longline">
          <textarea cols="30" rows="6" maxlength="168">综上，将以上XXX（录入设备类型列举，例：电脑、移动硬盘、U盘）等原始存储介质查点清楚后，采取拍照固定的的方式进行固定，固定后按要求进行扣押、开列《提取痕迹、物证登记表》，至此整个勘验过程结束。</textarea>
        </div>
        <!-- <div class="longline">
          <textarea cols="30" rows="2" maxlength="56">xxxx年x月xx日xx时xx分结束录像,一共生成录像文件x个，生成的录像文件的名称及完整值校验值如下：</textarea>
        </div>
        <div class="longline">
          <textarea cols="30" rows="1" maxlength="28">文件名：</textarea>
        </div>
        <div class="longline">
          <textarea cols="30" rows="1" maxlength="28">文件SHA-256值：</textarea>
        </div>
        <div class="longline">
          <textarea cols="30" rows="2" maxlength="56"></textarea>
        </div>-->

        <!-- 页码 -->
        <div style="position:absolute;right:20px;bottom:20px;">
          第
          <input style="width:20px;background:none;" /> 页&nbsp;&nbsp;&nbsp; 共
          <input style="width:20px;background:none;" /> 页
        </div>
        <div class="pic" style="top:10px;">
          <span>照片</span>
        </div>
      </div>
    </div>
    <!-- 第七页 -->
    <div class="firstPage">
      <div class="first_mian">
        <div class="longline">
          <textarea cols="30" rows="8" maxlength="168">备注：电子数据检查过程照相X张；勘验全程使用执法记录仪录像。</textarea>
        </div>
        <div class="person">
          <div style="float:right;">
            <span>侦查人员：</span>
            <input style="background:none;width:125px;" />
          </div>
        </div>
        <div class="person">
          <div style="float:right;">
            <span>电子数据持有人（提供人）/见证人：</span>
            <input style="background:none;width:50px;" />
            <span>（电子签名）</span>
          </div>
        </div>
        <div class="person">
          <div style="float:right;">
            <span>电子数据持有人（提供人）/见证人：</span>
            <input style="background:none;width:50px;" />
            <span>（手写签名）</span>
          </div>
        </div>
        <div class="person">
          <div style="float:right;">
            <span>记录人：</span>
            <input style="background:none;width:125px;" />
          </div>
        </div>
        <!-- 页码 -->
        <div style="position:absolute;right:20px;bottom:20px;">
          第
          <input style="width:20px;background:none;" /> 页&nbsp;&nbsp;&nbsp; 共
          <input style="width:20px;background:none;" /> 页
        </div>
      </div>
    </div>
    <!-- 第八页 -->
    <div class="firstPage">
      <div class="first_mian">
        <!-- 附件 -->
        <div class="enclosure">
          <div class="one">附件1</div>
          <h4>提取痕迹、物证登记表</h4>
          <table style="margin:0 auto;width:100%;" border="1" cellspacing="0" cellpadding="0">
            <thead>
              <th>序号</th>
              <th>名称</th>
              <th>基本特征</th>
              <th>数量</th>
              <th>提取部位</th>
              <th>提取方法</th>
              <th>提取人</th>
              <th>备注</th>
            </thead>
            <tbody>
              <tr>
                <td>fdsf</td>
                <td>fdsf</td>
                <td>fdsf</td>
                <td>fdsf</td>
                <td>fdsf</td>
                <td>fdsf</td>
                <td>fdsf</td>
                <td>fdsf</td>
              </tr>
              <tr>
                <td colspan="8" style="width:200px;height:150px;overflow:hidden;">
                  <input type="text" style="float:left;" />
                  <div style="overflow:hidden;width:100%;">
                    <div style="float:left;">
                      <span style="line-height:29px;">见证人：</span>
                      <input type="text" style="width:50px;" />
                    </div>
                    <span style="float:right;margin-right:50px;line-height:29px;">办案单位（盖章）</span>
                  </div>
                  <div style="float:right;">
                    <span>提取人：</span>
                    <input style="width:100px;" type="text" />
                  </div>
                  <div class="date">
                    <span>
                      <input />年
                      <input />月
                      <input />日
                    </span>
                    <span>
                      <input />年
                      <input />月
                      <input />日
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 页码 -->
        <div style="position:absolute;right:20px;bottom:20px;">
          第
          <input style="width:20px;background:none;" /> 页&nbsp;&nbsp;&nbsp; 共
          <input style="width:20px;background:none;" /> 页
        </div>
      </div>
    </div>
    <!-- 第九页 -->
    <div class="firstPage">
      <div class="first_mian">
        <div class="enclosure">
          <div class="one">附件2</div>
          <h4>电子数据提取固定清单</h4>
          <table style="margin:0 auto;width:100%;" border="1" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td>案由</td>
                <td colspan="5"></td>
              </tr>
              <tr>
                <td>提取固定时间</td>
                <td colspan="5"></td>
              </tr>
              <tr>
                <td>电子证据</td>
                <td>类别</td>
                <td>来源</td>
                <td>文件格式</td>
                <td>完整性校验值</td>
                <td>备注</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td colspan="6">
                  <div class="table_bottom" style="position:relative;">
                    <div>
                      <span>电子数据持有人（提供人）/见证人（适用时）：</span>
                      <input style="width:80px;" />
                      <span class="data">
                        <input type="text" />年
                        <input type="text" />月
                        <input type="text" />日
                      </span>
                    </div>
                    <div>
                      <span>侦察人员：</span>
                      <input style="width:80px;" />
                      <span class="data">
                        <input type="text" />年
                        <input type="text" />月
                        <input type="text" />日
                      </span>
                    </div>
                    <div>
                      <span>办案单位（盖章）</span>
                      <input style="width:80px;" />
                      <span class="data">
                        <input type="text" />年
                        <input type="text" />月
                        <input type="text" />日
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 页码 -->
        <div style="position:absolute;right:20px;bottom:20px;">
          第
          <input style="width:20px;background:none;" /> 页&nbsp;&nbsp;&nbsp; 共
          <input style="width:20px;background:none;" /> 页
        </div>
      </div>
    </div>
    <!-- 第十页 -->
    <div class="firstPage">
      <div class="first_mian">
        <div class="enclosure">
          <div class="one">附件3</div>
          <h4>现场照片</h4>
        </div>
        <div style="width:100%;height:150px;border:1px solid;margin-bottom:20px;"></div>
        <div style="width:100%;height:150px;border:1px solid;"></div>
        <div class="takepicname" style="position:absolute;bottom:50px;right:20px;">
          <div>
            <span>照相人：</span>
            <input type="text" style="width:75%;" />
          </div>
          <div>
            <span>照相时间：</span>
            <input type="text" />
          </div>
        </div>
        <!-- 页码 -->
        <div style="position:absolute;right:20px;bottom:20px;">
          第
          <input style="width:20px;background:none;" /> 页&nbsp;&nbsp;&nbsp; 共
          <input style="width:20px;background:none;" /> 页
        </div>
      </div>
    </div>
    <!-- 第十一页 -->
    <div class="firstPage">
      <div class="first_mian">
        <div class="enclosure">
          <div class="one">附件4 封存合照</div>
          <h4>图片记录表</h4>
          <table style="margin:0 auto;width:100%;" border="1" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td width="20px;">编号</td>
                <td>
                  <textarea
                    cols="30"
                    rows="3"
                    maxlength="66"
                    style="width:95%;background:none;line-height:20px;"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>备注</td>
                <td>
                  <textarea
                    cols="30"
                    rows="5"
                    maxlength="110"
                    style="width:95%;background:none;line-height:20px;"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div style="width:100%;">
                    <span style="margin:80px auto 120px;display:block;font-size:20px;">（照片粘贴到此处）</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 页码 -->
        <div style="position:absolute;right:20px;bottom:20px;">
          第
          <input style="width:20px;background:none;" /> 页&nbsp;&nbsp;&nbsp; 共
          <input style="width:20px;background:none;" /> 页
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "../../components/header";
export default {
  components: {
    pageHeader
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "ReportEditor" });
    },
    onClickRight() {
      this.$router.push({ name: "ReportEditor" });
    }
  }
};
</script>

<style scoped>
#pdfEditReport {
  background: #e2e2e2;
}
#pdfEditReport >>> .van-nav-bar {
  background: #0183ff;
}
#pdfEditReport >>> .van-nav-bar__text,
#pdfEditReport >>> .van-nav-bar .van-icon {
  color: #fff;
}
.firstPage {
  background: #fff;
  overflow: hidden;
  height: 540px;
  margin-top: 13px;
  padding: 0 12px 50px 15px;
  position: relative;
}
.pic {
  width: 120px;
  height: 140px;
  background: #fff;
  border: 1px solid;
  position: absolute;
  left: 35%;
}
.pic span {
  text-align: center;
  margin-top: 20px;
  display: block;
}
.firstPage h2 {
  margin: 180px auto 220px;
  text-align: center;
}
.numberright {
  margin-top: 60px;
  float: right;
  font-weight: 600;
}
.Company {
  float: right;
}
.Company input {
  height: 28px;
  width: 250px;
  background: url(../../assets/image/line.png) 0 -5px;
  border: none;
}
.firstPage h3 {
  text-align: center;
}
.first_mian {
  font-size: 12px;
}
.first_mian input {
  background: url(../../assets/image/line.png) 0 -12px;
  border: none;
  height: 25px;
}
.first_mian textarea {
  background: url(../../assets/image/line.png) 0 -4px;
  width: 100%;
  border: none;
  line-height: 27px;
  background-size: 9%;
  letter-spacing: 1px;
}
#pdfEditReport .checkbox {
  vertical-align: middle;
}
.adressnum {
  float: left;
}
.adressnum input {
  width: 40px;
  border: none;
}
.adress {
  margin-top: 50px;
  font-size: 12px;
}
.adress input {
  width: 74%;
}
.starttime {
  font-size: 12px;
}
.starttime input {
  width: 20px;
}
.longline {
  position: relative;
}
.longline span {
  position: absolute;
  background: #fff;
  height: 30px;
  line-height: 30px;
}
.spanline span {
  background: url(../../assets/image/line.png) 0 -9px;
  height: 29px;
  display: inline-block;
  line-height: 29px;
}
.person {
  background: url(../../assets/image/line.png) 0 24px;
  width: 100%;
  overflow: hidden;
}
.enclosure .one {
  font-weight: bold;
}
h4 {
  font-size: 20px;
  text-align: center;
  margin: 10px 0;
}
table th,
tr,
td {
  padding: 2px;
  text-align: center;
}
.first_mian table input {
  background: none;
}
.date {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 40px;
}
.first_mian .date input {
  width: 30px;
}
.table_bottom {
  display: flex;
  flex-direction: row;
}
.table_bottom div {
  width: 33%;
  height: 100px;
}
.table_bottom .data {
  display: flex;
  flex-direction: row;
  bottom: 0;
  position: absolute;
}
.data input {
  width: 20px;
  height: 15px;
}
</style>