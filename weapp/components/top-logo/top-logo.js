"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  data: {
    statusHeight: ''
  },
  props: {
    title: {
      type: String,
      "default": '标题'
    }
  },
  events: {},
  methods: {},
  created: function created() {
    var system = wx.getSystemInfoSync();
    var statusHeight = system.statusBarHeight;
    this.statusHeight = statusHeight + 'px';
  }
}, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} });