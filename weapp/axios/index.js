"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require('axios.js'));

var _apis = _interopRequireDefault(require('../apis/index.js'));

var utils = _interopRequireWildcard(require('../utils/index.js'));

var _adapter = _interopRequireDefault(require('../vendor.js')(5));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const CancelToken = Axios.CancelToken;
// const source = CancelToken.source();
// let reqList = [];

/**
 *
 * @param reqList
 * @param url
 * @param cancel
 * @param errorMessage
 */
// const stopRepeatRequest = (reqList, url, cancel, errorMessage) => {
//   errorMessage = errorMessage || '';
//   console.log(reqList + url);
//   for (let i = 0; i < reqList.length; i++) {
//     if (reqList[i] === url) {
//       cancel({url, errorMessage});
//       return;
//     }
//   }
//   reqList.push(url);
// };

/**
 *
 * @param reqList
 * @param url
 */
// const allowRequest = (reqList, url) => {
//   for (let i = 0; i < reqList.length; i++) {
//     if (reqList[i] === url) {
//       reqList.splice(i, 1);
//       break;
//     }
//   }
// };

/**
 *
 * @param config
 * @returns {*}
 */
var getConfig = function getConfig(config) {
  console.log(config);
  var method = config.method;
  console.log(method);
  var opts = config.url;
  var url = opts.url,
      params = opts.params;
  config.timeout = _apis["default"].timeout;
  config.headers = _apis["default"].headers;
  config.adapter = (0, _adapter["default"])(_axios["default"]);
  config.url = _apis["default"].baseUrl + url;

  if (method === 'get') {
    config.params = Object.assign(params, config.params);
    config.params = utils.stringify(config.params);
  }

  return config;
};

_axios["default"].interceptors.request.use(function (config) {
  var CONFIG = getConfig(config);
  return CONFIG;
}, function (error) {
  return Promise.reject(error);
});

_axios["default"].interceptors.response.use(function (response) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(response.data);
    }, 1000);
  });
}, function (error) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(error.response);
    }, 1000);
  });
});

var _default = _axios["default"];
exports["default"] = _default;