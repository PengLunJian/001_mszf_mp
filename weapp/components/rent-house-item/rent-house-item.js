"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _core = _interopRequireDefault(require('../../vendor.js')(0));

var $routes = _interopRequireWildcard(require('../../router/index.js'));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  data: {},
  props: {
    item: {
      type: Object,
      "default": {}
    }
  },
  events: {},
  methods: {
    onHandleDetail: function onHandleDetail(id) {
      wx.navigateTo({
        url: $routes.RENT_HOUSE_DETAIL.path + '?house_id=' + id
      });
    }
  },
  onLoad: function onLoad() {}
}, {info: {"components":{},"on":{}}, handlers: {'94-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleDetail(_vm.item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'94-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleDetail(_vm.item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'94-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleDetail(_vm.item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'94-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleDetail(_vm.item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'94-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleDetail(_vm.item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'94-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleDetail(_vm.item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'94-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleDetail(_vm.item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'94-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleDetail(_vm.item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'94-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleDetail(_vm.item.id)
      })();
    
  }}}, models: {} });