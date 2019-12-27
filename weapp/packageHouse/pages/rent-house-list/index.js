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
    isMore: false,
    pageIndex: 1,
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
    btnMethod: {
      initIndex: -1,
      items: ['整租', '合租']
    },
    btnLayout: {
      initIndex: -1,
      items: ['一室', '二室', '三室', '四室', '五室', '五室以上']
    },
    btnStyle: {
      initIndex: -1,
      items: ['毛坯', '简装', '中装', '精装', '豪装', '其他']
    },
    btnSort: {
      initIndex: -1,
      items: ['综合排序', '价格从低到高', '价格从高到底', '面积从小到大', '面积从大到小']
    },
    minPrice: '价格',
    maxPrice: '不限',
    sliderPriceValue: [0, 10000],
    trackStylePrice: ['background: -webkit-linear-gradient(left, #FFBB00, #FF9900);'],
    handleStylePrice: ['transform:translate3d(-50%,-50%,0) scale(1.0);box-shadow:0 0 15px rgba(0,0,0,.15)', 'transform:translate3d(-50%,-50%,0) scale(1.0);box-shadow:0 0 15px rgba(0,0,0,.15)'],
    minArea: '面积',
    maxArea: '不限',
    sliderAreaValue: [0, 300],
    trackStyleArea: ['background: -webkit-linear-gradient(left, #FFBB00, #FF9900);'],
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
      var value = e.$wx.detail.value;
      var minPrice = value[0];
      var maxPrice = value[1];

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

      this.sliderPriceValue = value;
      this.maxPrice = maxLabel;
      this.btnPrice.initIndex = -1;
    },
    onHandleSliderChangeArea: function onHandleSliderChangeArea(e) {
      var maxLabel = '';
      var value = e.$wx.detail.value;
      var minArea = value[0];
      var maxArea = value[1];

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

      this.sliderAreaValue = value;
      this.maxArea = maxLabel;
    },
    onHandlePriceFilter: function onHandlePriceFilter(index) {
      var btnIndex = this.btnPrice.initIndex;

      if (btnIndex === index) {
        this.btnPrice.initIndex = -1;
      } else {
        this.btnPrice.initIndex = index;
      }

      this.maxPrice = '不限';
      this.sliderPriceValue = [0, 10000];
    },
    onHandleMethodFilter: function onHandleMethodFilter(index) {
      var btnIndex = this.btnMethod.initIndex;

      if (btnIndex === index) {
        this.btnMethod.initIndex = -1;
      } else {
        this.btnMethod.initIndex = index;
      }
    },
    onHandleLayoutFilter: function onHandleLayoutFilter(index) {
      var btnIndex = this.btnLayout.initIndex;

      if (btnIndex === index) {
        this.btnLayout.initIndex = -1;
      } else {
        this.btnLayout.initIndex = index;
      }
    },
    onHandleStyleFilter: function onHandleStyleFilter(index) {
      var btnIndex = this.btnStyle.initIndex;

      if (btnIndex === index) {
        this.btnStyle.initIndex = -1;
      } else {
        this.btnStyle.initIndex = index;
      }
    },
    onHandleSortFilter: function onHandleSortFilter(index) {
      var btnIndex = this.btnSort.initIndex;

      if (btnIndex === index) {
        this.btnSort.initIndex = -1;
      } else {
        this.btnSort.initIndex = index;
      }
    },
    onHandleClearModal1: function onHandleClearModal1() {
      this.maxPrice = '不限';
      this.btnPrice.initIndex = -1;
      this.sliderPriceValue = [0, 10000];
    },
    onHandleClearModal2: function onHandleClearModal2() {
      this.maxArea = '不限';
      this.btnMethod.initIndex = -1;
      this.btnLayout.initIndex = -1;
      this.btnStyle.initIndex = -1;
      this.sliderAreaValue = [0, 300];
    },
    onHandleScrollToLower: function onHandleScrollToLower() {
      var _this$isData = this.isData,
          rows = _this$isData.rows,
          totalCount = _this$isData.totalCount;

      if (rows.length < totalCount) {
        this.pageIndex++;
        var params = this.getParams();
        this.ajaxRentHouseList(params);
      }
    },
    getParams: function getParams() {
      var params = {
        page: {
          pageIndex: this.pageIndex,
          pageSize: 10
        }
      };
      return params;
    }
  }),
  onLoad: function onLoad() {
    var _this2 = this;

    this.pageIndex = 1;
    this.resetRentHouseList();
    var params = this.getParams();
    this.ajaxRentHouseList(params).then(function (res) {
      console.log(res);
    })["catch"](function (err) {
      if (_this2.isData.rows.length) {
        _this2.showToast('cancel', '请求失败');
      }

      console.log(err);
    });
  }
}, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"},"loading":{"path":"..\\..\\..\\components\\loading\\loading"},"load-more":{"path":"..\\..\\..\\components\\load-more\\load-more"},"rent-house-item":{"path":"..\\..\\..\\components\\rent-house-item\\rent-house-item"},"wux-slider":{"path":"..\\..\\..\\$vendor\\wux-weapp\\dist\\slider\\index"},"wux-toast":{"path":"..\\..\\..\\$vendor\\wux-weapp\\dist\\toast\\index"}},"on":{"7-298":["change"],"7-304":["change"]}}, handlers: {'7-294': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleTabChange(index)
      })();
    
  }},'7-295': {"scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleScrollToLower($event)
      })();
    
  }},'7-296': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(0)
      })();
    
  }},'7-297': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandlePriceFilter(index)
      })();
    
  }},'7-298': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangePrice($event)
      })();
    
  }},'7-299': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClearModal1($event)
      })();
    
  }},'7-300': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(1)
      })();
    
  }},'7-301': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleMethodFilter(index)
      })();
    
  }},'7-302': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleLayoutFilter(index)
      })();
    
  }},'7-303': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleStyleFilter(index)
      })();
    
  }},'7-304': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangeArea($event)
      })();
    
  }},'7-305': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClearModal2($event)
      })();
    
  }},'7-306': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(2)
      })();
    
  }},'7-307': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleSortFilter(index)
      })();
    
  }}}, models: {} });