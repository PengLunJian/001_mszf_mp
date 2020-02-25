"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _core = _interopRequireDefault(require('../../../vendor.js')(0));

var _store = _interopRequireDefault(require('../../../store/index.js'));

var _redux = require('../../../vendor.js')(1);

var controller = _interopRequireWildcard(require('controller.js'));

var _wxQqmapJssdk = _interopRequireDefault(require('../../../vendor.js')(2));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].page({
  store: _store["default"],
  data: {
    longitude: 0,
    latitude: 0
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
    onRefresh: function onRefresh() {
      this.exeAjaxHouseDetail();
    },
    onHandleInitQQMap: function onHandleInitQQMap() {
      var _this = this;

      var qqmapsdk = new _wxQqmapJssdk["default"]({
        key: 'CQABZ-RINL4-5MAU4-DBWDV-D2UXZ-5GBEU'
      });
      qqmapsdk.geocoder({
        address: '安徽省宣城市广德市桃州镇水岸阳光城一区13栋',
        success: function success(res) {
          _this.onUpdateLocation(res);
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
}, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"},"loading":{"path":"..\\..\\..\\components\\loading\\loading"},"error":{"path":"..\\..\\..\\components\\error\\error"},"detail-banner":{"path":"..\\..\\..\\components\\detail-banner\\detail-banner"},"detail-base":{"path":"..\\..\\..\\components\\detail-base\\detail-base"},"detail-agent":{"path":"..\\..\\..\\components\\detail-agent\\detail-agent"},"detail-config":{"path":"..\\..\\..\\components\\detail-config\\detail-config"},"detail-map":{"path":"..\\..\\..\\components\\detail-map\\detail-map"},"detail-footer":{"path":"..\\..\\..\\components\\detail-footer\\detail-footer"}},"on":{"8-0":["refresh"]}}, handlers: {'8-0': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresh($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"},"loading":{"path":"..\\..\\..\\components\\loading\\loading"},"error":{"path":"..\\..\\..\\components\\error\\error"},"detail-banner":{"path":"..\\..\\..\\components\\detail-banner\\detail-banner"},"detail-base":{"path":"..\\..\\..\\components\\detail-base\\detail-base"},"detail-agent":{"path":"..\\..\\..\\components\\detail-agent\\detail-agent"},"detail-config":{"path":"..\\..\\..\\components\\detail-config\\detail-config"},"detail-map":{"path":"..\\..\\..\\components\\detail-map\\detail-map"},"detail-footer":{"path":"..\\..\\..\\components\\detail-footer\\detail-footer"}},"on":{"8-0":["refresh"]}}, handlers: {'8-0': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresh($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"},"loading":{"path":"..\\..\\..\\components\\loading\\loading"},"error":{"path":"..\\..\\..\\components\\error\\error"},"detail-banner":{"path":"..\\..\\..\\components\\detail-banner\\detail-banner"},"detail-base":{"path":"..\\..\\..\\components\\detail-base\\detail-base"},"detail-agent":{"path":"..\\..\\..\\components\\detail-agent\\detail-agent"},"detail-config":{"path":"..\\..\\..\\components\\detail-config\\detail-config"},"detail-map":{"path":"..\\..\\..\\components\\detail-map\\detail-map"},"detail-footer":{"path":"..\\..\\..\\components\\detail-footer\\detail-footer"}},"on":{"8-0":["refresh"]}}, handlers: {'8-0': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresh($event)
      })();
    
  }}}, models: {} });