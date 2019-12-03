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
    tabIndex: -1,
    tabs: [{
      label: '价格'
    }, {
      label: '筛选'
    }, {
      label: '排序'
    }],
    isShow: false,
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
    }]
  },
  computed: {},
  methods: {
    onHandleTab: function onHandleTab(index) {
      this.isShow = true;
      this.tabIndex = index;
    },
    onHandleDetail: function onHandleDetail(id) {
      wx.navigateTo({
        url: $routes.DETAIL.path
      });
    },
    onHandleModal: function onHandleModal() {
      this.isShow = false;
      this.tabIndex = -1;
    }
  },
  created: function created() {}
}, {info: {"components":{"top-bar":{"path":"..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'10-156': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleTab(index)
      })();
    
  }},'10-157': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleDetail(item.id)
      })();
    
  }},'10-158': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleModal($event)
      })();
    
  }}}, models: {} });