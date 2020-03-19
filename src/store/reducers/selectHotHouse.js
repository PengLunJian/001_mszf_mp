import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';
import * as utils from '../../utils';

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
    const {resNew, resSecond, resRent} = action.data;
    const resNewData = resNew.data || {};
    const resSecondData = resSecond.data || {};
    const resRentData = resRent.data || {};
    const resNewRows = resNewData.rows || [];
    const resSecondRows = resSecondData.rows || [];
    const resRentRows = resRentData.rows || [];
    const newRows = utils.dataFilter(resNewRows);
    const secondRows = utils.dataFilter(resSecondRows);
    const rentRows = utils.dataFilter(resRentRows);
    const newData = {newRows, secondRows, rentRows};
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: newData
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
