"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  data: {
    enableZoom: false,
    enableScroll: false
  },
  events: {},
  props: {
    longitude: {
      type: Number,
      "default": 0
    },
    latitude: {
      type: Number,
      "default": 0
    },
    name: {
      type: String,
      "default": '暂无数据'
    }
  },
  methods: {
    onHandleClickMap: function onHandleClickMap() {
      console.log('别摸我,我会爆炸的！');
    }
  },
  created: function created() {}
}, {info: {"components":{},"on":{}}, handlers: {'114-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClickMap($event)
      })();
    
  }}}, models: {} });