import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as utils from '../../utils';
import * as states from '../states';

const actions = {
  [actionTypes.SELECT_HOTHOUSE_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.SELECT_HOTHOUSE_SUCCESS](state, action) {
    const resData = action.data || [];
    const resNewData = resData[1] || {};
    const resSecondData = resData[2] || {};
    const resRentData = resData[0] || {};
    const resNewRows = resNewData.rows || [];
    const newRows = resNewRows.map((item) => {
      return utils.dataFormat(item);
    });
    const resSecondRows = resSecondData.rows || [];
    const secondRows = resSecondRows.map((item) => {
      return utils.dataFormat(item);
    });
    const resRentRows = resRentData.rows || [];
    const rentRows = resRentRows.map((item) => {
      return utils.dataFormat(item);
    });
    const data = {newRows, secondRows, rentRows};
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data
    };
  },
  [actionTypes.SELECT_HOTHOUSE_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  }
};

const HOTHOUSE_REDUCER = handleActions(actions, states.SELECT_HOTHOUSE_STATE);

export default HOTHOUSE_REDUCER;
