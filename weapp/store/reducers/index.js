"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require('../../vendor.js')(30);

var _houseList = _interopRequireDefault(require('houseList.js'));

var _houseDetail = _interopRequireDefault(require('houseDetail.js'));

var _houseFollow = _interopRequireDefault(require('houseFollow.js'));

var _houseFavorite = _interopRequireDefault(require('houseFavorite.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  HOUSELIST_REDUCER: _houseList["default"],
  HOUSEDETAIL_REDUCER: _houseDetail["default"],
  HOUSEFOLLOW_REDUCER: _houseFollow["default"],
  HOUSEFAVORITE_REDUCER: _houseFavorite["default"]
});

exports["default"] = _default;