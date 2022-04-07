import Vue from 'vue';
import uView from 'uview-ui';
import Plugins from '@/plugins';
import store from '@/store';
import App from './App.vue';
import { router, RouterMount } from './router/index';

Vue.use(router);
Vue.use(Plugins);
Vue.use(uView);

App.mpType = 'app';
Vue.config.productionTip = false;
Vue.prototype.$store = store;

const app = new Vue({
  ...App,
  store,
});

// #ifdef H5
RouterMount(app, router, '#app');
// #endif

// #ifndef H5
app.$mount(); // 为了兼容小程序及app端必须这样写才有效果
// #endif
