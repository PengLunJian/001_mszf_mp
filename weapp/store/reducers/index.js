"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require('../../vendor.js')(7);

var _counter = _interopRequireDefault(require('counter.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  counter: _counter["default"]
});

exports["default"] = _default;