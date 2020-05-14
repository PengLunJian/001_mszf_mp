export default {
  data: {
    mixin: 'Route'
  },
  methods: {
    switchTab(url) {
      wx.switchTab({
        url
      });
    },
    reLaunch(url) {
      wx.reLaunch({
        url
      });
    },
    redirectTo(url) {
      wx.redirectTo({
        url
      });
    },
    navigateTo(url) {
      wx.navigateTo({
        url
      });
    },
    navigateBack(delta) {
      wx.navigateBack({
        delta
      });
    }
  },
  created() {
    console.log('created in mixin');
  }
};
