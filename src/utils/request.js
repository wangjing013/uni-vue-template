import { merge } from 'lodash-es';
import store from '@/store/index';

const errorStatusList = [525, 524, 526, 401];
const defaultConfig = {
  method: 'get',
  timeout: 6000,
  dataType: 'json',
  responseType: 'text',
  withCredentials: false, // 仅H5支持
  firstIpv4: false,
  header: {
    'content-type': 'application/json',
  },
  success() { },
  fail() { },
  complete() {},
};
const request = (params) => {
  if (store?.state?.token) {
    defaultConfig.header.Authorization = store.state.token;
  }
  return new Promise((resolve, reject) => {
    const {
      showLoading = true,
    } = params;
    if (showLoading) {
      uni.showLoading({
        title: '加载中',
        mask: true,
      });
    }
    uni.request(
      merge(defaultConfig, params, {
        success: (res) => {
          const { data: resData, statusCode, errMsg } = res;
          if (showLoading) uni.hideLoading();
          if (errorStatusList.includes(statusCode)) {
            uni.showToast({
              title: errMsg,
              icon: 'none',
            });
            uni.clearStorageSync();
            // toLogin
          }
          resolve(resData);
        },
        fail: (err) => {
          if (showLoading) uni.hideLoading();
          reject(err);
        },
        complete: () => {
          if (showLoading) uni.hideLoading();
        },
      }),
    );
  });
};

export const get = (params) => request({ ...params, method: 'GET' });
export const post = (params) => request({ ...params, method: 'POST' });
export default {};
