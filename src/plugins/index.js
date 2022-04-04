import interact from './interact';
import errorCatch from './errorCatch';

export default {
  install(Vue) {
    Vue.use(interact);
    Vue.use(errorCatch);
  },
};
