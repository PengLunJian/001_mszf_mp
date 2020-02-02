"use strict";

var _core = _interopRequireDefault(require('../../../vendor.js')(0));

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
}, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'12-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleShowModal($event)
      })();
    
  }},'12-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandlePhone($event)
      })();
    
  }},'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleLocation($event)
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
    
  }}}, models: {} }, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'12-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleShowModal($event)
      })();
    
  }},'12-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandlePhone($event)
      })();
    
  }},'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleLocation($event)
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
    
  }}}, models: {} }, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'12-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleShowModal($event)
      })();
    
  }},'12-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandlePhone($event)
      })();
    
  }},'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleLocation($event)
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