"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _core = _interopRequireDefault(require('../../vendor.js')(0));

var _index = _interopRequireDefault(require('../../store/index.js'));

var _redux = require('../../vendor.js')(1);

var controller = _interopRequireWildcard(require('controller.js'));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].page({
  store: _index["default"],
  mixins: [],
  data: {
    iSwitch: true,
    tabIndex: -1,
    tabs: [{
      index: 0,
      label: '价格',
      isShow: false
    }, {
      index: 1,
      label: '筛选',
      isShow: false
    }, {
      index: 2,
      label: '排序',
      isShow: false
    }],
    btnPrice: {
      initIndex: -1,
      items: ['1000以下', '1k-2k', '2k-3k', '3k-4k', '4k-5k', '5k-6k', '6k-7k', '7k-8k', '8k-9k', '9k-10k']
    },
    minPrice: '价格',
    maxPrice: '不限',
    trackStylePrice: ['background: -webkit-linear-gradient(left, #FFBB1D, #F2890B);'],
    handleStylePrice: ['transform:translate3d(-50%,-50%,0) scale(1.0);box-shadow:0 0 15px rgba(0,0,0,.15)', 'transform:translate3d(-50%,-50%,0) scale(1.0);box-shadow:0 0 15px rgba(0,0,0,.15)'],
    minArea: '面积',
    maxArea: '不限',
    trackStyleArea: ['background: -webkit-linear-gradient(left, #FFBB1D, #F2890B);'],
    handleStyleArea: ['transform:translate3d(-50%,-50%,0) scale(1.0);box-shadow:0 0 15px rgba(0,0,0,.15)', 'transform:translate3d(-50%,-50%,0) scale(1.0);box-shadow:0 0 15px rgba(0,0,0,.15)']
  },
  computed: _objectSpread({}, (0, _redux.mapState)(controller.STATES)),
  methods: _objectSpread({}, (0, _redux.mapActions)(controller.ACTIONS), {
    onHandleTabChange: function onHandleTabChange(index) {
      var _this = this;

      this.tabs.map(function (item) {
        if (index !== item.index) {
          _this.tabs[item.index].isShow = false;
        } else {
          if (_this.tabs[index].isShow) {
            _this.tabs[index].isShow = false;
            _this.tabIndex = -1;
            _this.iSwitch = true;
          } else {
            _this.tabs[index].isShow = true;
            _this.tabIndex = index;
            _this.iSwitch = false;
          }
        }
      });
    },
    onHandleCloseModal: function onHandleCloseModal(index) {
      this.iSwitch = true;
      this.tabs[index].isShow = false;
      this.tabIndex = -1;
    },
    onHandleSliderChangePrice: function onHandleSliderChangePrice(e) {
      var maxLabel = '';
      var minPrice = e.$wx.detail.value[0];
      var maxPrice = e.$wx.detail.value[1];

      if (!minPrice) {
        if (maxPrice >= 10000) {
          maxLabel = '不限';
        } else {
          maxLabel = maxPrice + '元以下';
        }
      } else {
        if (maxPrice >= 10000) {
          maxLabel = minPrice + '元以上';
        } else {
          maxLabel = minPrice + '-' + maxPrice + '元';
        }
      }

      this.maxPrice = maxLabel;
      this.btnPrice.initIndex = -1;
    },
    onHandleSliderChangeArea: function onHandleSliderChangeArea(e) {
      var maxLabel = '';
      var minArea = e.$wx.detail.value[0];
      var maxArea = e.$wx.detail.value[1];

      if (!minArea) {
        if (maxArea >= 300) {
          maxLabel = '不限';
        } else {
          maxLabel = maxArea + 'm²';
        }
      } else {
        if (maxArea >= 300) {
          maxLabel = minArea + 'm²以上';
        } else {
          maxLabel = minArea + '-' + maxArea + 'm²';
        }
      }

      this.maxArea = maxLabel;
    },
    onHandlePriceFilter: function onHandlePriceFilter(index) {
      var btnIndex = this.btnPrice.initIndex;

      if (btnIndex === index) {
        this.btnPrice.initIndex = -1;
      } else {
        this.btnPrice.initIndex = index;
      }
    }
  }),
  onLoad: function onLoad() {
    this.ajaxProduct().then(function (res) {
      console.log(res);
    })["catch"](function (err) {
      console.log(err);
    });
  }
}, {info: {"components":{"top-bar":{"path":"..\\..\\components\\top-bar\\top-bar"},"loading":{"path":"..\\..\\components\\loading\\loading"},"inline-loading":{"path":"..\\..\\components\\inline-loading\\inline-loading"},"rent-house-item":{"path":"..\\..\\components\\rent-house-item\\rent-house-item"},"wux-slider":{"path":"..\\..\\$vendor\\wux-weapp\\dist\\slider\\index"}},"on":{"5-38":["change"],"5-40":["change"]}}, handlers: {'5-35': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleTabChange(index)
      })();
    
  }},'5-36': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(0)
      })();
    
  }},'5-37': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandlePriceFilter(index)
      })();
    
  }},'5-38': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangePrice($event)
      })();
    
  }},'5-39': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(1)
      })();
    
  }},'5-40': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangeArea($event)
      })();
    
  }},'5-41': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(2)
      })();
    
  }}}, models: {} }, {info: {"components":{"top-bar":{"path":"..\\..\\components\\top-bar\\top-bar"},"loading":{"path":"..\\..\\components\\loading\\loading"},"inline-loading":{"path":"..\\..\\components\\inline-loading\\inline-loading"},"rent-house-item":{"path":"..\\..\\components\\rent-house-item\\rent-house-item"},"wux-slider":{"path":"..\\..\\$vendor\\wux-weapp\\dist\\slider\\index"}},"on":{"5-38":["change"],"5-40":["change"]}}, handlers: {'5-35': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleTabChange(index)
      })();
    
  }},'5-36': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(0)
      })();
    
  }},'5-37': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandlePriceFilter(index)
      })();
    
  }},'5-38': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangePrice($event)
      })();
    
  }},'5-39': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(1)
      })();
    
  }},'5-40': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangeArea($event)
      })();
    
  }},'5-41': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(2)
      })();
    
  }}}, models: {} });