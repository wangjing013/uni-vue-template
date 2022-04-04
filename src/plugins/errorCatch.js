const ERROR_MSG = '加载失败，请查看您网络情况';

export default {
  install(Vue) {
    Vue.config.errorHandler = function errorHandler(err) {
      const msg = (err && err.msg) || ERROR_MSG;
      Vue.prototype.$toast(msg);
    };
  },
};
