"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require('../../vendor.js')(30);

var _houseList = _interopRequireDefault(require('houseList.js'));

var _houseDetail = _interopRequireDefault(require('houseDetail.js'));

var _houseFollow = _interopRequireDefault(require('houseFollow.js'));

var _houseHistory = _interopRequireDefault(require('houseHistory.js'));

var _houseFavorite = _interopRequireDefault(require('houseFavorite.js'));

var _hotHouse = _interopRequireDefault(require('hotHouse.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  HOUSELIST_REDUCER: _houseList["default"],
  HOUSEDETAIL_REDUCER: _houseDetail["default"],
  HOUSEFOLLOW_REDUCER: _houseFollow["default"],
  HOUSEHISTORY_REDUCER: _houseHistory["default"],
  HOUSEFAVORITE_REDUCER: _houseFavorite["default"],
  HOTHOUSE_REDUCER: _hotHouse["default"]
});

exports["default"] = _default;