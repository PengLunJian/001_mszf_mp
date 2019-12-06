"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(1));

var _index = _interopRequireDefault(require('../../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import {mapState} from '@wepy/redux';
_core["default"].page({
  store: _index["default"],
  mixins: [],
  data: {
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
      iconPath: '../../assets/images/address.png',
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
  computed: {},
  methods: {
    onHandleClickMap: function onHandleClickMap() {
      console.log('别摸我,我会爆炸的！');
    }
  },
  created: function created() {}
}, {info: {"components":{"top-bar":{"path":"..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClickMap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"top-bar":{"path":"..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClickMap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"top-bar":{"path":"..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClickMap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"top-bar":{"path":"..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClickMap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"top-bar":{"path":"..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClickMap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"top-bar":{"path":"..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClickMap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"top-bar":{"path":"..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClickMap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"top-bar":{"path":"..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClickMap($event)
      })();
    
  }}}, models: {} });