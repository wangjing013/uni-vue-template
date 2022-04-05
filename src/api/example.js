import { DOMAINS } from '@/utils/config';
import { get } from '@/utils/request';

export const getTopic = (data) => get({
  url: `${DOMAINS.local}/topics`,
  data,
});

export default {};
