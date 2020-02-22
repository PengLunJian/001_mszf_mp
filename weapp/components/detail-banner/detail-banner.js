"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _core = _interopRequireDefault(require('../../vendor.js')(0));

var _store = _interopRequireDefault(require('../../store/index.js'));

var _redux = require('../../vendor.js')(1);

var controller = _interopRequireWildcard(require('controller.js'));

var _toast = _interopRequireDefault(require('../../mixins/toast.js'));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].component({
  store: _store["default"],
  mixins: [_toast["default"]],
  data: {
    current: 1,
    autoplay: false,
    circular: true
  },
  props: {
    isData: {
      type: Object,
      "default": {}
    }
  },
  events: {},
  methods: _objectSpread({}, (0, _redux.mapActions)(controller.ACTIONS), {
    onHandleLargeImage: function onHandleLargeImage(index) {
      wx.previewImage({
        current: this.isData.pic_url[index],
        urls: this.isData.pic_url
      });
    },
    onHandleSwiperChange: function onHandleSwiperChange(e) {
      var current = e.$wx.detail.current;
      this.current = current + 1;
    },
    exeAjaxHouseFollow: function exeAjaxHouseFollow() {
      var _this = this;

      console.log(this);
      var params = {
        house_id: this.isData.id
      };
      this.ajaxHouseFollow(params).then(function (res) {
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

      var params = {
        house_id: this.isData.id
      };
      this.ajaxHouseUnfollow(params).then(function (res) {
        var success = res.payload.success;

        if (success) {
          _this2.showToast('取消收藏成功');
        } else {
          _this2.showToast('取消收藏失败');
        }

        console.log(res);
      })["catch"](function (err) {
        _this2.showToast('取消收藏失败');

        console.log(err);
      });
    },
    onHandleFollow: function onHandleFollow() {
      this.exeAjaxHouseFollow();
    }
  }),
  created: function created() {}
}, {info: {"components":{"lazy-image":{"path":"..\\lazy-image\\lazy-image"}},"on":{}}, handlers: {'107-3': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSwiperChange($event)
      })();
    
  }},'107-4': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleLargeImage(index)
      })();
    
  }},'107-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleFollow($event)
      })();
    
  }}}, models: {} });