import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.SELECT_PHONE_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.SELECT_PHONE_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
    };
  },
  [actionTypes.SELECT_PHONE_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  }
};

const SELECT_PHONE_REDUCER = handleActions(actions, states.SELECT_PHONE_STATE);

export default SELECT_PHONE_REDUCER;
