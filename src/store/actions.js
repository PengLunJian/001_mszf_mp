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

export const ajaxRequestRentHouseList = createAction(
  'selectRentHouseList', (params) => {
    commit(actionTypes.SELECT_RENTHOUSELIST_REQUEST);
    return new Promise((resolve, reject) => {
      axios.get(apis.selectRentHouseList, {params})
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            data.rows = utils.dataFilter(data.rows);
            commit(actionTypes.SELECT_RENTHOUSELIST_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_RENTHOUSELIST_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_RENTHOUSELIST_FAILURE);
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
  'insertHouseFollow', (params) => {
    commit(actionTypes.INSERT_HOUSEFOLLOW_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.insertHouseFollow, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.INSERT_HOUSEFOLLOW_SUCCESS, data);
          } else {
            commit(actionTypes.INSERT_HOUSEFOLLOW_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.INSERT_HOUSEFOLLOW_FAILURE);
          reject(err);
        });
    });
  });
