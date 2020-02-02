"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACTIONS = exports.STATES = void 0;

var actions = _interopRequireWildcard(require('../../../store/actions.js'));

var actionTypes = _interopRequireWildcard(require('../../../store/actionTypes.js'));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var STATES = {
  isRentLoading: function isRentLoading(state) {
    return state.HOUSEFAVORITE_REDUCER.rentHouse.isLoading;
  },
  isRentSuccess: function isRentSuccess(state) {
    return state.HOUSEFAVORITE_REDUCER.rentHouse.isSuccess;
  },
  isRentFailure: function isRentFailure(state) {
    return state.HOUSEFAVORITE_REDUCER.rentHouse.isFailure;
  },
  isRentData: function isRentData(state) {
    return state.HOUSEFAVORITE_REDUCER.rentHouse.data;
  },
  isSecondLoading: function isSecondLoading(state) {
    return state.HOUSEFAVORITE_REDUCER.secondHouse.isLoading;
  },
  isSecondSuccess: function isSecondSuccess(state) {
    return state.HOUSEFAVORITE_REDUCER.secondHouse.isSuccess;
  },
  isSecondFailure: function isSecondFailure(state) {
    return state.HOUSEFAVORITE_REDUCER.secondHouse.isFailure;
  },
  isSecondData: function isSecondData(state) {
    return state.HOUSEFAVORITE_REDUCER.secondHouse.data;
  },
  isNewLoading: function isNewLoading(state) {
    return state.HOUSEFAVORITE_REDUCER.newHouse.isLoading;
  },
  isNewSuccess: function isNewSuccess(state) {
    return state.HOUSEFAVORITE_REDUCER.newHouse.isSuccess;
  },
  isNewFailure: function isNewFailure(state) {
    return state.HOUSEFAVORITE_REDUCER.newHouse.isFailure;
  },
  isNewData: function isNewData(state) {
    return state.HOUSEFAVORITE_REDUCER.newHouse.data;
  }
};
exports.STATES = STATES;
var ACTIONS = {
  resetHouseFavorite: actionTypes.RESET_HOUSEFAVORITE_STATE,
  ajaxHouseFavorite: function ajaxHouseFavorite(params) {
    return actions.ajaxRequestHouseFavorite(params);
  }
};
exports.ACTIONS = ACTIONS;