"use strict";

exports.__esModule = true;
exports.default = handleActions;

var _reduceReducers = _interopRequireDefault(__wepy_require(37));

var _invariant = _interopRequireDefault(__wepy_require(33));

var _isPlainObject = _interopRequireDefault(__wepy_require(21));

var _isMap = _interopRequireDefault(__wepy_require(18));

var _ownKeys = _interopRequireDefault(__wepy_require(19));

var _flattenReducerMap = _interopRequireDefault(__wepy_require(26));

var _handleAction = _interopRequireDefault(__wepy_require(32));

var _get = _interopRequireDefault(__wepy_require(20));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleActions(handlers, defaultState, options) {
  if (options === void 0) {
    options = {};
  }

  (0, _invariant.default)((0, _isPlainObject.default)(handlers) || (0, _isMap.default)(handlers), 'Expected handlers to be a plain object.');
  var flattenedReducerMap = (0, _flattenReducerMap.default)(handlers, options);
  var reducers = (0, _ownKeys.default)(flattenedReducerMap).map(function (type) {
    return (0, _handleAction.default)(type, (0, _get.default)(type, flattenedReducerMap), defaultState);
  });

  var reducer = _reduceReducers.default.apply(void 0, reducers.concat([defaultState]));

  return function (state, action) {
    if (state === void 0) {
      state = defaultState;
    }

    return reducer(state, action);
  };
}