import apis from '../apis';
import store from './index';
import axios from '../axios';
import * as resData from '../mock/data';
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
/**
 *
 * @returns {Promise<any>}
 */
export const ajaxRequestSelectQRCode = createAction(
  actionTypes.SELECT_QRCODE_REQUEST, () => {
    return new Promise((resolve, reject) => {
      axios.post(apis.selectQRCode)
        .then((res) => {
          res = resData.HOME;
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.SELECT_QRCODE_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_QRCODE_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_QRCODE_FAILURE);
          reject(err);
        });
    });
  });
/**
 *
 * @returns {Promise<any>}
 */
export const ajaxRequestSelectProduct = createAction(
  actionTypes.SELECT_PRODUCT_REQUEST, () => {
    return new Promise((resolve, reject) => {
      axios.post(apis.selectProduct)
        .then((res) => {
          res = resData.CART;
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.SELECT_PRODUCT_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_PRODUCT_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_PRODUCT_FAILURE);
          reject(err);
        });
    });
  });
