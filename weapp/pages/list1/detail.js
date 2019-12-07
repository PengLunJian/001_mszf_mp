"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

var _index = _interopRequireDefault(require('../../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import {mapState} from '@wepy/redux';
_core["default"].page({
  store: _index["default"],
  mixins: [],
  data: {
    items: [{
      url: '../../assets/images/banner01.jpg'
    }, {
      url: '../../assets/images/banner02.jpg'
    }, {
      url: '../../assets/images/banner01.jpg'
    }, {
      url: '../../assets/images/banner02.jpg'
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
    },
    onHandleSwiperChange: function onHandleSwiperChange(e) {
      var current = e.$wx.detail.current;
      this.current = current + 1;
    }
  },
  created: function created() {}
}, {info: {"components":{"top-bar":{"path":"..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'5-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSwiperChange($event)
      })();
    
  }},'5-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleClickMap($event)
      })();
    
  }}}, models: {} });