"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reduxActions = require('../../vendor.js')(47);

var actionTypes = _interopRequireWildcard(require('../actionTypes.js'));

var utils = _interopRequireWildcard(require('../../utils/index.js'));

var states = _interopRequireWildcard(require('../states.js'));

var _actions;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actions = (_actions = {}, _defineProperty(_actions, actionTypes.SELECT_HOUSEDETAIL_REQUEST, function (state) {
  return _objectSpread({}, state, {
    isLoading: true,
    isSuccess: false,
    isFailure: false
  });
}), _defineProperty(_actions, actionTypes.SELECT_HOUSEDETAIL_SUCCESS, function (state, action) {
  var items = ['http://sersms.com:7000/house/v1/file/static/userfile/202001/13/1216582503799492608.jpg', 'http://sersms.com:7000/house/v1/file/static/userfile/202001/13/1216581838603849728.jpg'];
  var configs = [{
    icon: 'icon-item01',
    label: '卫生间',
    isCan: false
  }, {
    icon: 'icon-item02',
    label: '洗衣机',
    isCan: false
  }, {
    icon: 'icon-item03',
    label: '可做饭',
    isCan: false
  }, {
    icon: 'icon-item04',
    label: '热水器',
    isCan: false
  }, {
    icon: 'icon-item05',
    label: '阳台',
    isCan: false
  }, {
    icon: 'icon-item06',
    label: '冰箱',
    isCan: false
  }, {
    icon: 'icon-item07',
    label: '电梯',
    isCan: false
  }, {
    icon: 'icon-item08',
    label: '沙发',
    isCan: false
  }, {
    icon: 'icon-item09',
    label: '宽带',
    isCan: false
  }, {
    icon: 'icon-item10',
    label: '衣柜',
    isCan: false
  }, {
    icon: 'icon-item11',
    label: '暖气',
    isCan: false
  }, {
    icon: 'icon-item12',
    label: '床',
    isCan: false
  }, {
    icon: 'icon-item13',
    label: '空调',
    isCan: false
  }, {
    icon: 'icon-item14',
    label: '电视',
    isCan: false
  }];

  var _ref = action.data || {},
      fagnwupeizhi = _ref.fagnwupeizhi,
      release_time = _ref.release_time,
      kaipan = _ref.kaipan,
      jiaofang = _ref.jiaofang,
      tags = _ref.tags;

  if (fagnwupeizhi) {
    configs.map(function (item) {
      if (fagnwupeizhi.indexOf(item.label) !== -1) {
        item.isCan = true;
      }
    });
  }

  action.data.pic_url = items;
  action.data.configs = configs;
  action.data.release_time = release_time.substring(0, 10);
  action.data.tags = tags.split(' ');
  action.data.kaipan = utils.dateFormat(kaipan, 'yyyy-mm-dd');
  action.data.jiaofang = utils.dateFormat(jiaofang, 'yyyy-mm-dd');
  return _objectSpread({}, state, {
    isLoading: false,
    isSuccess: true,
    isFailure: false,
    data: action.data
  });
}), _defineProperty(_actions, actionTypes.SELECT_HOUSEDETAIL_FAILURE, function (state) {
  return _objectSpread({}, state, {
    isLoading: false,
    isSuccess: false,
    isFailure: true
  });
}), _actions);
var HOUSEDETAIL_REDUCER = (0, _reduxActions.handleActions)(actions, states.HOUSEDETAIL_STATE);
var _default = HOUSEDETAIL_REDUCER;
exports["default"] = _default;