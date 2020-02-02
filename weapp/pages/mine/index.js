"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _core = _interopRequireDefault(require('../../vendor.js')(0));

var _index = _interopRequireDefault(require('../../store/index.js'));

var $routes = _interopRequireWildcard(require('../../router/index.js'));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _index["default"],
  mixins: [],
  data: {
    items: [{
      name: $routes.FAVORITE.name,
      path: $routes.FAVORITE.path,
      icon: 'icon-favorite'
    }, {
      name: $routes.HISTORY.name,
      path: $routes.HISTORY.path,
      icon: 'icon-history'
    }, {
      name: $routes.RELEASE.name,
      path: $routes.RELEASE.path,
      icon: 'icon-release'
    }, {
      name: $routes.SUGGEST.name,
      path: $routes.SUGGEST.path,
      icon: 'icon-suggest'
    }, {
      name: $routes.ABOUT.name,
      path: $routes.ABOUT.path,
      icon: 'icon-info'
    }]
  },
  computed: {},
  methods: {
    onHandleClick: function onHandleClick(item) {
      if (item.name !== '意见反馈') {
        wx.navigateTo({
          url: item.path
        });
      }
    }
  },
  created: function created() {}
}, {info: {"components":{"top-logo":{"path":"..\\..\\components\\top-logo\\top-logo"}},"on":{}}, handlers: {'5-31': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleClick(item)
      })();
    
  }}}, models: {} });