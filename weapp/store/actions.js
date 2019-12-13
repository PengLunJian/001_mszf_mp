"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ajaxRequestProduct = void 0;

var _apis = _interopRequireDefault(require('../apis/index.js'));

var _index = _interopRequireDefault(require('index.js'));

var _axios = _interopRequireDefault(require('../axios/index.js'));

var resData = _interopRequireWildcard(require('../mock/data.js'));

var actionTypes = _interopRequireWildcard(require('actionTypes.js'));

var _reduxActions = require('../vendor.js')(45);

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

var ajaxRequestProduct = (0, _reduxActions.createAction)('selectProduct', function () {
  commit(actionTypes.SELECT_PRODUCT_REQUEST);
  return new Promise(function (resolve, reject) {
    _axios["default"].post(_apis["default"].selectProduct).then(function (res) {
      res = resData.PRODUCT;
      res = res || {};
      var _res = res,
          data = _res.data,
          success = _res.success;

      if (success) {
        commit(actionTypes.SELECT_PRODUCT_SUCCESS, data);
      } else {
        commit(actionTypes.SELECT_PRODUCT_FAILURE);
      }

      resolve(res);
    })["catch"](function (err) {
      commit(actionTypes.SELECT_PRODUCT_FAILURE);
      reject(err);
    });
  });
});
exports.ajaxRequestProduct = ajaxRequestProduct;