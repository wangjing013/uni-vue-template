import { apiResquest } from '../utils/request';

export const LoginWx = (data) => apiResquest({
  url: '/uaa/mobile/login/by/code',
  method: 'post',
  data,
});

export default {};
