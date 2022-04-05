<template>
  <u-button type="primary">欢迎您 Uniapp Template</u-button>
</template>

<script>
import { getTopic } from '@/api/example';

export default {
  data() {
    return {};
  },
  onLoad() {
    console.log('onload');
    this.getTopic();
  },
  methods: {
    getTopic() {
      getTopic({
        page: 1,
        tab: 'ask',
        limit: 10,
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
