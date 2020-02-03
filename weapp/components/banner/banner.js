"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  data: {
    items: [{
      url: 'http://sersms.com:7000/house/v1/file/static/userfile/202002/02/1223847355544387584.jpg'
    }, {
      url: 'http://sersms.com:7000/house/v1/file/static/userfile/202002/02/1223847540358004736.jpg'
    }],
    current: 0,
    autoplay: true,
    circular: true
  },
  events: {},
  methods: {
    onHandleSwiperChange: function onHandleSwiperChange(e) {
      this.current = e.$wx.detail.current;
    },
    onHandleBanner: function onHandleBanner(index) {
      console.log(index);
    }
  },
  onLoad: function onLoad() {}
}, {info: {"components":{},"on":{}}, handlers: {'92-12': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSwiperChange($event)
      })();
    
  }},'92-13': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleBanner(index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'92-12': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSwiperChange($event)
      })();
    
  }},'92-13': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleBanner(index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'92-12': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSwiperChange($event)
      })();
    
  }},'92-13': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleBanner(index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'92-12': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSwiperChange($event)
      })();
    
  }},'92-13': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleBanner(index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'92-12': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSwiperChange($event)
      })();
    
  }},'92-13': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleBanner(index)
      })();
    
  }}}, models: {} });