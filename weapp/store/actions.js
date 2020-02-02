"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ajaxRequestHouseFavorite = exports.ajaxRequestHouseUnfollow = exports.ajaxRequestHouseFollow = exports.ajaxRequestHouseDetail = exports.ajaxRequestHouseList = void 0;

var _apis = _interopRequireDefault(require('../apis/index.js'));

var _index = _interopRequireDefault(require('index.js'));

var _axios = _interopRequireDefault(require('../axios/index.js'));

var utils = _interopRequireWildcard(require('../utils/index.js'));

var actionTypes = _interopRequireWildcard(require('actionTypes.js'));

var _reduxActions = require('../vendor.js')(47);

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

var ajaxRequestHouseList = (0, _reduxActions.createAction)('selectHouseList', function (params) {
  commit(actionTypes.SELECT_HOUSELIST_REQUEST);
  return new Promise(function (resolve, reject) {
    _axios["default"].get(_apis["default"].selectHouseList, {
      params: params
    }).then(function (res) {
      res = res || {};
      var _res = res,
          data = _res.data,
          success = _res.success;

      if (success) {
        data.rows = utils.dataFilter(data.rows);
        commit(actionTypes.SELECT_HOUSELIST_SUCCESS, data);
      } else {
        commit(actionTypes.SELECT_HOUSELIST_FAILURE);
      }

      resolve(res);
    })["catch"](function (err) {
      commit(actionTypes.SELECT_HOUSELIST_FAILURE);
      reject(err);
    });
  });
});
exports.ajaxRequestHouseList = ajaxRequestHouseList;
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
var ajaxRequestHouseFollow = (0, _reduxActions.createAction)('updateHouseFollow', function (params) {
  commit(actionTypes.UPDATE_HOUSEFOLLOW_REQUEST);
  return new Promise(function (resolve, reject) {
    _axios["default"].post(_apis["default"].updateHouseFollow, params).then(function (res) {
      res = res || {};
      var _res3 = res,
          data = _res3.data,
          success = _res3.success;

      if (success) {
        commit(actionTypes.UPDATE_HOUSEFOLLOW_SUCCESS, data);
      } else {
        commit(actionTypes.UPDATE_HOUSEFOLLOW_FAILURE);
      }

      resolve(res);
    })["catch"](function (err) {
      commit(actionTypes.UPDATE_HOUSEFOLLOW_FAILURE);
      reject(err);
    });
  });
});
exports.ajaxRequestHouseFollow = ajaxRequestHouseFollow;
var ajaxRequestHouseUnfollow = (0, _reduxActions.createAction)('updateHouseUnfollow', function (params) {
  commit(actionTypes.UPDATE_HOUSEUNFOLLOW_REQUEST);
  return new Promise(function (resolve, reject) {
    _axios["default"].post(_apis["default"].updateHouseUnfollow, params).then(function (res) {
      res = res || {};
      var _res4 = res,
          data = _res4.data,
          success = _res4.success;

      if (success) {
        commit(actionTypes.UPDATE_HOUSEUNFOLLOW_SUCCESS, data);
      } else {
        commit(actionTypes.UPDATE_HOUSEUNFOLLOW_FAILURE);
      }

      resolve(res);
    })["catch"](function (err) {
      commit(actionTypes.UPDATE_HOUSEUNFOLLOW_FAILURE);
      reject(err);
    });
  });
});
exports.ajaxRequestHouseUnfollow = ajaxRequestHouseUnfollow;
var ajaxRequestHouseFavorite = (0, _reduxActions.createAction)('selectHouseFavorite', function (params) {
  var houseType = params.filter[0].value;

  switch (houseType) {
    case 1:
      commit(actionTypes.SELECT_HOUSEFAVORITENEW_REQUEST);
      break;

    case 2:
      commit(actionTypes.SELECT_HOUSEFAVORITESECOND_REQUEST);
      break;

    case 3:
      commit(actionTypes.SELECT_HOUSEFAVORITERENT_REQUEST);
      break;
  }

  return new Promise(function (resolve, reject) {
    _axios["default"].get(_apis["default"].selectHouseFavorite, {
      params: params
    }).then(function (res) {
      res = res || {};
      var _res5 = res,
          data = _res5.data,
          success = _res5.success;

      if (success) {
        data.rows = utils.dataFilter(data.rows);

        switch (houseType) {
          case 1:
            commit(actionTypes.SELECT_HOUSEFAVORITENEW_SUCCESS, data);
            break;

          case 2:
            commit(actionTypes.SELECT_HOUSEFAVORITESECOND_SUCCESS, data);
            break;

          case 3:
            commit(actionTypes.SELECT_HOUSEFAVORITERENT_SUCCESS, data);
            break;
        }
      } else {
        switch (houseType) {
          case 1:
            commit(actionTypes.SELECT_HOUSEFAVORITENEW_FAILURE);
            break;

          case 2:
            commit(actionTypes.SELECT_HOUSEFAVORITESECOND_FAILURE);
            break;

          case 3:
            commit(actionTypes.SELECT_HOUSEFAVORITERENT_FAILURE);
            break;
        }
      }

      resolve(res);
    })["catch"](function (err) {
      switch (houseType) {
        case 1:
          commit(actionTypes.SELECT_HOUSEFAVORITENEW_FAILURE);
          break;

        case 2:
          commit(actionTypes.SELECT_HOUSEFAVORITESECOND_FAILURE);
          break;

        case 3:
          commit(actionTypes.SELECT_HOUSEFAVORITERENT_FAILURE);
          break;
      }

      reject(err);
    });
  });
});
exports.ajaxRequestHouseFavorite = ajaxRequestHouseFavorite;