"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _core = _interopRequireDefault(require('../../../vendor.js')(0));

var _store = _interopRequireDefault(require('../../../store/index.js'));

var utils = _interopRequireWildcard(require('../../../utils/index.js'));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _store["default"],
  mixins: [],
  data: {
    isShow: false,
    isHide: false
  },
  computed: {},
  methods: {
    onHandlePhone: function onHandlePhone() {
      var globalData = this.$app.$options.globalData;
      var company = globalData.company;
      var phoneNumber = company.phoneNumber;
      wx.makePhoneCall({
        phoneNumber: phoneNumber,
        success: function success(res) {
          console.log(res);
        },
        fail: function fail(err) {
          console.log(err);
        },
        complete: function complete(res) {
          console.log(res);
        }
      });
    },
    onHandleLocation: function onHandleLocation() {
      wx.openLocation({
        latitude: 30.8791290000,
        // 纬度
        longitude: 119.4235460000,
        // 经度
        name: '广德码上找房',
        address: '安徽省宣城市广德市金鑫世贸广场北区块B栋五楼505-506',
        success: function success(res) {
          console.log(res);
        },
        fail: function fail(err) {
          console.log(err);
        },
        complete: function complete(res) {
          console.log(res);
        }
      });
    },
    onHandleShowModal: function onHandleShowModal() {
      this.isHide = false;
      this.isShow = true;
    },
    onHandleHideModal: function onHandleHideModal() {
      this.isShow = false;
      this.isHide = true;
    },
    onHandleCancel: function onHandleCancel() {
      this.onHandleHideModal();
    },
    onHandleConfirm: function onHandleConfirm() {
      utils.handleSaveImage();
      this.onHandleHideModal();
    }
  },
  onLoad: function onLoad() {}
}, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'12-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandlePhone($event)
      })();
    
  }},'12-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleLocation($event)
      })();
    
  }},'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleShowModal($event)
      })();
    
  }},'12-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleHideModal($event)
      })();
    
  }},'12-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleCancel($event)
      })();
    
  }},'12-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleConfirm($event)
      })();
    
  }}}, models: {} });