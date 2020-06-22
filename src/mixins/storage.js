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
    },
    clearStorage() {
      try {
        wx.clearStorageSync();
      } catch (e) {
        console.log(e);
        // Do something when catch error
      }
    },
    getStorageInfoSync() {
      let result = 0;
      try {
        const res = wx.getStorageInfoSync();
        const {currentSize} = res;
        result = currentSize;
      } catch (e) {
        console.log(e);
      }
      return result;
    }
  },
  created() {
    console.log('created in mixin');
  }
};
