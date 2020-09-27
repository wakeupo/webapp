import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
  name: 'store',
  state: {
    count: 1,
    token: '',
    step: 1   //取证流程点击判断
  }
})