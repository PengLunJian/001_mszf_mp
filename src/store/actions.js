import apis from '../apis';
import store from './index';
import axios from '../axios';
import qs from 'qs';
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
          data.rows = utils.dataFilter(data.rows);
          if (success) {
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
