import apis from '../apis';
import store from './index';
import axios from '../axios';
import * as utils from '../utils';
import * as actionTypes from './actionTypes';
import {createAction} from 'redux-actions';

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

export const ajaxRequestHouseList = createAction(
  'selectHouseList', (params) => {
    commit(actionTypes.SELECT_HOUSELIST_REQUEST);
    return new Promise((resolve, reject) => {
      axios.get(apis.selectHouseList, {params})
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.SELECT_HOUSELIST_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_HOUSELIST_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_HOUSELIST_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestHouseDetail = createAction(
  'selectHouseDetail', (params) => {
    commit(actionTypes.SELECT_HOUSEDETAIL_REQUEST);
    return new Promise((resolve, reject) => {
      axios.get(apis.selectHouseDetail, {params})
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.SELECT_HOUSEDETAIL_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_HOUSEDETAIL_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_HOUSEDETAIL_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestHouseFollow = createAction(
  'updateHouseFollow', (params) => {
    commit(actionTypes.UPDATE_HOUSEFOLLOW_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.updateHouseFollow, params)
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

export const ajaxRequestHouseUnfollow = createAction(
  'updateHouseUnfollow', (params) => {
    commit(actionTypes.UPDATE_HOUSEUNFOLLOW_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.updateHouseUnfollow, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.UPDATE_HOUSEUNFOLLOW_SUCCESS, data);
          } else {
            commit(actionTypes.UPDATE_HOUSEUNFOLLOW_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.UPDATE_HOUSEUNFOLLOW_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestHouseFavorite = createAction(
  'selectHouseFavorite', (params) => {
    const houseType = params.filter[0].value;
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
    return new Promise((resolve, reject) => {
      axios.get(apis.selectHouseFavorite, {params})
        .then((res) => {
          res = res || {};
          const {data, success} = res;
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
        })
        .catch((err) => {
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

export const ajaxRequestHouseHistory = createAction(
  'selectHouseHistory', (params) => {
    commit(actionTypes.SELECT_HOUSEHISTORY_REQUEST);
    return new Promise((resolve, reject) => {
      axios.get(apis.selectHouseHistory, {params})
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.SELECT_HOUSEHISTORY_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_HOUSEHISTORY_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_HOUSEHISTORY_FAILURE);
          reject(err);
        });
    });
  });
