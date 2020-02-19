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
    const resNewRows = resNew.rows || [];
    const resSecondRows = resSecond.rows || [];
    const resRentRows = resRent.rows || [];
    action.data.resNew.rows = [].concat(utils.dataFilter(resNewRows));
    action.data.resSecond.rows = [].concat(utils.dataFilter(resSecondRows));
    action.data.resRent.rows = [].concat(utils.dataFilter(resRentRows));
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
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

const HOTHOUSE_REDUCER = handleActions(actions, states.HOTHOUSE_STATE);

export default HOTHOUSE_REDUCER;
