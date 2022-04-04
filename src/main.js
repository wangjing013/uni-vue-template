import Vue from 'vue';
import uView from 'uview-ui';
import Plugins from '@/plugins';
import store from '@/store';
import App from './App.vue';

Vue.use(Plugins);
Vue.use(uView);

App.mpType = 'app';
Vue.config.productionTip = false;
Vue.prototype.$store = store;

const app = new Vue({
  ...App,
  store,
});
app.$mount();
