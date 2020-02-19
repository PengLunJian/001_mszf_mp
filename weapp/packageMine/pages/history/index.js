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
    scrollTop: 0,
    pageSize: 10,
    pageIndex: 1
  },
  computed: _objectSpread({}, (0, _redux.mapState)(controller.STATES)),
  methods: _objectSpread({}, (0, _redux.mapActions)(controller.ACTIONS), {
    onHandleScroll: function onHandleScroll(e) {
      var scrollTop = e.$wx.detail.scrollTop;
      this.scrollTop = parseInt(scrollTop);
    },
    onHandleScrollToLower: function onHandleScrollToLower() {
      var _this = this;

      if (this.timer) return;
      this.timer = setTimeout(function () {
        var _this$isData = _this.isData,
            rows = _this$isData.rows,
            totalCount = _this$isData.totalCount;

        if (rows.length < totalCount) {
          _this.exeAjaxHouseHistory();
        }
      }, 500);
    },
    resetParams: function resetParams() {
      this.pageSize = 10;
      this.pageIndex = 1;
    },
    getParams: function getParams() {
      var params = {
        page: {
          pageSize: this.pageSize,
          pageIndex: this.pageIndex
        },
        filter: [{
          field: '',
          opt: '',
          value: 0
        }]
      };
      return params;
    },
    exeAjaxHouseHistory: function exeAjaxHouseHistory() {
      var _this2 = this;

      var data = this.isData || {};
      var rows = data.rows || [];
      var params = this.getParams();
      this.ajaxHouseHistory(params).then(function (res) {
        var success = res.payload.success;

        if (success) {
          _this2.pageIndex++;
        } else {
          if (rows.length) {
            _this2.showToast('请求失败');
          }
        }

        _this2.timer = null;
        console.log(res);
      })["catch"](function (err) {
        if (rows.length) {
          _this2.showToast('请求失败');
        }

        _this2.timer = null;
        console.log(err);
      });
    },
    onRefresh: function onRefresh() {
      this.exeAjaxHouseHistory();
    }
  }),
  onLoad: function onLoad() {
    this.resetParams();
    this.resetHouseHistory();
    this.exeAjaxHouseHistory();
  }
}, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"},"loading":{"path":"..\\..\\..\\components\\loading\\loading"},"error":{"path":"..\\..\\..\\components\\error\\error"},"empty":{"path":"..\\..\\..\\components\\empty\\empty"},"load-more":{"path":"..\\..\\..\\components\\load-more\\load-more"},"rent-house-item":{"path":"..\\..\\..\\components\\rent-house-item\\rent-house-item"},"new-house-item":{"path":"..\\..\\..\\components\\new-house-item\\new-house-item"},"second-house-item":{"path":"..\\..\\..\\components\\second-house-item\\second-house-item"}},"on":{"14-9":["refresh"]}}, handlers: {'14-9': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresh($event)
      })();
    
  }},'14-10': {"scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleScrollToLower($event)
      })();
    
  }}}, models: {} });