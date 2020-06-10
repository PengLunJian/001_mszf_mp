import * as $config from '../config';
import apis from '../apis';

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
export const dataFormat = (data) => {
  const {
    picUrl, tags, deploy, openTime, handTime,
    createTime, agent, mainApart
  } = data;
  const configs = $config.DEFAULT_CONFIG;
  data.configs = configs.map((item) => {
    const checked = (deploy || '').indexOf(item.label) !== -1;
    return {
      ...item,
      checked
    };
  });
  data.tags = (tags || '').split(' ');
  if (picUrl.length) {
    data.picUrl = (picUrl || []).map((item) => {
      return apis.fileUrl + item;
    });
  } else {
    data.picUrl = [$config.DEFAULT_HOUSE];
  }
  data.mainApart = (mainApart || []).map((item) => {
    const picUrl = item.picUrl
      ? apis.fileUrl + item.picUrl
      : $config.DEFAULT_HOUSE;
    return {
      ...item,
      picUrl
    };
  });
  data.agent = (agent || []).map((item) => {
    const picUrl = item.picUrl
      ? apis.fileUrl + item.picUrl : $config.DEFAULT_AGENT;
    return {...item, picUrl};
  });
  data.openTime = dateFormat(openTime, 'yyyy/mm/dd');
  data.handTime = dateFormat(handTime, 'yyyy/mm/dd');
  data.createTime = dateFormat(createTime, 'yyyy/mm/dd');
  return data;
};
/**
 *
 * @param oldData
 * @param newData
 * @param attr
 * @returns {*}
 */
export const hisFormat = (list, rows, attr) => {
  for (let i = 0; i < rows.length; i++) {
    let index = 0;
    let isExit = false;
    const date = dateFormat(rows[i][attr], 'yyyy/mm/dd');
    const item = {date, items: [rows[i]]};
    for (let j = 0; j < list.length; j++) {
      if (date === list[j].date) {
        index = j;
        isExit = true;
      }
    }
    if (isExit) {
      list[index].items.push(rows[i]);
    } else {
      list.push(item);
    }
  }
  return list;
};
/**
 *
 * @param rows
 * @param attr
 * @returns {Array}
 */
export const historyFormat = (rows, attr) => {
  let result = [];
  for (let i = 0; i < rows.length; i++) {
    let index = 0;
    let isExit = false;
    const date = dateFormat(rows[i][attr], 'yyyy/mm/dd');
    const item = {date, items: [rows[i]]};
    for (let j = 0; j < result.length; j++) {
      if (date === result[j].date) {
        index = j;
        isExit = true;
      }
    }
    if (isExit) {
      result[index].items.push(rows[i]);
    } else {
      result.push(item);
    }
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
  if (!date) return dateStr;
  let dateType = typeof date;
  let newDate = dateType === 'string'
    ? new Date(date.replace(/-/g, '/')) : date;
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let day = newDate.getDate();
  let hour = newDate.getHours();
  let minute = newDate.getMinutes();
  let second = newDate.getSeconds();
  let monthStr = month > 9 ? '' + month : '0' + month;
  let dayStr = day > 9 ? '' + day : '0' + day;
  let hourStr = hour > 9 ? '' + hour : '0' + hour;
  let minuteStr = minute > 9 ? '' + minute : '0' + minute;
  let secondStr = second > 9 ? '' + second : '0' + second;
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
    case 'yyyy-mm-dd hh':
      dateStr = year + '-' + monthStr + '-' + dayStr + ' ' + hourStr;
      break;
    case 'yyyy-mm-dd hh:mm':
      dateStr = year + '-' + monthStr + '-' + dayStr + ' ' + hourStr + ':' + minuteStr;
      break;
    case 'yyyy-mm-dd hh:mm:ss':
      dateStr = year + '-' + monthStr + '-' + dayStr + ' ' + hourStr + ':' + minuteStr + ':' + secondStr;
      break;
    case 'zh-cn':
      dateStr = year + '年' + monthStr + '月' + dayStr + '日';
      break;
  }
  newDate = null;
  return dateStr;
};
/**
 *
 * @param res
 */
export const areaFormat = (res) => {
  res = res || {};
  const result = res.result[0];
  result.unshift({fullname: '不限'});
  return result;
};
/**
 *
 * @param res
 * @returns {Array}
 */
export const cityFormat = (res) => {
  res = res || {};
  const {result} = res;
  const totalCity = [];
  const CONST_LAB = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const CONST_HOT = ['北京市', '上海市', '广州市'];
  const CONST_DEL = ['北京市', '上海市', '重庆市', '天津市'];
  const tempCity1 = result[0].filter((item) => {
    return CONST_DEL.indexOf(item.fullname) !== -1;
  });
  const tempCity2 = result[1].filter((item) => {
    for (let i in tempCity1) {
      const subId1 = tempCity1[i].id.substring(0, 2);
      const subId2 = item.id.substring(0, 2);
      if (subId1 === subId2) return;
    }
    return item;
  });
  const tempCity3 = tempCity1.concat(tempCity2);
  const keys = CONST_LAB.split('');
  for (let i = 0; i < keys.length; i++) {
    totalCity[i] = {label: keys[i], items: []};
    for (let j in tempCity3) {
      const {pinyin} = tempCity3[j];
      const str = pinyin[0].substring(0, 1);
      const key = str.toLocaleUpperCase();
      if (keys[i] === key) {
        totalCity[i].items.push(tempCity3[j]);
      }
    }
  }
  totalCity.unshift({label: '热门城市', items: []});
  totalCity[0].items = tempCity3.filter((item) => {
    return CONST_HOT.indexOf(item.fullname) !== -1;
  });
  return totalCity;
};
