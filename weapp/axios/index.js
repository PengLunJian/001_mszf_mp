"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require('axios.js'));

var _apis = _interopRequireDefault(require('../apis/index.js'));

var _adapter = _interopRequireDefault(require('../vendor.js')(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CancelToken = _axios["default"].CancelToken;
var source = CancelToken.source();
var reqList = [];
/**
 *
 * @param reqList
 * @param url
 * @param cancel
 * @param errorMessage
 */

var stopRepeatRequest = function stopRepeatRequest(reqList, url, cancel, errorMessage) {
  errorMessage = errorMessage || '';
  console.log(reqList + url);

  for (var i = 0; i < reqList.length; i++) {
    if (reqList[i] === url) {
      cancel({
        url: url,
        errorMessage: errorMessage
      });
      return;
    }
  }

  reqList.push(url);
};
/**
 *
 * @param reqList
 * @param url
 */


var allowRequest = function allowRequest(reqList, url) {
  for (var i = 0; i < reqList.length; i++) {
    if (reqList[i] === url) {
      reqList.splice(i, 1);
      break;
    }
  }
};
/**
 *
 * @param config
 * @returns {*}
 */


var getConfig = function getConfig(config) {
  var adapter = (0, _adapter["default"])(_axios["default"]);
  var data = config.data;
  var opts = config.url;
  config.adapter = adapter;
  config.method = _apis["default"].method;
  config.timeout = _apis["default"].timeout;
  config.headers = _apis["default"].headers;

  if (data) {
    var url = opts.url,
        params = opts.params;
    config.url = _apis["default"].baseUrl + url;
    config.data = Object.assign(params, data);
  } else {
    var _url = opts.url;
    config.url = _apis["default"].baseUrl + _url;
  }

  return config;
};

_axios["default"].interceptors.request.use(function (config) {
  // config.cancelToken = source.token;
  var CONFIG = getConfig(config); // stopRepeatRequest(reqList, config.url, source.cancel, `${config.url} 请求被中断`);

  return CONFIG;
}, function (error) {
  return Promise.reject(error);
});

_axios["default"].interceptors.response.use(function (response) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      // allowRequest(reqList, response.config.url);
      resolve(response.data);
    }, 1000);
  });
}, function (error) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      // if (Axios.isCancel()) {
      //   console.log('错误取消');
      // } else {
      //   const {message} = error;
      //   allowRequest(reqList, message.url);
      // }
      // console.log(reqList);
      resolve(error.response);
    }, 1000);
  });
});

var _default = _axios["default"];
exports["default"] = _default;