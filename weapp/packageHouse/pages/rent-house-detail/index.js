"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _core = _interopRequireDefault(require('../../../vendor.js')(0));

var _index = _interopRequireDefault(require('../../../store/index.js'));

var _redux = require('../../../vendor.js')(1);

var controller = _interopRequireWildcard(require('controller.js'));

var $routes = _interopRequireWildcard(require('../../../router/index.js'));

var _toast = _interopRequireDefault(require('../../../mixins/toast.js'));

var _wxQqmapJssdk = _interopRequireDefault(require('../../../vendor.js')(2));

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
      url: 'http://sersms.com:7000/house/v1/file/static/userfile/202001/13/1216582503799492608.jpg'
    }, {
      url: 'http://sersms.com:7000/house/v1/file/static/userfile/202001/13/1216581838603849728.jpg'
    }],
    current: 1,
    autoplay: false,
    circular: true,
    longitude: 0,
    latitude: 0,
    enableZoom: false,
    enableScroll: false,
    markers: [{
      id: 1,
      longitude: 0,
      latitude: 0,
      width: 30,
      height: 30
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

        if (success) {
          _this.showToast('收藏成功');
        } else {
          _this.showToast('收藏失败');
        }

        console.log(res);
      })["catch"](function (err) {
        _this.showToast('收藏失败');

        console.log(err);
      });
    },
    exeAjaxHouseUnfollow: function exeAjaxHouseUnfollow() {
      var _this2 = this;

      var house_id = this.$wx.options.house_id;
      this.ajaxHouseUnfollow({
        house_id: house_id
      }).then(function (res) {
        var success = res.payload.success;

        if (success) {
          _this2.showToast('取消收藏');
        } else {
          _this2.showToast('取消失败');
        }

        console.log(res);
      })["catch"](function (err) {
        _this2.showToast('取消失败');

        console.log(err);
      });
    },
    onHandleFollow: function onHandleFollow() {
      this.exeAjaxHouseFollow();
    },
    onHandleLargeImage: function onHandleLargeImage(index) {
      wx.previewImage({
        current: this.items[index].url,
        urls: [this.items[0].url, this.items[1].url]
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
    },
    onHandleInitQQMap: function onHandleInitQQMap() {
      var _this3 = this;

      var qqmapsdk = new _wxQqmapJssdk["default"]({
        key: 'CQABZ-RINL4-5MAU4-DBWDV-D2UXZ-5GBEU'
      });
      qqmapsdk.geocoder({
        address: '安徽省宣城市广德市桃州镇水岸阳光城一区13栋',
        success: function success(res) {
          _this3.onUpdateLocation(res);
        },
        complete: function complete(res) {
          console.log(res);
        }
      });
    },
    onUpdateLocation: function onUpdateLocation(res) {
      if (res) {
        var _ref = res || {},
            result = _ref.result;

        var _ref2 = result || {},
            location = _ref2.location;

        var _ref3 = location || {},
            lat = _ref3.lat,
            lng = _ref3.lng;

        this.longitude = lng;
        this.latitude = lat;
        console.log('东经=' + lng + '|北纬=' + lat);
      }
    }
  }),
  onLoad: function onLoad() {
    this.onHandleInitQQMap();
    this.exeAjaxHouseDetail();
  }
}, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"},"loading":{"path":"..\\..\\..\\components\\loading\\loading"},"error":{"path":"..\\..\\..\\components\\error\\error"},"lazy-image":{"path":"..\\..\\..\\components\\lazy-image\\lazy-image"}},"on":{"8-0":["refresh"]}}, handlers: {'8-0': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresh($event)
      })();
    
  }},'8-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSwiperChange($event)
      })();
    
  }},'8-2': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleLargeImage(index)
      })();
    
  }},'8-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleFollow($event)
      })();
    
  }},'8-4': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleMessage(item.id)
      })();
    
  }},'8-5': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.onHandlePhone(item.tel)
      })();
    
  }},'8-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClickMap($event)
      })();
    
  }},'8-7': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleMessage(_vm.isData.agency[0].id)
      })();
    
  }},'8-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandlePhone(_vm.isData.agency[0].tel)
      })();
    
  }}}, models: {} });