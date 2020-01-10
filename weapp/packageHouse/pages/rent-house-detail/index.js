"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _core = _interopRequireDefault(require('../../../vendor.js')(0));

var _index = _interopRequireDefault(require('../../../store/index.js'));

var _redux = require('../../../vendor.js')(1);

var controller = _interopRequireWildcard(require('controller.js'));

var $routes = _interopRequireWildcard(require('../../../router/index.js'));

var _toast = _interopRequireDefault(require('../../../mixins/toast.js'));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].page({
  store: _index["default"],
  mixins: [_toast["default"]],
  data: {
    items: [{
      url: '../../images/banner01.jpg'
    }, {
      url: '../../images/banner02.jpg'
    }, {
      url: '../../images/banner01.jpg'
    }, {
      url: '../../images/banner02.jpg'
    }],
    current: 1,
    autoplay: false,
    circular: true,
    longitude: 119.4235460000,
    latitude: 30.8791290000,
    enableZoom: false,
    enableScroll: false,
    markers: [{
      id: 1,
      longitude: 119.4235460000,
      latitude: 30.8791290000,
      iconPath: '../../../assets/images/address.png',
      width: 30,
      height: 30,
      label: {
        content: 'INFINITY',
        padding: 10,
        anchorX: 20,
        anchorY: -35,
        fontSize: 14,
        borderRadius: 4,
        bgColor: '#ffffff',
        textAlign: 'center'
      }
    }]
  },
  computed: _objectSpread({}, (0, _redux.mapState)(controller.STATES)),
  methods: _objectSpread({}, (0, _redux.mapActions)(controller.ACTIONS), {
    exeAjaxHouseDetail: function exeAjaxHouseDetail() {
      var house_id = this.$wx.options.house_id;
      this.ajaxHouseDetail({
        house_id: house_id
      }).then(function (res) {
        console.log(res);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    exeAjaxHouseFollow: function exeAjaxHouseFollow() {
      var _this = this;

      var house_id = this.$wx.options.house_id;
      this.ajaxHouseFollow({
        house_id: house_id
      }).then(function (res) {
        var success = res.payload.success;

        if (!success) {
          _this.showToast('cancel', '操作失败');
        }

        console.log(res);
      })["catch"](function (err) {
        _this.showToast('cancel', '操作失败');

        console.log(err);
      });
    },
    onHandleLargeImage: function onHandleLargeImage() {
      wx.previewImage({
        current: 'http://192.168.5.4/packageHouse/images/banner01.jpg',
        urls: ['http://192.168.5.4/packageHouse/images/banner01.jpg', 'http://192.168.5.4/packageHouse/images/banner02.jpg']
      });
    },
    onHandleClickMap: function onHandleClickMap() {
      console.log('别摸我,我会爆炸的！');
    },
    onHandleSwiperChange: function onHandleSwiperChange(e) {
      var current = e.$wx.detail.current;
      this.current = current + 1;
    },
    onHandlePhone: function onHandlePhone(phoneNumber) {
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
    onHandleMessage: function onHandleMessage(id) {
      wx.navigateTo({
        url: $routes.MESSAGE.path + '?id=' + id
      });
    },
    onRefresh: function onRefresh() {
      this.exeAjaxHouseDetail();
    }
  }),
  onLoad: function onLoad() {
    this.exeAjaxHouseDetail();
  }
}, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"},"loading":{"path":"..\\..\\..\\components\\loading\\loading"},"error":{"path":"..\\..\\..\\components\\error\\error"},"wux-toast":{"path":"..\\..\\..\\$vendor\\wux-weapp\\dist\\toast\\index"}},"on":{"6-209":["refresh"]}}, handlers: {'6-209': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresh($event)
      })();
    
  }},'6-210': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSwiperChange($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleLargeImage($event)
      })();
    
  }},'6-212': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.exeAjaxHouseFollow($event)
      })();
    
  }},'6-213': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleMessage(item.id)
      })();
    
  }},'6-214': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.onHandlePhone(item.tel)
      })();
    
  }},'6-215': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClickMap($event)
      })();
    
  }},'6-216': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleMessage(_vm.isData.agency[0].id)
      })();
    
  }},'6-217': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandlePhone(_vm.isData.agency[0].tel)
      })();
    
  }}}, models: {} });