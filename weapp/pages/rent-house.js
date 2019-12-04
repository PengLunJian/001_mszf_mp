"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _store = _interopRequireDefault(require('../store/index.js'));

var $routes = _interopRequireWildcard(require('../router/index.js'));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import {mapState} from '@wepy/redux';
_core["default"].page({
  store: _store["default"],
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
      initIndex: -1
    },
    items: [{
      id: 1001,
      url: '../assets/images/item2.jpg'
    }, {
      id: 1001,
      url: '../assets/images/item2.jpg'
    }, {
      id: 1001,
      url: '../assets/images/item2.jpg'
    }, {
      id: 1001,
      url: '../assets/images/item2.jpg'
    }, {
      id: 1001,
      url: '../assets/images/item2.jpg'
    }, {
      id: 1001,
      url: '../assets/images/item2.jpg'
    }, {
      id: 1001,
      url: '../assets/images/item2.jpg'
    }, {
      id: 1001,
      url: '../assets/images/item2.jpg'
    }, {
      id: 1001,
      url: '../assets/images/item2.jpg'
    }, {
      id: 1001,
      url: '../assets/images/item2.jpg'
    }],
    minLabel: '价格',
    maxLabel: '不限',
    trackStyle: ['background: -webkit-linear-gradient(left, #FFBB1D, #F2890B);'],
    handleStyle: ['margin-top:-28rpx;transform:scale(1.0);box-shadow:0 0 15px rgba(0,0,0,.15)', 'margin-left:-56rpx;margin-top:-28rpx;transform:scale(1.0);box-shadow:0 0 15px rgba(0,0,0,.15)']
  },
  computed: {},
  methods: {
    onHandleTab: function onHandleTab(index) {
      var _this = this;

      this.tabs.map(function (item) {
        if (index !== item.index) {
          _this.tabs[item.index].isShow = false;
        }
      });
      this.tabs[index].isShow = true;
      this.tabIndex = index;
      this.iSwitch = false;
    },
    onHandleDetail: function onHandleDetail(id) {
      console.log(id);
      wx.navigateTo({
        url: $routes.DETAIL.path
      });
    },
    onHandleCloseModal: function onHandleCloseModal(index) {
      this.iSwitch = true;
      this.tabs[index].isShow = false;
      this.tabIndex = -1;
    },
    onHandleSliderChange: function onHandleSliderChange(e) {
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

      this.maxLabel = maxLabel;
    },
    onHandlePriceFilter: function onHandlePriceFilter() {}
  },
  created: function created() {}
}, {info: {"components":{"top-bar":{"path":"..\\components\\top-bar\\top-bar"},"wux-slider":{"path":"..\\$vendor\\wux-weapp\\dist\\slider\\index"}},"on":{"10-544":["change"]}}, handlers: {'10-541': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleTab(index)
      })();
    
  }},'10-542': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleDetail(item.id)
      })();
    
  }},'10-543': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(0)
      })();
    
  }},'10-544': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChange($event)
      })();
    
  }},'10-545': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(1)
      })();
    
  }},'10-546': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(2)
      })();
    
  }}}, models: {} });