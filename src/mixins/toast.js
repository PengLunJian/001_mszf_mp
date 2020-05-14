export default {
  data: {
    mixin: 'Toast'
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
