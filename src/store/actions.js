import apis from '../apis';
import store from './index';
import axios from '../axios';
import * as actionTypes from './actionTypes';
import {createAction} from 'redux-actions';
import QQMapWX from 'wx-qqmap-jssdk';

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
      axios.get(apis.selectHouse, {params})
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
      axios.get(apis.selectDetail, {params})
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

export const ajaxRequestUpdateFollow = createAction(
  'updateFollow', (params) => {
    commit(actionTypes.UPDATE_HOUSEFOLLOW_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.updateFollow, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.UPDATE_HOUSEFOLLOW_SUCCESS, data);
          } else {
            commit(actionTypes.UPDATE_HOUSEFOLLOW_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.UPDATE_HOUSEFOLLOW_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestUpdateUnfollow = createAction(
  'updateUnfollow', (params) => {
    commit(actionTypes.UPDATE_UNFOLLOW_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.updateUnfollow, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.UPDATE_UNFOLLOW_SUCCESS, data);
          } else {
            commit(actionTypes.UPDATE_UNFOLLOW_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.UPDATE_UNFOLLOW_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestHouseFavorite = createAction(
  'selectFavorite', (params) => {
    commit(actionTypes.SELECT_FAVORITE_REQUEST);
    return new Promise((resolve, reject) => {
      axios.get(apis.selectFavorite, {params})
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.SELECT_FAVORITE_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_FAVORITE_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_FAVORITE_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestSelectHistory = createAction(
  'selectHistory', (params) => {
    commit(actionTypes.SELECT_HISTORY_REQUEST);
    return new Promise((resolve, reject) => {
      axios.get(apis.selectHistory, {params})
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

export const ajaxRequestSelectCitys = createAction(
  'selectCitys', () => {
    return new Promise((resolve, reject) => {
      commit(actionTypes.SELECT_CITYS_REQUEST);
      const qqmapsdk = new QQMapWX({
        key: 'CQABZ-RINL4-5MAU4-DBWDV-D2UXZ-5GBEU'
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

const ajaxRequestHotHouse = (type) => {
  const params = {
    page: {
      pageSize: 5,
      pageIndex: 1
    },
    filter: [
      {
        field: 'type',
        opt: '=',
        value: type
      }
    ],
    sort: [
      {
        field: 'release_time',
        asc: false
      }
    ]
  };
  return axios.get(apis.selectHotHouse, {params})
    .then((res) => {
      res = res || {};
      return res;
    });
};

export const ajaxRequestSelectHotHouse = createAction(
  'selectHotHouse', () => {
    commit(actionTypes.SELECT_HOTHOUSE_REQUEST);
    return new Promise((resolve, reject) => {
      axios.all([
        ajaxRequestHotHouse(1),
        ajaxRequestHotHouse(2),
        ajaxRequestHotHouse(3)
      ])
        .then(axios.spread((resNew, resSecond, resRent) => {
          const newData = {resNew, resSecond, resRent};
          const success = resNew.success && resSecond.success && resRent.success;
          if (success) {
            commit(actionTypes.SELECT_HOTHOUSE_SUCCESS, newData);
          } else {
            commit(actionTypes.SELECT_HOTHOUSE_FAILURE);
          }
          resolve(newData);
        }))
        .catch((err) => {
          commit(actionTypes.SELECT_HOTHOUSE_FAILURE);
          reject(err);
        });
    });
  });
