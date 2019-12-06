"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(1));

var _index = _interopRequireDefault(require('../../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import {mapState} from '@wepy/redux';
_core["default"].page({
  store: _index["default"],
  mixins: [],
  data: {
    items: [{
      date: '2019/11/24',
      url: '../../assets/images/item1.jpg',
      type: 1
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
      type: 1
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
      type: 1
    }, {
      date: '2019/11/22',
      url: '../../assets/images/item2.jpg',
      type: 2
    }, {
      date: '2019/11/22',
      url: '../../assets/images/item3.jpg',
      type: 3
    }]
  },
  computed: {},
  methods: {},
  created: function created() {}
}, {info: {"components":{"top-bar":{"path":"..\\..\\components\\top-bar\\top-bar"}},"on":{}}, handlers: {}, models: {} });