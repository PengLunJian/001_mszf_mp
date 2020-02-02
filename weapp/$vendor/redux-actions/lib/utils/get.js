"use strict";

exports.__esModule = true;
exports.default = get;

var _isMap = _interopRequireDefault(__wepy_require(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get(key, x) {
  return (0, _isMap.default)(x) ? x.get(key) : x[key];
}