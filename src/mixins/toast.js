import {$wuxToast} from 'wux-weapp/dist/index';

export default {
  data: {
    mixin: 'MixinText'
  },
  methods: {
    showToast(type, text) {
      $wuxToast().show({
        type,
        text,
        mask: false
      });
    }
  },
  created() {
    console.log('created in mixin');
  }
};
