"use strict";

var _core = _interopRequireDefault(require('../../../vendor.js')(1));

var _index = _interopRequireDefault(require('../../../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _index["default"],
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
        name: '广德无穷大网路科技有限公司',
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
  created: function created() {}
}, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'10-18': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleShowModal($event)
      })();
    
  }},'10-19': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandlePhone($event)
      })();
    
  }},'10-20': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleLocation($event)
      })();
    
  }},'10-21': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleHideModal($event)
      })();
    
  }},'10-22': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleCancel($event)
      })();
    
  }},'10-23': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleConfirm($event)
      })();
    
  }}}, models: {} });