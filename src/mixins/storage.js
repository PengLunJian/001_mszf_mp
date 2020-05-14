export default {
  data: {
    mixin: 'Storage'
  },
  methods: {
    setItem(key, value) {
      try {
        wx.setStorageSync(key, value);
      } catch (e) {
        console.log(e);
      }
    },
    getItem(key) {
      let value = null;
      try {
        value = wx.getStorageSync(key);
      } catch (e) {
        console.log(e);
      }
      return value;
    },
    removeItem(key) {
      try {
        wx.removeStorageSync(key);
      } catch (e) {
        console.log(e);
      }
    }
  },
  created() {
    console.log('created in mixin');
  }
};
