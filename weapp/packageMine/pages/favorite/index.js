"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _core = _interopRequireDefault(require('../../../vendor.js')(0));

var _index = _interopRequireDefault(require('../../../store/index.js'));

var _redux = require('../../../vendor.js')(1);

var controller = _interopRequireWildcard(require('controller.js'));

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
    timer: null,
    pageSize: 10,
    tabIndex: 0,
    tabs: [{
      label: '租房',
      type: 3,
      pageIndex: 1
    }, {
      label: '二手房',
      type: 2,
      pageIndex: 1
    }, {
      label: '新房',
      type: 1,
      pageIndex: 1
    }],
    current: 0
  },
  computed: _objectSpread({}, (0, _redux.mapState)(controller.STATES)),
  methods: _objectSpread({}, (0, _redux.mapActions)(controller.ACTIONS), {
    onHandleTabChange: function onHandleTabChange(index) {
      var _this = this;

      this.tabIndex = index;
      this.current = this.tabIndex;
      var type = this.tabs[this.tabIndex].type;
      if (this.tabTimer) clearInterval(this.tabTimer);
      this.tabTimer = setTimeout(function () {
        if (type === 1 && _this.isNewLoading) {
          _this.exeAjaxHouseFavorite();
        } else if (type === 2 && _this.isSecondLoading) {
          _this.exeAjaxHouseFavorite();
        } else if (type === 3 && _this.isRentLoading) {
          _this.exeAjaxHouseFavorite();
        }
      }, 500);
    },
    onHandleSwiperChange: function onHandleSwiperChange(e) {
      var _this2 = this;

      var current = e.$wx.detail.current;
      this.tabIndex = current;
      this.current = current;
      var type = this.tabs[this.tabIndex].type;
      if (this.tabTimer) clearInterval(this.tabTimer);
      this.tabTimer = setTimeout(function () {
        if (type === 1 && _this2.isNewLoading) {
          _this2.exeAjaxHouseFavorite();
        } else if (type === 2 && _this2.isSecondLoading) {
          _this2.exeAjaxHouseFavorite();
        } else if (type === 3 && _this2.isRentLoading) {
          _this2.exeAjaxHouseFavorite();
        }
      }, 500);
    },
    resetParams: function resetParams() {
      this.tabs.map(function (item) {
        item.pageIndex = 1;
      });
    },
    exeAjaxHouseFavorite: function exeAjaxHouseFavorite() {
      var _this3 = this;

      var params = {
        page: {
          pageSize: this.pageSize,
          pageIndex: this.tabs[this.tabIndex].pageIndex
        },
        filter: [{
          field: 'type',
          opt: '=',
          value: this.tabs[this.tabIndex].type
        }]
      };
      this.ajaxHouseFavorite(params).then(function (res) {
        var success = res.payload.success;

        if (success) {
          var type = params.filter[0].value;

          _this3.tabs.map(function (item) {
            if (item.type === type) {
              item.pageIndex++;
            }
          });
        } else {}

        _this3.timer = null;
        console.log(res);
      })["catch"](function (err) {
        _this3.timer = null;
        console.log(err);
      });
    },
    onHandleScrollToLower: function onHandleScrollToLower() {
      var _this4 = this;

      if (this.timer) return;
      this.timer = setTimeout(function () {
        var type = _this4.tabs[_this4.tabIndex].type;

        if (type === 1) {
          var _this4$isNewData = _this4.isNewData,
              rows = _this4$isNewData.rows,
              totalCount = _this4$isNewData.totalCount;

          if (rows.length < totalCount) {
            _this4.exeAjaxHouseFavorite();
          }
        } else if (type === 2) {
          var _this4$isSecondData = _this4.isSecondData,
              _rows = _this4$isSecondData.rows,
              _totalCount = _this4$isSecondData.totalCount;

          if (_rows.length < _totalCount) {
            _this4.exeAjaxHouseFavorite();
          }
        } else if (type === 3) {
          var _this4$isRentData = _this4.isRentData,
              _rows2 = _this4$isRentData.rows,
              _totalCount2 = _this4$isRentData.totalCount;

          if (_rows2.length < _totalCount2) {
            _this4.exeAjaxHouseFavorite();
          }
        }
      }, 1000);
    },
    onRefresh: function onRefresh() {
      this.exeAjaxHouseFavorite();
    }
  }),
  onLoad: function onLoad() {
    this.resetParams();
    this.resetHouseFavorite();
    this.exeAjaxHouseFavorite();
  }
}, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"},"loading":{"path":"..\\..\\..\\components\\loading\\loading"},"error":{"path":"..\\..\\..\\components\\error\\error"},"empty":{"path":"..\\..\\..\\components\\empty\\empty"},"load-more":{"path":"..\\..\\..\\components\\load-more\\load-more"},"rent-house-item":{"path":"..\\..\\..\\components\\rent-house-item\\rent-house-item"},"new-house-item":{"path":"..\\..\\..\\components\\new-house-item\\new-house-item"},"second-house-item":{"path":"..\\..\\..\\components\\second-house-item\\second-house-item"}},"on":{"13-26":["refresh"],"13-28":["refresh"],"13-30":["refresh"]}}, handlers: {'13-24': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleTabChange(index)
      })();
    
  }},'13-25': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSwiperChange($event)
      })();
    
  }},'13-26': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresh($event)
      })();
    
  }},'13-27': {"scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleScrollToLower($event)
      })();
    
  }},'13-28': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresh($event)
      })();
    
  }},'13-29': {"scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleScrollToLower($event)
      })();
    
  }},'13-30': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresh($event)
      })();
    
  }},'13-31': {"scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleScrollToLower($event)
      })();
    
  }}}, models: {} });