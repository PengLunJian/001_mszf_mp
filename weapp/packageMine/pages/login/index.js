"use strict";

var _core = _interopRequireDefault(require('../../../vendor.js')(0));

var _store = _interopRequireDefault(require('../../../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import * as utils from '../../../utils';
_core["default"].page({
  store: _store["default"],
  mixins: [],
  data: {},
  computed: {},
  methods: {
    getPhoneNumber: function getPhoneNumber(e) {
      wx.login({
        success: function success(res) {
          console.log(res);
        }
      });
    }
  },
  onLoad: function onLoad() {}
}, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'17-0': {"getphonenumber": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getPhoneNumber($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'17-0': {"getphonenumber": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getPhoneNumber($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'17-0': {"getphonenumber": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getPhoneNumber($event)
      })();
    
  }}}, models: {} });