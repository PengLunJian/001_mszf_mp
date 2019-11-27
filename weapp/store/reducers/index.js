"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require('../../vendor.js')(5);

var _home = _interopRequireDefault(require('home.js'));

var _cart = _interopRequireDefault(require('cart.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  HOME_REDUCER: _home["default"],
  CART_REDUCER: _cart["default"]
});

exports["default"] = _default;