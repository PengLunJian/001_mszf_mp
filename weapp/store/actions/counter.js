"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncInc = void 0;

var _counter = require('../types/counter.js');

var _reduxActions = require('../../vendor.js')(46);

var asyncInc = (0, _reduxActions.createAction)(_counter.ASYNC_INCREMENT, function () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(1);
    }, 1000);
  });
});
exports.asyncInc = asyncInc;