"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  data: {
    items: [{
      url: 'http://sersms.com:7000/house/v1/file/static/userfile/202002/06/1225297117435019264.jpg'
    }, {
      url: 'http://sersms.com:7000/house/v1/file/static/userfile/202002/06/1225297515902287872.jpg'
    }, {
      url: 'http://sersms.com:7000/house/v1/file/static/userfile/202002/06/1225313315841261568.jpg'
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
}, {info: {"components":{"lazy-image":{"path":"..\\lazy-image\\lazy-image"}},"on":{}}, handlers: {'97-2': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSwiperChange($event)
      })();
    
  }},'97-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleBanner(index)
      })();
    
  }}}, models: {} }, {info: {"components":{"lazy-image":{"path":"..\\lazy-image\\lazy-image"}},"on":{}}, handlers: {'97-2': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSwiperChange($event)
      })();
    
  }},'97-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleBanner(index)
      })();
    
  }}}, models: {} });