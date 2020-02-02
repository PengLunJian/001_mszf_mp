"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require('../vendor.js')(30);

var _reduxPromise = _interopRequireDefault(require('../vendor.js')(41));

var _reducers = _interopRequireDefault(require('reducers/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.createStore)(_reducers["default"], (0, _redux.applyMiddleware)(_reduxPromise["default"]));

exports["default"] = _default;