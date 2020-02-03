"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

var _index = _interopRequireDefault(require('../../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _index["default"],
  mixins: [],
  data: {
    topBarHeight: ''
  },
  computed: {},
  methods: {},
  onLoad: function onLoad() {
    var system = wx.getSystemInfoSync();
    var statusHeight = system.statusBarHeight;
    var topBarHeight = statusHeight + 45;
    this.topBarHeight = topBarHeight + 'px';
  }
}, {info: {"components":{"top-logo":{"path":"..\\..\\components\\top-logo\\top-logo"}},"on":{}}, handlers: {}, models: {} });