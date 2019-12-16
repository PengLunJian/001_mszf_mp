"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isExist = exports.success = void 0;

/**
 *
 * @returns {boolean}
 */
var success = function success() {
  var nums = parseInt(Math.random() * 100);
  return nums % 2 !== 0;
};
/**
 *
 * @param data
 * @returns {boolean}
 */


exports.success = success;

var isExist = function isExist(data) {
  return !data || data instanceof Array && !data.length || JSON.stringify(data) === '{}';
};

exports.isExist = isExist;