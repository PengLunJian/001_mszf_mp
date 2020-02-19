"use strict";

exports.__esModule = true;
exports.default = handleAction;

var _invariant = _interopRequireDefault(__wepy_require(33));

var _isFunction = _interopRequireDefault(__wepy_require(6));

var _isPlainObject = _interopRequireDefault(__wepy_require(12));

var _identity = _interopRequireDefault(__wepy_require(11));

var _isNil = _interopRequireDefault(__wepy_require(15));

var _isUndefined = _interopRequireDefault(__wepy_require(19));

var _toString = _interopRequireDefault(__wepy_require(9));

var _constants = __wepy_require(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleAction(type, reducer, defaultState) {
  if (reducer === void 0) {
    reducer = _identity.default;
  }

  var types = (0, _toString.default)(type).split(_constants.ACTION_TYPE_DELIMITER);
  (0, _invariant.default)(!(0, _isUndefined.default)(defaultState), "defaultState for reducer handling " + types.join(', ') + " should be defined");
  (0, _invariant.default)((0, _isFunction.default)(reducer) || (0, _isPlainObject.default)(reducer), 'Expected reducer to be a function or object with next and throw reducers');

  var _ref = (0, _isFunction.default)(reducer) ? [reducer, reducer] : [reducer.next, reducer.throw].map(function (aReducer) {
    return (0, _isNil.default)(aReducer) ? _identity.default : aReducer;
  }),
      nextReducer = _ref[0],
      throwReducer = _ref[1];

  return function (state, action) {
    if (state === void 0) {
      state = defaultState;
    }

    var actionType = action.type;

    if (!actionType || types.indexOf((0, _toString.default)(actionType)) === -1) {
      return state;
    }

    return (action.error === true ? throwReducer : nextReducer)(state, action);
  };
}