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
export const dataFilter = (data) => {
  const rows = data.map((item) => {
    return dataFormat(item);
  });
  return rows;
};
/**
 *
 * @param data
 * @returns {*}
 */
export const dataFormat = (data) => {
  const configs = $config.DEFAULT_CONFIG;
  const {
    pic_url, tags, fagnwupeizhi, kaipan, jiaofang,
    release_time, agency, zhulihuxing
  } = data;
  data.configs = configs.map((item) => {
    let checked = false;
    if (fagnwupeizhi) {
      checked = fagnwupeizhi.indexOf(item.label) !== -1;
    }
    return {
      ...item,
      checked
    };
  });
  data.tags = tags.split(' ');
  if (pic_url.length) {
    data.pic_url = pic_url.map((item) => {
      return apis.baseUrl + item;
    });
  } else {
    data.pic_url = [$config.DEFAULT_HOUSE];
  }
  data.zhulihuxing = (zhulihuxing || []).map((item) => {
    let pic = item.pic ? apis.baseUrl + item.pic : $config.DEFAULT_HOUSE;
    return {
      ...item,
      pic
    };
  });
  data.agency = (agency || []).map((item) => {
    let photo = item.photo ? apis.baseUrl + item.photo : $config.DEFAULT_AGENT;
    return {
      ...item,
      photo
    };
  });
  data.kaipan = dateFormat(kaipan, 'yyyy/mm/dd');
  data.jiaofang = dateFormat(jiaofang, 'yyyy/mm/dd');
  data.release_time = dateFormat(release_time, 'yyyy/mm/dd');
  return data;
};
/**
 *
 * @param oldData
 * @param newData
 * @param attr
 * @returns {*}
 */
export const historyFilter = (list, rows, attr) => {
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
  let city = {};
  let citys = [];
  let areas = [];
  const CONST_CHK = ['宣城市'];
  const CONST_ARE = ['广德市'];
  const CONST_RUN = ['宣城市', '上海市'];
  const CONST_KEY = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const CONST_HOT = ['北京市', '上海市', '广州市'];
  const CONST_DEL = ['北京市', '上海市', '重庆市', '天津市'];
  const items1 = res.result[0].filter((item) => {
    return item.fullname.indexOf('市') !== -1;
  });
  const items2 = res.result[1].filter((item) => {
    for (let i in items1) {
      const itemId1 = items1[i].id.substring(0, 2);
      const itemId2 = item.id.substring(0, 2);
      if (itemId1 === itemId2) {
        areas.push(item);
        return;
      }
    }
    return item;
  });
  areas = areas.concat(res.result[2]);
  const items = items1.concat(items2);
  const keys = CONST_KEY.split('');
  for (let i = 0; i < keys.length; i++) {
    citys[i] = {label: keys[i], items: []};
    for (let j in items) {
      const str = items[j].pinyin[0].substring(0, 1);
      const key = str.toLocaleUpperCase();
      if (keys[i] === key) {
        citys[i].items.push(items[j]);
      }
    }
  }
  citys.unshift({label: '热门城市', items: []});
  citys[0].items = items.filter((item) => {
    return CONST_HOT.indexOf(item.fullname) !== -1;
  });
  for (let i in citys) {
    for (let j in citys[i].items) {
      const tempObj = citys[i].items[j];
      tempObj.checked = false;
      tempObj.isOpen = false;
      if (CONST_RUN.indexOf(tempObj.fullname) !== -1) {
        tempObj.isOpen = true;
      }
      if (CONST_CHK.indexOf(tempObj.fullname) !== -1) {
        tempObj.checked = true;
        city = tempObj;
      }
      tempObj.children = [{isOpen: true, fullname: '不限'}];
      const length = CONST_DEL.indexOf(tempObj.fullname) !== -1 ? 2 : 4;
      for (let k in areas) {
        const cityId = tempObj.id.substring(0, length);
        const areaId = areas[k].id.substring(0, length);
        if (cityId === areaId) {
          const checked = false;
          const isOpen = CONST_ARE.indexOf(areas[k].fullname) !== -1;
          tempObj.children.push({...areas[k], checked, isOpen});
        }
      }
      citys[i].items[j] = tempObj;
    }
  }
  return {
    citys,
    city
  };
};
