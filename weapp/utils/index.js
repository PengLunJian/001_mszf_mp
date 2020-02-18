"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveImage = exports.handleSaveImage = exports.dateFormat = exports.historyFilter = exports.dataFilter = exports.stringify = exports.isExist = exports.success = void 0;

/**
 *
 * @returns {boolean}
 */
var success = function success() {
  var nums = parseInt(Math.random() * 100);
  return nums % 10 !== 0;
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
    item.browsing_time = dateFormat(item.browsing_time, 'yyyy/mm/dd');
    item.tags = item.tags.split(' ');
  });
  return data;
};
/**
 *
 * @param oldData
 * @param newData
 * @param attr
 * @returns {*}
 */


exports.dataFilter = dataFilter;

var historyFilter = function historyFilter(data, attr) {
  var obj = {};
  var result = [];
  data.forEach(function (item) {
    obj[item[attr]] || (obj[item[attr]] = []);
    obj[item[attr]] && obj[item[attr]].push(item);
  });

  for (var key in obj) {
    result.push({
      date: key,
      items: obj[key]
    });
  }

  return result;
};
/**
 *
 * @param date
 * @param format
 * @returns {string}
 */


exports.historyFilter = historyFilter;

var dateFormat = function dateFormat(date, format) {
  var dateStr = '';

  if (date) {
    var newDate = new Date(date.replace(/-/g, '/'));
    var year = newDate.getFullYear();
    var month = newDate.getMonth() + 1;
    var day = newDate.getDate();
    var hour = newDate.getHours();
    var minute = newDate.getMinutes();
    var second = newDate.getSeconds();
    var monthStr = month > 9 ? '' + month : '0' + month;
    var dayStr = day > 9 ? '' + day : '0' + day;
    var hourStr = hour > 9 ? '' + hour : '0' + hour;
    var minuteStr = minute > 9 ? '' + minute : '0' + minute;
    var secondStr = second > 9 ? '' + second : '0' + second;

    switch (format) {
      case 'yyyy/mm/dd':
        dateStr = year + '/' + monthStr + '/' + dayStr;
        break;

      case 'yyyy/mm/dd hh':
        dateStr = year + '/' + monthStr + '/' + dayStr + ' ' + hourStr;
        break;

      case 'yyyy/mm/dd hh:mm':
        dateStr = year + '/' + monthStr + '/' + dayStr + ' ' + hourStr + ':' + minuteStr;
        break;

      case 'yyyy/mm/dd hh:mm:ss':
        dateStr = year + '/' + monthStr + '/' + dayStr + ' ' + hourStr + ':' + minuteStr + ':' + secondStr;
        break;

      case 'yyyy-mm-dd':
        dateStr = year + '-' + monthStr + '-' + dayStr;
        break;
    }

    newDate = null;
  }

  return dateStr;
};
/**
 *
 */


exports.dateFormat = dateFormat;

var handleSaveImage = function handleSaveImage() {
  wx.getSetting({
    success: function success(res) {
      var _ref = res || {},
          authSetting = _ref.authSetting;

      if (authSetting['scope.writePhotosAlbum'] === false) {
        wx.openSetting({
          success: function success(res) {
            console.log(res);
          }
        });
      } else {
        saveImage();
      }
    }
  });
};
/**
 *
 */


exports.handleSaveImage = handleSaveImage;

var saveImage = function saveImage() {
  setTimeout(function () {
    var imgUrl = 'http://sersms.com:7000/house/v1/file/static/userfile/202002/09/1226431602998263808.png';
    wx.downloadFile({
      url: imgUrl,
      success: function success(res) {
        var _ref2 = res || {},
            tempFilePath = _ref2.tempFilePath;

        wx.saveImageToPhotosAlbum({
          filePath: tempFilePath,
          success: function success() {
            wx.showToast({
              title: '图片已保存，快去分享给好友吧。',
              icon: 'none'
            });
          },
          fail: function fail(err) {
            console.log(err);
          }
        });
      },
      fail: function fail(err) {
        console.log(err);
      }
    });
  }, 300);
};

exports.saveImage = saveImage;