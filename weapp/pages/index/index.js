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
      add_userid: 1,
      addr: '广德路与万贵山路交叉口',
      addr_qu: '徐汇区',
      addr_sheng: '江苏省',
      addr_shi: '苏州省',
      agency_com_name: '中一房产',
      agency_phone: '15011110001',
      chaoxiang: '朝南',
      chuzufangshi: '整租',
      ext: {
        备注: 3
      },
      fagnwupeizhi: '床 衣柜 沙发 电视 洗衣机',
      followed: null,
      huxing: '2室一厅1卫',
      id: 139,
      jiaofang: '2021-05-11 00:00:00',
      kaipan: '2019-05-11 00:00:00',
      kanfangshijian: '随时看房',
      leixing: '小区',
      louceng: '16/20',
      mianji: 140,
      nianai: '2014年',
      phone: '150****0001',
      pic_url: ['/pic/a.jpg', '/pic/a.jpg'],
      price: 10000,
      release_time: '2019-11-29 22:27:00',
      status: 1,
      tags: ['南北通透', '精装修', '随时看房'],
      title: '万象小区 南向两居式 精装 拎包入住',
      total_price: 1400000,
      type: 3,
      xiaoqu: '金峰万象小区',
      zhaungxiu: '精装修',
      zhifufangshi: '押一付三',
      zhulihuxing: null
    }, {
      add_userid: 1,
      addr: '广德路与万贵山路交叉口',
      addr_qu: '徐汇区',
      addr_sheng: '江苏省',
      addr_shi: '苏州省',
      agency_com_name: '中一房产',
      agency_phone: '15011110001',
      chaoxiang: '朝南',
      chuzufangshi: '整租',
      ext: {
        备注: 3
      },
      fagnwupeizhi: '床 衣柜 沙发 电视 洗衣机',
      followed: null,
      huxing: '2室一厅1卫',
      id: 139,
      jiaofang: '2021-05-11 00:00:00',
      kaipan: '2019-05-11 00:00:00',
      kanfangshijian: '随时看房',
      leixing: '小区',
      louceng: '16/20',
      mianji: 140,
      nianai: '2014年',
      phone: '150****0001',
      pic_url: ['/pic/a.jpg', '/pic/a.jpg'],
      price: 10000,
      release_time: '2019-11-29 22:27:00',
      status: 1,
      tags: ['南北通透', '精装修', '随时看房'],
      title: '万象小区 南向两居式 精装 拎包入住',
      total_price: 1400000,
      type: 3,
      xiaoqu: '金峰万象小区',
      zhaungxiu: '精装修',
      zhifufangshi: '押一付三',
      zhulihuxing: null
    }, {
      add_userid: 1,
      addr: '广德路与万贵山路交叉口',
      addr_qu: '徐汇区',
      addr_sheng: '江苏省',
      addr_shi: '苏州省',
      agency_com_name: '中一房产',
      agency_phone: '15011110001',
      chaoxiang: '朝南',
      chuzufangshi: '整租',
      ext: {
        备注: 3
      },
      fagnwupeizhi: '床 衣柜 沙发 电视 洗衣机',
      followed: null,
      huxing: '2室一厅1卫',
      id: 139,
      jiaofang: '2021-05-11 00:00:00',
      kaipan: '2019-05-11 00:00:00',
      kanfangshijian: '随时看房',
      leixing: '小区',
      louceng: '16/20',
      mianji: 140,
      nianai: '2014年',
      phone: '150****0001',
      pic_url: ['/pic/a.jpg', '/pic/a.jpg'],
      price: 10000,
      release_time: '2019-11-29 22:27:00',
      status: 1,
      tags: ['南北通透', '精装修', '随时看房'],
      title: '万象小区 南向两居式 精装 拎包入住',
      total_price: 1400000,
      type: 3,
      xiaoqu: '金峰万象小区',
      zhaungxiu: '精装修',
      zhifufangshi: '押一付三',
      zhulihuxing: null
    }],
    addressUrl: $routes.ADDRESS.path,
    searchUrl: $routes.SEARCH.path
  },
  computed: {},
  methods: {},
  onLoad: function onLoad() {}
}, {info: {"components":{"banner":{"path":"..\\..\\components\\banner\\banner"},"customer-navigator":{"path":"..\\..\\components\\customer-navigator\\customer-navigator"},"rent-house-item":{"path":"..\\..\\components\\rent-house-item\\rent-house-item"},"second-house-item":{"path":"..\\..\\components\\second-house-item\\second-house-item"},"new-house-item":{"path":"..\\..\\components\\new-house-item\\new-house-item"}},"on":{}}, handlers: {}, models: {} });