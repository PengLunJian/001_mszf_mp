import * as $config from '../config';

/**
 *
 * @returns {boolean}
 */
export const success = () => {
  const nums = parseInt(Math.random() * 100);
  return nums % 10 !== 0;
};
/**
 *
 * @param data
 * @returns {boolean}
 */
export const isExist = (data) => {
  return (
    (
      (!data) ||
      (data instanceof Array && !data.length) ||
      (JSON.stringify(data) === '{}')
    )
  );
};
/**
 *
 * @param params
 * @returns {*}
 */
export const stringify = (params) => {
  for (let key in params) {
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
export const dataFilter = (data) => {
  data.map((item) => {
    let {browsing_time, tags} = item;
    browsing_time = dateFormat(browsing_time, 'yyyy/mm/dd');
    tags = tags.split(' ');

    item.browsing_time = browsing_time;
    item.tags = tags;
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
export const historyFilter = (data, attr) => {
  let obj = {};
  let result = [];

  data.forEach(item => {
    obj[item[attr]] || (obj[item[attr]] = []);
    obj[item[attr]] && obj[item[attr]].push(item);
  });

  for (let key in obj) {
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
export const dateFormat = (date, format) => {
  let dateStr = '';
  if (date) {
    let newDate = new Date(date.replace(/-/g, '/'));
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
    let second = newDate.getSeconds();
    const monthStr = month > 9 ? '' + month : '0' + month;
    const dayStr = day > 9 ? '' + day : '0' + day;
    const hourStr = hour > 9 ? '' + hour : '0' + hour;
    const minuteStr = minute > 9 ? '' + minute : '0' + minute;
    const secondStr = second > 9 ? '' + second : '0' + second;
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
      case 'zh-cn':
        dateStr = year + '年' + monthStr + '月' + dayStr + '日';
        break;
    }
    newDate = null;
  }
  return dateStr;
};
/**
 *
 */
export const handleSaveImage = () => {
  wx.getSetting({
    success(res) {
      const {authSetting} = res || {};
      if (authSetting['scope.writePhotosAlbum'] === false) {
        wx.openSetting({
          success(res) {
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
export const saveImage = () => {
  setTimeout(() => {
    wx.downloadFile({
      url: $config.DEFAULT_SHARE,
      success(res) {
        const {tempFilePath} = res || {};
        wx.saveImageToPhotosAlbum({
          filePath: tempFilePath,
          success() {
            wx.showToast({
              title: '图片已保存，快去分享给好友吧。',
              icon: 'none'
            });
          },
          fail(err) {
            console.log(err);
          }
        });
      },
      fail(err) {
        console.log(err);
      }
    });
  }, 300);
};
/**
 *
 * @param res
 * @returns {Array}
 */
export const getCitys = (res) => {
  const list = [];
  const CONST_CHK = ['宣城市'];
  const CONST_HOT = ['北京市', '上海市', '广州市'];
  const CONST_KEY = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const items1 = res.result[0].filter((item) => {
    return item.fullname.indexOf('市') !== -1;
  });
  const items2 = res.result[1].filter((item) => {
    return item.fullname.indexOf('市') !== -1;
  });
  const items = items1.concat(items2);
  const keys = CONST_KEY.split('');
  for (let i = 0; i < keys.length; i++) {
    list[i] = {label: keys[i], items: []};
    for (let j in items) {
      const str = items[j].pinyin[0].substring(0, 1);
      const key = str.toLocaleUpperCase();
      if (keys[i] === key) {
        list[i].items.push(items[j]);
      }
    }
  }
  list.unshift({label: '热门城市', items: []});
  list[0].items = items.filter((item) => {
    return CONST_HOT.indexOf(item.fullname) !== -1;
  });
  for (let i in list) {
    for (let j in list[i].items) {
      list[i].items[j].checked = false;
      list[i].items[j].isOpen = false;
      if (CONST_CHK.indexOf(list[i].items[j].fullname) !== -1) {
        list[i].items[j].isOpen = true;
      }
    }
  }
  return list;
};
