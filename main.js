import Vue from 'vue'
import App from './App'
import store from "./store";
import config from "@/config/config.js";
import request from "@/libs/request.js";


Vue.prototype.$store = store;//状态管理
Vue.prototype.$request = request;//数据请求

Vue.use(config);//全局可 通过 this.$config 访问 配置


//定义全局组件，方便后期引入
import cuPageIndex from "@/pages/common-pages/index.vue";
import cuPageGoods from "@/pages/common-pages/goods.vue";
import cuPageMine from "@/pages/common-pages/mine.vue";

Vue.component('cu-page-index',cuPageIndex)
Vue.component('cu-page-goods',cuPageGoods)
Vue.component('cu-page-mine',cuPageMine)


Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
