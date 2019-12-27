"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require('../vendor.js')(4);

var _default = {
  data: {
    mixin: 'MixinText'
  },
  methods: {
    showToast: function showToast(type, text) {
      (0, _index.$wuxToast)().show({
        type: type,
        text: text,
        mask: false
      });
    }
  },
  created: function created() {
    console.log('created in mixin');
  }
};
exports["default"] = _default;