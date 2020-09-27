import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import Guid from '@/page/guid/guid'
import Login from '@/page/login/login'//登录页面
import StartPage from '@/page/startPage/startPage'
import ImproveInformation from '@/page/improveInformation/improveInformation'
import Mine from '@/page/mine/mine'//我的页面
import Setting from '@/page/mine/setting/setting.vue'//设置页面
import Information from '@/page/information/Information'//用户资料
import EditInformation from '@/page/information/editinformation'//编辑资料
import ChangePassword from '@/page/changePassword/changePassword'//修改密码
import Conceal from '@/page/conceal/conceal'//服务协议与隐私政策
import Sign from '@/page/sign/sign'//电子签名
import AdditionalComment from '@/page/AdditionalComment/AdditionalComment'//取证完成
import ReportEditor from '@/page/ReportEditor/ReportEditor'//报告编辑
import ReportGeneration from '@/page/ReportEditor/ReportGeneration'//生成报告
import InputCase from '@/page/inputCase/inputCase'
import SelectCase from '@/page/inputCase/selectCase'
import WorkFlow from '@/page/workFlow/workFlow'
import ImageSave from '@/page/imageSave/imageSave'
import MyEvidence from '@/page/MyEvidence/MyEvidence'//我的取证
import EvidenceDetails from '@/page/evidenceDetails/evidenceDetails'//我的取证详情
import PdfEditReport from '@/page/pdfEditReport/pdfEditReport'//pdf报告编辑
import Vedio from '@/page/vedio/vedio'//录像
import VedioReport from '@/page/vedio/vedioReport'//录像报告
import SuspectMsg from '@/page/suspectMsg/suspectMsg'//嫌疑人信息
import EnvironmentalPhoto from '@/page/environmentalPhoto/environmentalPhoto'
import EnvironmentalDetail from '@/page/environmentalPhoto/informationDetail'
import Equipment from '@/page/equipment/equipment'
import EquipmentPhoto from '@/page/equipment/equipmentPhoto'
import WriteReport from '@/page/pdfEditReport/writeReport'
import PreviewPdf from '@/page/PreviewPdf/PreviewPdf'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '引导页',
      component: Index
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/improveInformation',
      name: '完善信息',
      component: ImproveInformation
    },
    {
      path: '/guid',
      name: '引导页',
      component: Guid
    },
    {
      path: '/index',
      name: '首页',
      component: Index
    },
    {
      path: '/inputCase',
      name: '录入案件',
      component: InputCase
    },
    {
      path: '/selectCase',
      name: '选择案件',
      component: SelectCase
    },
    {
      path: '/writeReport',
      name: '报告编辑',
      component: WriteReport
    },
    {
      path: '/environmentalPhoto',
      name: '环境拍照',
      component: EnvironmentalPhoto
    },
    {
      path: '/informationDetail',
      name: '环境详情',
      component: EnvironmentalDetail
    },
    {
      path: '/workFlow',
      name: '选择案件',
      component: WorkFlow
    },
    {
      path: '/equipment',
      name: '设备',
      component: Equipment
    },
    {
      path: '/equipmentPhoto',
      name: '设备照片',
      component: EquipmentPhoto
    },
    {
      path: '/imageSave',
      name: '保存图片',
      component: ImageSave
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/information',
      name: 'Information',
      component: Information,
    },
    {
      path: '/editinformation/:data',
      name: 'EditInformation',
      component: EditInformation
    },
    {
      path: '/changePassword/:userCode',
      name: 'ChangePassword',
      component: ChangePassword
    },
    {
      path: '/conceal',
      name: 'Conceal',
      component: Conceal
    },
    {
      path: '/sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/AdditionalComment',
      name: 'AdditionalComment',
      component: AdditionalComment
    },
    {
      path: '/ReportEditor',
      name: 'ReportEditor',
      component: ReportEditor
    },
    {
      path: '/ReportGeneration',
      name: 'ReportGeneration',
      component: ReportGeneration
    },
    {
      path: '/MyEvidence',
      name: 'MyEvidence',
      component: MyEvidence
    },
    {
      path: '/evidenceDetails/:data',
      name: 'EvidenceDetails',
      component: EvidenceDetails
    },
    {
      path: '/pdfEditReport',
      name: 'PdfEditReport',
      component: PdfEditReport
    },
    {
      path: '/vedio',
      name: 'Vedio',
      component: Vedio
    },
    {
      path: '/vedioReport',
      name: 'VedioReport',
      component: VedioReport
    },
    {
      path: '/suspectMsg',
      name: 'SuspectMsg',
      component: SuspectMsg
    },
    {
      path: '/PreviewPdf',
      name: 'PreviewPdf',
      component: PreviewPdf
    },
  ]
})
