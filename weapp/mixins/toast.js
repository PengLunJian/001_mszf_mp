"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  data: {
    mixin: 'MixinText'
  },
  methods: {
    showToast: function showToast(title, icon) {
      wx.showToast({
        title: title,
        icon: icon || 'none'
      });
    }
  },
  created: function created() {
    console.log('created in mixin');
  }
};
exports["default"] = _default;