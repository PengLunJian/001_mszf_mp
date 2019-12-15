"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var apis = {
  baseUrl: 'https://apis.xuhuihealth.cn/',
  method: 'POST',
  timeout: 5000,
  dataType: 'json',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  selectProduct: {
    url: 'select/product'
  }
};
var _default = apis;
exports["default"] = _default;