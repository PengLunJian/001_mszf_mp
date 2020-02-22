"use strict";

exports.__esModule = true;
exports.default = combineActions;

var _invariant = _interopRequireDefault(__wepy_require(33));

var _isFunction = _interopRequireDefault(__wepy_require(6));

var _isSymbol = _interopRequireDefault(__wepy_require(8));

var _isEmpty = _interopRequireDefault(__wepy_require(10));

var _toString = _interopRequireDefault(__wepy_require(7));

var _isString = _interopRequireDefault(__wepy_require(9));

var _constants = __wepy_require(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isValidActionType(type) {
  return (0, _isString.default)(type) || (0, _isFunction.default)(type) || (0, _isSymbol.default)(type);
}

function isValidActionTypes(types) {
  if ((0, _isEmpty.default)(types)) {
    return false;
  }

  return types.every(isValidActionType);
}

function combineActions() {
  for (var _len = arguments.length, actionsTypes = new Array(_len), _key = 0; _key < _len; _key++) {
    actionsTypes[_key] = arguments[_key];
  }

  (0, _invariant.default)(isValidActionTypes(actionsTypes), 'Expected action types to be strings, symbols, or action creators');
  var combinedActionType = actionsTypes.map(_toString.default).join(_constants.ACTION_TYPE_DELIMITER);
  return {
    toString: function toString() {
      return combinedActionType;
    }
  };
}