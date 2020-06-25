import apis from '../apis';
import store from './index';
import axios from '../axios';
import QQMapWX from 'wx-qqmap-jssdk';
import {createAction} from 'redux-actions';
import * as actionTypes from './actionTypes';
import * as $config from '../config';

/**
 *
 * @param type
 * @param data
 */
const commit = (type, data) => {
  store.dispatch({
    type,
    data
  });
};

export const ajaxRequestSelectHouse = createAction(
  'selectHouse', (params) => {
    commit(actionTypes.SELECT_HOUSE_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectHouse, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.SELECT_HOUSE_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_HOUSE_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_HOUSE_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestSelectDetail = createAction(
  'selectDetail', (params) => {
    commit(actionTypes.SELECT_DETAIL_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectDetail, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.SELECT_DETAIL_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_DETAIL_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_DETAIL_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestSelectLocation = createAction(
  'selectLocation', (params) => {
    return new Promise((resolve, reject) => {
      const {province, city, area, address, houseName} = params;
      const detailAddress = province + city + area + address + houseName;
      const qqmapsdk = new QQMapWX({
        key: $config.DEFAULT_MAPKEY
      });
      qqmapsdk.geocoder({
        address: detailAddress,
        success: (res) => {
          res = res || {};
          const {result} = res;
          const {location} = result || {};
          const {lng, lat} = location;
          const data = {...params, lng, lat};
          commit(actionTypes.SELECT_DETAIL_REPLACE, data);
          resolve(res);
        },
        fail: (err) => {
          console.log(err);
          reject(err);
        }
      });
    });
  });

export const ajaxRequestUpdateFollow = createAction(
  'updateFollow', (params) => {
    commit(actionTypes.UPDATE_FOLLOW_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.updateFollow, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.UPDATE_FOLLOW_SUCCESS, data);
          } else {
            commit(actionTypes.UPDATE_FOLLOW_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.UPDATE_FOLLOW_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestSelectFollow = createAction(
  'selectFollow', (params) => {
    commit(actionTypes.SELECT_FOLLOW_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectFollow, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.SELECT_FOLLOW_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_FOLLOW_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_FOLLOW_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestSelectHistory = createAction(
  'selectHistory', (params) => {
    commit(actionTypes.SELECT_HISTORY_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectHistory, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.SELECT_HISTORY_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_HISTORY_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_HISTORY_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestSelectPhone = createAction(
  'selectPhone', (params) => {
    commit(actionTypes.SELECT_PHONE_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectPhone, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.SELECT_PHONE_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_PHONE_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_PHONE_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestSelectLogin = createAction(
  'selectLogin', (params) => {
    commit(actionTypes.SELECT_LOGIN_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectLogin, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.SELECT_LOGIN_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_LOGIN_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_LOGIN_FAILURE);
          reject(err);
        });
    });
  });

export const selectPhoneReplace = createAction(
  'selectPhoneReplace', (params) => {
    commit(actionTypes.SELECT_PHONE_REPLACE, params);
  });

export const selectDetailReplace = createAction(
  'selectDetailReplace', (params) => {
    commit(actionTypes.SELECT_DETAIL_REPLACE, params);
  });

export const selectFollowReplace = createAction(
  'selectFollowReplace', (params) => {
    commit(actionTypes.SELECT_FOLLOW_REPLACE, params);
  });

export const selectHistoryReplace = createAction(
  'selectHistoryReplace', (params) => {
    commit(actionTypes.SELECT_HISTORY_REPLACE, params);
  });

export const ajaxRequestSelectCitys = createAction(
  'selectCitys', () => {
    return new Promise((resolve, reject) => {
      commit(actionTypes.SELECT_CITYS_REQUEST);
      const qqmapsdk = new QQMapWX({
        key: $config.DEFAULT_MAPKEY
      });
      qqmapsdk.getCityList({
        success: (res) => {
          res = res || {};
          const {status} = res;
          if (!status) {
            commit(actionTypes.SELECT_CITYS_SUCCESS, res);
          } else {
            commit(actionTypes.SELECT_CITYS_FAILURE);
          }
          resolve(res);
        },
        fail: (err) => {
          commit(actionTypes.SELECT_CITYS_FAILURE);
          reject(err);
        }
      });
    });
  });

export const ajaxRequestSelectAreas = createAction(
  'selectAreas', (params) => {
    return new Promise((resolve, reject) => {
      commit(actionTypes.SELECT_AREAS_REQUEST);
      const qqmapsdk = new QQMapWX({
        key: $config.DEFAULT_MAPKEY
      });
      qqmapsdk.getDistrictByCityId({
        id: params,
        success: (res) => {
          res = res || {};
          const {status} = res;
          if (!status) {
            commit(actionTypes.SELECT_AREAS_SUCCESS, res);
          } else {
            commit(actionTypes.SELECT_AREAS_FAILURE);
          }
          resolve(res);
        },
        fail: (err) => {
          commit(actionTypes.SELECT_AREAS_FAILURE);
          reject(err);
        }
      });
    });
  });

export const updateCitysReplace = createAction(
  'updateCitysReplace', (params) => {
    commit(actionTypes.UPDATE_CITYS_REPLACE, params);
  });

export const removeHouseReplace = createAction(
  'removeSelectHouse', () => {
    commit(actionTypes.REMOVE_HOUSE_REPLACE);
  });

export const removeFollowReplace = createAction(
  'removeFollowReplace', () => {
    commit(actionTypes.REMOVE_FOLLOW_REPLACE);
  });

export const removeHistoryReplace = createAction(
  'removeHistoryReplace', () => {
    commit(actionTypes.REMOVE_HISTORY_REPLACE);
  });

export const ajaxRequestSelectHotHouse = createAction(
  'selectHotHouse', (params) => {
    commit(actionTypes.SELECT_HOTHOUSE_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectHotHouse, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.SELECT_HOTHOUSE_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_HOTHOUSE_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_HOTHOUSE_FAILURE);
          reject(err);
        });
    });
  });
