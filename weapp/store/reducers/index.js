"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require('../../vendor.js')(36);

var _rentHouseList = _interopRequireDefault(require('rentHouseList.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  RENTHOUSELIST_REDUCER: _rentHouseList["default"]
});

exports["default"] = _default;