"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reduxActions = require('../../vendor.js')(47);

var actionTypes = _interopRequireWildcard(require('../actionTypes.js'));

var states = _interopRequireWildcard(require('../states.js'));

var _actions;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actions = (_actions = {}, _defineProperty(_actions, actionTypes.SELECT_HOUSELIST_REQUEST, function (state) {
  return _objectSpread({}, state, {
    isLoading: true,
    isSuccess: false,
    isFailure: false
  });
}), _defineProperty(_actions, actionTypes.SELECT_HOUSELIST_SUCCESS, function (state, action) {
  var oldData = state.data || {};
  var oldRows = oldData.rows || [];
  var newData = action.data || {};
  var newRows = newData.rows || [];
  action.data.rows = oldRows.concat(newRows);
  return _objectSpread({}, state, {
    isLoading: false,
    isSuccess: true,
    isFailure: false,
    data: action.data
  });
}), _defineProperty(_actions, actionTypes.SELECT_HOUSELIST_FAILURE, function (state) {
  return _objectSpread({}, state, {
    isLoading: false,
    isSuccess: false,
    isFailure: true
  });
}), _defineProperty(_actions, actionTypes.RESET_HOUSELIST_STATE, function (state) {
  return _objectSpread({}, state, {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    data: null
  });
}), _actions);
var HOUSELIST_REDUCER = (0, _reduxActions.handleActions)(actions, states.HOUSELIST_STATE);
var _default = HOUSELIST_REDUCER;
exports["default"] = _default;