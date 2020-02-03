"use strict";

var _core = _interopRequireDefault(require('../../../vendor.js')(0));

var _index = _interopRequireDefault(require('../../../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _index["default"],
  mixins: [],
  data: {
    topBarHeight: '',
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
    onHandleConfirm: function onHandleConfirm() {}
  },
  onLoad: function onLoad() {
    var system = wx.getSystemInfoSync();
    var statusHeight = system.statusBarHeight;
    var topBarHeight = statusHeight + 45;
    this.topBarHeight = topBarHeight + 'px';
  }
}, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'12-187': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandlePhone($event)
      })();
    
  }},'12-188': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleLocation($event)
      })();
    
  }},'12-189': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleShowModal($event)
      })();
    
  }},'12-190': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleHideModal($event)
      })();
    
  }},'12-191': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleCancel($event)
      })();
    
  }},'12-192': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleConfirm($event)
      })();
    
  }}}, models: {} });