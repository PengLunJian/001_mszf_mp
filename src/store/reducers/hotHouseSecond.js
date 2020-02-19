import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';
import * as utils from "../../utils";

const actions = {
  [actionTypes.SELECT_HOTHOUSESECOND_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.SELECT_HOTHOUSESECOND_SUCCESS](state, action) {
    const data = action.data || {};
    const rows = data.rows || [];
    action.data.rows = utils.dataFilter(rows);
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
    };
  },
  [actionTypes.SELECT_HOTHOUSESECOND_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  }
};

const HOTHOUSESECOND_REDUCER = handleActions(actions, states.HOTHOUSESECOND_STATE);

export default HOTHOUSESECOND_REDUCER;
