"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACTIONS = exports.STATES = void 0;

var actions = _interopRequireWildcard(require('../../store/actions.js'));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var STATES = {
  isLoading: function isLoading(state) {
    return state.PRODUCT_REDUCER.product.isLoading;
  },
  isSuccess: function isSuccess(state) {
    return state.PRODUCT_REDUCER.product.isSuccess;
  },
  isFailure: function isFailure(state) {
    return state.PRODUCT_REDUCER.product.isFailure;
  },
  isData: function isData(state) {
    return state.PRODUCT_REDUCER.product.data;
  }
};
exports.STATES = STATES;
var ACTIONS = {
  ajaxProduct: actions.ajaxRequestProduct
};
exports.ACTIONS = ACTIONS;