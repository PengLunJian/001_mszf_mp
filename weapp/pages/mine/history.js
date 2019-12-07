"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

var _index = _interopRequireDefault(require('../../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import {mapState} from '@wepy/redux';
_core["default"].page({
  store: _index["default"],
  mixins: [],
  data: {
    scrollTop: 0,
    items: [{
      date: '2019/11/24',
      url: '../../assets/images/item1.jpg',
      type: 1,
      minScrollTop: 0,
      maxScrollTop: 390
    }, {
      date: '2019/11/24',
      url: '../../assets/images/item2.jpg',
      type: 2
    }, {
      date: '2019/11/24',
      url: '../../assets/images/item3.jpg',
      type: 3
    }, {
      date: '2019/11/23',
      url: '../../assets/images/item1.jpg',
      type: 1,
      minScrollTop: 390,
      maxScrollTop: 780
    }, {
      date: '2019/11/23',
      url: '../../assets/images/item2.jpg',
      type: 2
    }, {
      date: '2019/11/23',
      url: '../../assets/images/item3.jpg',
      type: 3
    }, {
      date: '2019/11/22',
      url: '../../assets/images/item1.jpg',
      type: 1,
      minScrollTop: 780,
      maxScrollTop: 1170
    }, {
      date: '2019/11/22',
      url: '../../assets/images/item2.jpg',
      type: 2
    }, {
      date: '2019/11/22',
      url: '../../assets/images/item3.jpg',
      type: 3
    }, {
      date: '2019/11/21',
      url: '../../assets/images/item1.jpg',
      type: 1,
      minScrollTop: 1170,
      maxScrollTop: 1560
    }, {
      date: '2019/11/21',
      url: '../../assets/images/item2.jpg',
      type: 2
    }, {
      date: '2019/11/21',
      url: '../../assets/images/item3.jpg',
      type: 3
    }, {
      date: '2019/11/20',
      url: '../../assets/images/item1.jpg',
      type: 1,
      minScrollTop: 1560,
      maxScrollTop: 1950
    }, {
      date: '2019/11/20',
      url: '../../assets/images/item2.jpg',
      type: 2
    }, {
      date: '2019/11/20',
      url: '../../assets/images/item3.jpg',
      type: 3
    }]
  },
  computed: {},
  methods: {
    onHandleScroll: function onHandleScroll(e) {
      var scrollTop = e.$wx.detail.scrollTop;
      this.scrollTop = parseInt(scrollTop);
    }
  },
  created: function created() {}
}, {info: {"components":{"top-bar":{"path":"..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {'11-29': {"scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleScroll($event)
      })();
    
  }}}, models: {} });