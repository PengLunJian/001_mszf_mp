"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require('../../vendor.js')(28);

var _product = _interopRequireDefault(require('product.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  PRODUCT_REDUCER: _product["default"]
});

exports["default"] = _default;