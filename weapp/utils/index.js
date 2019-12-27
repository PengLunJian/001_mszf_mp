"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataFilter = exports.stringify = exports.isExist = exports.success = void 0;

/**
 *
 * @returns {boolean}
 */
var success = function success() {
  var nums = parseInt(Math.random() * 100);
  return nums % 19 !== 0;
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
/**
 *
 * @param params
 * @returns {*}
 */


exports.isExist = isExist;

var stringify = function stringify(params) {
  for (var key in params) {
    if (params[key] instanceof Array) {
      params[key] = JSON.stringify(params[key]);
    }
  }

  return params;
};
/**
 *
 * @param data
 * @returns {*}
 */


exports.stringify = stringify;

var dataFilter = function dataFilter(data) {
  data.map(function (item) {
    item.tags = item.tags.split(' ');
  });
  return data;
};

exports.dataFilter = dataFilter;