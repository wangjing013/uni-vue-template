import {
  DOMAINS,
} from '@/utils/config';
import store from '@/store/index';

const baseUrl = DOMAINS.local;

export const apiResquest = (prams) => {
  const headerData = {
    'content-type': 'application/json',
    // 'Authorization':token
  };
  if (store.state.token) {
    headerData.Authorization = store.state.token;
  }
  let dataObj = null;
  if (prams.method === 'POST') {
    dataObj = prams.data;
  } else {
    dataObj = { ...prams.data };
  }
  // 返回promise
  return new Promise((resolve, reject) => {
    uni.showLoading({
      title: '加载中',
      mask: true,
    });
    uni.request({
      url: baseUrl + prams.url,
      data: dataObj,
      method: prams.method,
      header: headerData,
      success: (res) => {
        uni.hideLoading();
        const codeArr = [525, 524, 526, 401];
        if (codeArr.indexOf(res.data.code) > -1) {
          uni.showToast({
            title: res.data.msg,
            icon: 'none',
          });
          uni.clearStorageSync();
          uni.navigateTo({
            url: '/pages/home/index',
          });
          return false;
        }
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
        uni.hideLoading();
      },
      complete: () => {
        uni.hideLoading();
      },
    });
  });
};

export default {};
