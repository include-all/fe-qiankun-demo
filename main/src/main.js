import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { registerMicroApps, start, setDefaultMountApp } from "qiankun";
import microApps from './micro-app';

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

registerMicroApps(microApps, {
  beforeLoad: app => {
  },
  beforeMount: [
    app => {
    },
  ],
  afterMount: [
    app => {
    }
  ],
  afterUnmount: [
    app => {
    },
  ],
});


setDefaultMountApp('/app-vue2')
start(); // 微前端 —— 启动
