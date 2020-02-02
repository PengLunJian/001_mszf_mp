export default {
  data: {
    mixin: 'MixinText'
  },
  methods: {
    showToast(title, icon) {
      wx.showToast({
        title,
        icon: icon || 'none'
      });
    }
  },
  created() {
    console.log('created in mixin');
  }
};
