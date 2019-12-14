"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFSA = isFSA;
exports.isError = isError;

var _lodash = __wepy_require(37);

function isFSA(action) {
  return (0, _lodash.isPlainObject)(action) && (0, _lodash.isString)(action.type) && Object.keys(action).every(isValidKey);
}

function isError(action) {
  return isFSA(action) && action.error === true;
}

function isValidKey(key) {
  return ['type', 'payload', 'error', 'meta'].indexOf(key) > -1;
}