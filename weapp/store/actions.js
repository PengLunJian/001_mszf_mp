"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ajaxRequestHouseFollow = exports.ajaxRequestHouseDetail = exports.ajaxRequestRentHouseList = void 0;

var _apis = _interopRequireDefault(require('../apis/index.js'));

var _index = _interopRequireDefault(require('index.js'));

var _axios = _interopRequireDefault(require('../axios/index.js'));

var utils = _interopRequireWildcard(require('../utils/index.js'));

var actionTypes = _interopRequireWildcard(require('actionTypes.js'));

var _reduxActions = require('../vendor.js')(48);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 *
 * @param type
 * @param data
 */
var commit = function commit(type, data) {
  _index["default"].dispatch({
    type: type,
    data: data
  });
};

var ajaxRequestRentHouseList = (0, _reduxActions.createAction)('selectRentHouseList', function (params) {
  commit(actionTypes.SELECT_RENTHOUSELIST_REQUEST);
  return new Promise(function (resolve, reject) {
    _axios["default"].get(_apis["default"].selectRentHouseList, {
      params: params
    }).then(function (res) {
      res = res || {};
      var _res = res,
          data = _res.data,
          success = _res.success;

      if (success) {
        data.rows = utils.dataFilter(data.rows);
        commit(actionTypes.SELECT_RENTHOUSELIST_SUCCESS, data);
      } else {
        commit(actionTypes.SELECT_RENTHOUSELIST_FAILURE);
      }

      resolve(res);
    })["catch"](function (err) {
      commit(actionTypes.SELECT_RENTHOUSELIST_FAILURE);
      reject(err);
    });
  });
});
exports.ajaxRequestRentHouseList = ajaxRequestRentHouseList;
var ajaxRequestHouseDetail = (0, _reduxActions.createAction)('selectHouseDetail', function (params) {
  commit(actionTypes.SELECT_HOUSEDETAIL_REQUEST);
  return new Promise(function (resolve, reject) {
    _axios["default"].get(_apis["default"].selectHouseDetail, {
      params: params
    }).then(function (res) {
      res = res || {};
      var _res2 = res,
          data = _res2.data,
          success = _res2.success;

      if (success) {
        commit(actionTypes.SELECT_HOUSEDETAIL_SUCCESS, data);
      } else {
        commit(actionTypes.SELECT_HOUSEDETAIL_FAILURE);
      }

      resolve(res);
    })["catch"](function (err) {
      commit(actionTypes.SELECT_HOUSEDETAIL_FAILURE);
      reject(err);
    });
  });
});
exports.ajaxRequestHouseDetail = ajaxRequestHouseDetail;
var ajaxRequestHouseFollow = (0, _reduxActions.createAction)('insertHouseFollow', function (params) {
  commit(actionTypes.INSERT_HOUSEFOLLOW_REQUEST);
  return new Promise(function (resolve, reject) {
    _axios["default"].post(_apis["default"].insertHouseFollow, params).then(function (res) {
      res = res || {};
      var _res3 = res,
          data = _res3.data,
          success = _res3.success;

      if (success) {
        commit(actionTypes.INSERT_HOUSEFOLLOW_SUCCESS, data);
      } else {
        commit(actionTypes.INSERT_HOUSEFOLLOW_FAILURE);
      }

      resolve(res);
    })["catch"](function (err) {
      commit(actionTypes.INSERT_HOUSEFOLLOW_FAILURE);
      reject(err);
    });
  });
});
exports.ajaxRequestHouseFollow = ajaxRequestHouseFollow;