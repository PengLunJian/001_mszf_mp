"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _core = _interopRequireDefault(require('../../vendor.js')(0));

var _index = _interopRequireDefault(require('../../store/index.js'));

var $routes = _interopRequireWildcard(require('../../router/index.js'));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import {mapState} from '@wepy/redux';
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
      items: ['100万以下', '100-200万', '200-300万', '300-400万', '400-500万', '500-600万', '600-700万', '700-800万', '800-900万', '900万以上']
    },
    items: [{
      id: 1001,
      url: '../../assets/images/item1.jpg'
    }, {
      id: 1001,
      url: '../../assets/images/item2.jpg'
    }, {
      id: 1001,
      url: '../../assets/images/item3.jpg'
    }, {
      id: 1001,
      url: '../../assets/images/item1.jpg'
    }, {
      id: 1001,
      url: '../../assets/images/item2.jpg'
    }, {
      id: 1001,
      url: '../../assets/images/item3.jpg'
    }, {
      id: 1001,
      url: '../../assets/images/item1.jpg'
    }, {
      id: 1001,
      url: '../../assets/images/item2.jpg'
    }, {
      id: 1001,
      url: '../../assets/images/item3.jpg'
    }, {
      id: 1001,
      url: '../../assets/images/item1.jpg'
    }, {
      id: 1001,
      url: '../../assets/images/item2.jpg'
    }, {
      id: 1001,
      url: '../../assets/images/item3.jpg'
    }],
    minPrice: '价格',
    maxPrice: '不限',
    trackStylePrice: ['background: -webkit-linear-gradient(left, #FFBB1D, #F2890B);'],
    handleStylePrice: ['transform:translate3d(-50%,-50%,0) scale(1.0);box-shadow:0 0 15px rgba(0,0,0,.15)', 'transform:translate3d(-50%,-50%,0) scale(1.0);box-shadow:0 0 15px rgba(0,0,0,.15)'],
    minArea: '面积',
    maxArea: '不限',
    trackStyleArea: ['background: -webkit-linear-gradient(left, #FFBB1D, #F2890B);'],
    handleStyleArea: ['transform:translate3d(-50%,-50%,0) scale(1.0);box-shadow:0 0 15px rgba(0,0,0,.15)', 'transform:translate3d(-50%,-50%,0) scale(1.0);box-shadow:0 0 15px rgba(0,0,0,.15)']
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
        url: $routes.DETAIL3.path
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
        if (maxPrice >= 1000) {
          maxLabel = '不限';
        } else {
          maxLabel = maxPrice + '万以下';
        }
      } else {
        if (maxPrice >= 1000) {
          maxLabel = minPrice + '万以上';
        } else {
          maxLabel = minPrice + '-' + maxPrice + '万';
        }
      }

      this.maxPrice = maxLabel;
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
      this.btnPrice.initIndex = index;
    }
  },
  created: function created() {}
}, {info: {"components":{"top-bar":{"path":"..\\..\\components\\top-bar\\top-bar"},"wux-slider":{"path":"..\\..\\$vendor\\wux-weapp\\dist\\slider\\index"}},"on":{"9-4":["change"],"9-6":["change"]}}, handlers: {'9-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleTab(index)
      })();
    
  }},'9-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleDetail(item.id)
      })();
    
  }},'9-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(0)
      })();
    
  }},'9-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandlePriceFilter(index)
      })();
    
  }},'9-4': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangePrice($event)
      })();
    
  }},'9-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(1)
      })();
    
  }},'9-6': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangeArea($event)
      })();
    
  }},'9-7': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(2)
      })();
    
  }}}, models: {} }, {info: {"components":{"top-bar":{"path":"..\\..\\components\\top-bar\\top-bar"},"wux-slider":{"path":"..\\..\\$vendor\\wux-weapp\\dist\\slider\\index"}},"on":{"9-4":["change"],"9-6":["change"]}}, handlers: {'9-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleTab(index)
      })();
    
  }},'9-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleDetail(item.id)
      })();
    
  }},'9-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(0)
      })();
    
  }},'9-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandlePriceFilter(index)
      })();
    
  }},'9-4': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangePrice($event)
      })();
    
  }},'9-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(1)
      })();
    
  }},'9-6': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangeArea($event)
      })();
    
  }},'9-7': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(2)
      })();
    
  }}}, models: {} }, {info: {"components":{"top-bar":{"path":"..\\..\\components\\top-bar\\top-bar"},"wux-slider":{"path":"..\\..\\$vendor\\wux-weapp\\dist\\slider\\index"}},"on":{"9-4":["change"],"9-6":["change"]}}, handlers: {'9-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleTab(index)
      })();
    
  }},'9-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleDetail(item.id)
      })();
    
  }},'9-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(0)
      })();
    
  }},'9-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandlePriceFilter(index)
      })();
    
  }},'9-4': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangePrice($event)
      })();
    
  }},'9-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(1)
      })();
    
  }},'9-6': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangeArea($event)
      })();
    
  }},'9-7': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(2)
      })();
    
  }}}, models: {} }, {info: {"components":{"top-bar":{"path":"..\\..\\components\\top-bar\\top-bar"},"wux-slider":{"path":"..\\..\\$vendor\\wux-weapp\\dist\\slider\\index"}},"on":{"9-4":["change"],"9-6":["change"]}}, handlers: {'9-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleTab(index)
      })();
    
  }},'9-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleDetail(item.id)
      })();
    
  }},'9-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(0)
      })();
    
  }},'9-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandlePriceFilter(index)
      })();
    
  }},'9-4': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangePrice($event)
      })();
    
  }},'9-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(1)
      })();
    
  }},'9-6': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangeArea($event)
      })();
    
  }},'9-7': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(2)
      })();
    
  }}}, models: {} }, {info: {"components":{"top-bar":{"path":"..\\..\\components\\top-bar\\top-bar"},"wux-slider":{"path":"..\\..\\$vendor\\wux-weapp\\dist\\slider\\index"}},"on":{"9-4":["change"],"9-6":["change"]}}, handlers: {'9-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleTab(index)
      })();
    
  }},'9-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleDetail(item.id)
      })();
    
  }},'9-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(0)
      })();
    
  }},'9-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandlePriceFilter(index)
      })();
    
  }},'9-4': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangePrice($event)
      })();
    
  }},'9-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(1)
      })();
    
  }},'9-6': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangeArea($event)
      })();
    
  }},'9-7': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(2)
      })();
    
  }}}, models: {} });