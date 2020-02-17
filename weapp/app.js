"use strict";

var _core = _interopRequireDefault(require('vendor.js')(0));

var _redux = _interopRequireDefault(require('vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].use(_redux["default"]);

_core["default"].app({
  globalData: {
    userInfo: null,
    company: {
      phoneNumber: '13731887133'
    }
  },
  onLaunch: function onLaunch() {
    var system = wx.getSystemInfoSync();
    var statusHeight = system.statusBarHeight;
    this.$options.globalData.statusHeight = statusHeight + 'px';
  },
  methods: {}
}, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} });