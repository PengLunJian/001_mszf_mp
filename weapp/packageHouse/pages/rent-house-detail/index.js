"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _core = _interopRequireDefault(require('../../../vendor.js')(1));

var _index = _interopRequireDefault(require('../../../store/index.js'));

var _redux = require('../../../vendor.js')(0);

var controller = _interopRequireWildcard(require('controller.js'));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import Toast from '../../../mixins/toast';
_core["default"].page({
  store: _index["default"],
  mixins: [],
  data: {
    items: [{
      url: '../../images/banner01.jpg'
    }, {
      url: '../../images/banner02.jpg'
    }, {
      url: '../../images/banner01.jpg'
    }, {
      url: '../../images/banner02.jpg'
    }],
    current: 1,
    autoplay: false,
    circular: true,
    longitude: 119.4235460000,
    latitude: 30.8791290000,
    enableZoom: false,
    enableScroll: false,
    markers: [{
      id: 1,
      longitude: 119.4235460000,
      latitude: 30.8791290000,
      iconPath: '../../../assets/images/address.png',
      width: 30,
      height: 30,
      label: {
        content: 'INFINITY',
        padding: 10,
        anchorX: 20,
        anchorY: -35,
        fontSize: 14,
        borderRadius: 4,
        bgColor: '#ffffff',
        textAlign: 'center'
      }
    }]
  },
  computed: _objectSpread({}, (0, _redux.mapState)(controller.STATES)),
  methods: _objectSpread({}, (0, _redux.mapActions)(controller.ACTIONS), {
    exeAjaxHouseDetail: function exeAjaxHouseDetail() {
      var house_id = this.$wx.options.house_id;
      this.ajaxHouseDetail({
        house_id: house_id
      }).then(function (res) {
        console.log(res);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    onHandleClickMap: function onHandleClickMap() {
      console.log('别摸我,我会爆炸的！');
    },
    onHandleSwiperChange: function onHandleSwiperChange(e) {
      var current = e.$wx.detail.current;
      this.current = current + 1;
    },
    onRefresh: function onRefresh() {
      this.exeAjaxHouseDetail();
    }
  }),
  onLoad: function onLoad() {
    this.exeAjaxHouseDetail();
  }
}, {info: {"components":{"top-bar":{"path":"..\\..\\..\\components\\top-bar\\top-bar"},"loading":{"path":"..\\..\\..\\components\\loading\\loading"},"error":{"path":"..\\..\\..\\components\\error\\error"}},"on":{"6-0":["refresh"]}}, handlers: {'6-0': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresh($event)
      })();
    
  }},'6-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSwiperChange($event)
      })();
    
  }},'6-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClickMap($event)
      })();
    
  }}}, models: {} });