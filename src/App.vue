<script>
import store from '@/store/index';

export default {
  onLaunch() {
    const systemInfo = uni.getSystemInfoSync();
    store.commit('SET_SYSTEMINFO', systemInfo);
    console.log('App Launch');
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
page {
  height: 100%;
}
/*每个页面公共css */
@import "./assets/styles/flex.scss";
@import "uview-ui/index.scss";
</style>
