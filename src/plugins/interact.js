// 轻量提示
const Toast = (title) => {
  let opts = title;
  if (typeof title === 'string') opts = { title };
  uni.showToast({ ...Toast.default, ...opts });
};
Toast.default = {
  icon: 'none',
};

// 加载
const Loading = (options) => {
  uni.showLoading({ ...Loading.default, ...options });
};
Loading.default = {
  title: '加载中',
  mask: true,
};
Loading.close = uni.hideLoading;

// 模态框
const Dialog = (options) => new Promise((resolve, reject) => {
  uni.showModal({
    ...Dialog.default,
    ...options,
    success({ confirm }) {
      if (confirm) return resolve();
      reject();
    },
    fail: reject,
  });
});
Dialog.default = {
  title: '提示',
  showCancel: false,
};

export default {
  install(Vue) {
    Object.assign(Vue.prototype, {
      $toast: Toast,
      $loading: Loading,
      $dialog: Dialog,
    });
  },
};
