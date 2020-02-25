"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _core = _interopRequireDefault(require('../../../vendor.js')(0));

var _store = _interopRequireDefault(require('../../../store/index.js'));

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
  store: _store["default"],
  mixins: [_toast["default"]],
  data: {
    timer: null,
    pageIndex: 1,
    pageSize: 10,
    iSwitch: true,
    tabIndex: -1,
    tabs: [{
      index: 0,
      label: '区域',
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
    btnArea: {
      activeIndex: 2,
      items: [{
        state: false,
        label: '宣州区'
      }, {
        state: false,
        label: '郎溪县'
      }, {
        state: true,
        label: '广德市'
      }, {
        state: false,
        label: '宁国市'
      }, {
        state: false,
        label: '泾县'
      }, {
        state: false,
        label: '绩溪县'
      }, {
        state: false,
        label: '旌德县'
      }]
    },
    btnPrice: {
      initIndex: -1,
      items: ['1000以下', '1k-2k', '2k-3k', '3k-4k', '4k-5k', '5k-6k', '6k-7k', '7k-8k', '8k-9k', '9k-10k']
    },
    btnSize: {
      initIndex: -1,
      items: ['50m²以下', '50-70m²', '70-90m²', '90-110m²', '110-130m²', '130-150m²', '150-200m²', '200-300m²', '300-500m²', '500m²以上']
    },
    btnMethod: {
      initIndex: -1,
      items: ['整租', '合租', '转租']
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
    trackStylePrice: ['background: -webkit-linear-gradient(left, #FFCC00, #FF9900);'],
    handleStylePrice: ['transform:translate3d(-50%,-50%,0) scale(1.0);box-shadow:0 0 15px rgba(0,0,0,.15)', 'transform:translate3d(-50%,-50%,0) scale(1.0);box-shadow:0 0 15px rgba(0,0,0,.15)'],
    minSize: '面积',
    maxSize: '不限',
    sliderSizeValue: [0, 500],
    trackStyleSize: ['background: -webkit-linear-gradient(left, #FFCC00, #FF9900);'],
    handleStyleSize: ['transform:translate3d(-50%,-50%,0) scale(1.0);box-shadow:0 0 15px rgba(0,0,0,.15)', 'transform:translate3d(-50%,-50%,0) scale(1.0);box-shadow:0 0 15px rgba(0,0,0,.15)']
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
      this.btnPrice.initIndex = -1;
      this.maxPrice = maxLabel;
    },
    onHandleSliderChangeSize: function onHandleSliderChangeSize(e) {
      var maxLabel = '';
      var value = e.$wx.detail.value;
      var minSize = value[0];
      var maxSize = value[1];

      if (!minSize) {
        if (maxSize >= 500) {
          maxLabel = '不限';
        } else {
          maxLabel = maxSize + 'm²';
        }
      } else {
        if (maxSize >= 500) {
          maxLabel = minSize + 'm²以上';
        } else {
          maxLabel = minSize + '-' + maxSize + 'm²';
        }
      }

      this.sliderSizeValue = value;
      this.btnSize.initIndex = -1;
      this.maxSize = maxLabel;
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
    onHandleSizeFilter: function onHandleSizeFilter(index) {
      var btnIndex = this.btnSize.initIndex;

      if (btnIndex === index) {
        this.btnSize.initIndex = -1;
      } else {
        this.btnSize.initIndex = index;
      }

      this.maxSize = '不限';
      this.sliderSizeValue = [0, 500];
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
      this.btnArea.activeIndex = -1;
    },
    onHandleClearModal2: function onHandleClearModal2() {
      this.btnMethod.initIndex = -1;
      this.btnLayout.initIndex = -1;
      this.btnStyle.initIndex = -1;
      this.maxSize = '不限';
      this.btnSize.initIndex = -1;
      this.sliderSizeValue = [0, 500];
      this.maxPrice = '不限';
      this.btnPrice.initIndex = -1;
      this.sliderPriceValue = [0, 10000];
    },
    onHandleScrollToLower: function onHandleScrollToLower() {
      var _this2 = this;

      if (this.timer) return;
      this.timer = setTimeout(function () {
        var _this2$isData = _this2.isData,
            rows = _this2$isData.rows,
            totalCount = _this2$isData.totalCount;

        if (rows.length < totalCount) {
          _this2.exeAjaxHouseList();
        }
      }, 500);
    },
    onHandleChooseArea: function onHandleChooseArea(item, index) {
      if (item.state) {
        this.btnArea.activeIndex = index;
      }
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
          field: 'type',
          opt: '=',
          value: 3
        }],
        sort: [{
          field: 'id',
          asc: false
        }]
      };
      return params;
    },
    exeAjaxHouseList: function exeAjaxHouseList() {
      var _this3 = this;

      var data = this.isData || {};
      var rows = data.rows || [];
      var params = this.getParams();
      this.ajaxHouseList(params).then(function (res) {
        var success = res.payload.success;

        if (success) {
          _this3.pageIndex++;
        } else {
          if (rows.length) {
            _this3.showToast('请求失败');
          }
        }

        _this3.timer = null;
        console.log(res);
      })["catch"](function (err) {
        if (rows.length) {
          _this3.showToast('请求失败');
        }

        _this3.timer = null;
        console.log(err);
      });
    },
    onRefresh: function onRefresh() {
      this.exeAjaxHouseList();
    }
  }),
  onLoad: function onLoad() {
    this.resetParams();
    this.resetHouseList();
    this.exeAjaxHouseList();
  }
}, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"},"loading":{"path":"..\\..\\..\\components\\loading\\loading"},"error":{"path":"..\\..\\..\\components\\error\\error"},"empty":{"path":"..\\..\\..\\components\\empty\\empty"},"load-more":{"path":"..\\..\\..\\components\\load-more\\load-more"},"rent-house-item":{"path":"..\\..\\..\\components\\rent-house-item\\rent-house-item"},"wux-slider":{"path":"..\\..\\..\\$vendor\\wux-weapp\\dist\\slider\\index"}},"on":{"9-1":["refresh"],"9-11":["change"],"9-13":["change"]}}, handlers: {'9-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleTabChange(index)
      })();
    
  }},'9-1': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresh($event)
      })();
    
  }},'9-2': {"scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleScrollToLower($event)
      })();
    
  }},'9-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(0)
      })();
    
  }},'9-4': {"tap": function proxy (item, index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleChooseArea(item,index)
      })();
    
  }},'9-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClearModal1($event)
      })();
    
  }},'9-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(1)
      })();
    
  }},'9-7': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleMethodFilter(index)
      })();
    
  }},'9-8': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleLayoutFilter(index)
      })();
    
  }},'9-9': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleStyleFilter(index)
      })();
    
  }},'9-10': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandlePriceFilter(index)
      })();
    
  }},'9-11': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangePrice($event)
      })();
    
  }},'9-12': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleSizeFilter(index)
      })();
    
  }},'9-13': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangeSize($event)
      })();
    
  }},'9-14': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClearModal2($event)
      })();
    
  }},'9-15': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(2)
      })();
    
  }},'9-16': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleSortFilter(index)
      })();
    
  }}}, models: {} }, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"},"loading":{"path":"..\\..\\..\\components\\loading\\loading"},"error":{"path":"..\\..\\..\\components\\error\\error"},"empty":{"path":"..\\..\\..\\components\\empty\\empty"},"load-more":{"path":"..\\..\\..\\components\\load-more\\load-more"},"rent-house-item":{"path":"..\\..\\..\\components\\rent-house-item\\rent-house-item"},"wux-slider":{"path":"..\\..\\..\\$vendor\\wux-weapp\\dist\\slider\\index"}},"on":{"9-1":["refresh"],"9-11":["change"],"9-13":["change"]}}, handlers: {'9-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleTabChange(index)
      })();
    
  }},'9-1': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresh($event)
      })();
    
  }},'9-2': {"scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleScrollToLower($event)
      })();
    
  }},'9-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(0)
      })();
    
  }},'9-4': {"tap": function proxy (item, index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleChooseArea(item,index)
      })();
    
  }},'9-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClearModal1($event)
      })();
    
  }},'9-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(1)
      })();
    
  }},'9-7': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleMethodFilter(index)
      })();
    
  }},'9-8': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleLayoutFilter(index)
      })();
    
  }},'9-9': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleStyleFilter(index)
      })();
    
  }},'9-10': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandlePriceFilter(index)
      })();
    
  }},'9-11': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangePrice($event)
      })();
    
  }},'9-12': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleSizeFilter(index)
      })();
    
  }},'9-13': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangeSize($event)
      })();
    
  }},'9-14': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClearModal2($event)
      })();
    
  }},'9-15': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(2)
      })();
    
  }},'9-16': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleSortFilter(index)
      })();
    
  }}}, models: {} }, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"},"loading":{"path":"..\\..\\..\\components\\loading\\loading"},"error":{"path":"..\\..\\..\\components\\error\\error"},"empty":{"path":"..\\..\\..\\components\\empty\\empty"},"load-more":{"path":"..\\..\\..\\components\\load-more\\load-more"},"rent-house-item":{"path":"..\\..\\..\\components\\rent-house-item\\rent-house-item"},"wux-slider":{"path":"..\\..\\..\\$vendor\\wux-weapp\\dist\\slider\\index"}},"on":{"9-1":["refresh"],"9-11":["change"],"9-13":["change"]}}, handlers: {'9-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleTabChange(index)
      })();
    
  }},'9-1': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresh($event)
      })();
    
  }},'9-2': {"scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleScrollToLower($event)
      })();
    
  }},'9-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(0)
      })();
    
  }},'9-4': {"tap": function proxy (item, index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleChooseArea(item,index)
      })();
    
  }},'9-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClearModal1($event)
      })();
    
  }},'9-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(1)
      })();
    
  }},'9-7': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleMethodFilter(index)
      })();
    
  }},'9-8': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleLayoutFilter(index)
      })();
    
  }},'9-9': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleStyleFilter(index)
      })();
    
  }},'9-10': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandlePriceFilter(index)
      })();
    
  }},'9-11': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangePrice($event)
      })();
    
  }},'9-12': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleSizeFilter(index)
      })();
    
  }},'9-13': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSliderChangeSize($event)
      })();
    
  }},'9-14': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClearModal2($event)
      })();
    
  }},'9-15': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onHandleCloseModal(2)
      })();
    
  }},'9-16': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleSortFilter(index)
      })();
    
  }}}, models: {} });