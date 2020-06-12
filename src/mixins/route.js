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
        url,
        fail: () => {
          wx.showToast({
            icon: 'none',
            title: '完了，我找不到路了。'
          });
        }
      });
    },
    navigateBack(delta) {
      wx.navigateBack({
        delta,
        fail: () => {
          wx.showToast({
            icon: 'none',
            title: '完了，我找不到回去的路了。'
          });
        }
      });
    }
  },
  created() {
    console.log('created in mixin');
  }
};
