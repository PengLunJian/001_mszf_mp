"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CART_STATE = exports.HOME_STATE = void 0;
var HOME_STATE = {
  qrcode: {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    data: null
  }
};
exports.HOME_STATE = HOME_STATE;
var CART_STATE = {
  product: {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    data: null
  }
};
exports.CART_STATE = CART_STATE;