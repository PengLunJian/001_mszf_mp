"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

var _index = _interopRequireDefault(require('../../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import {mapState} from '@wepy/redux';
_core["default"].page({
  store: _index["default"],
  mixins: [],
  data: {
    tabIndex: 0,
    tabs: [{
      label: '租房'
    }, {
      label: '二手房'
    }, {
      label: '新房'
    }],
    items: [{
      url: '../../assets/images/item1.jpg'
    }, {
      url: '../../assets/images/item2.jpg'
    }, {
      url: '../../assets/images/item3.jpg'
    }, {
      url: '../../assets/images/item1.jpg'
    }, {
      url: '../../assets/images/item2.jpg'
    }, {
      url: '../../assets/images/item3.jpg'
    }, {
      url: '../../assets/images/item1.jpg'
    }, {
      url: '../../assets/images/item2.jpg'
    }, {
      url: '../../assets/images/item3.jpg'
    }, {
      url: '../../assets/images/item1.jpg'
    }, {
      url: '../../assets/images/item2.jpg'
    }, {
      url: '../../assets/images/item3.jpg'
    }],
    current: 0
  },
  computed: {},
  methods: {
    onHandleTabChange: function onHandleTabChange(index) {
      this.tabIndex = index;
      this.current = this.tabIndex;
    },
    onHandleSwiperChange: function onHandleSwiperChange(e) {
      var current = e.$wx.detail.current;
      this.tabIndex = current;
      this.current = current;
    }
  },
  created: function created() {}
}, {info: {"components":{"top-bar":{"path":"..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'14-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleTabChange(index)
      })();
    
  }},'14-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSwiperChange($event)
      })();
    
  }}}, models: {} });