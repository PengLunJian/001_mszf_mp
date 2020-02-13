"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  data: {
    isShow: false
  },
  props: {
    isLoading: {
      type: Boolean,
      "default": false
    }
  },
  events: {},
  watch: {
    isLoading: function isLoading() {
      var _this = this;

      if (this.isLoading) {
        this.isShow = this.isLoading;
      } else {
        setTimeout(function () {
          _this.isShow = _this.isLoading;
        }, 300);
      }
    }
  },
  methods: {},
  onLoad: function onLoad() {}
}, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} });