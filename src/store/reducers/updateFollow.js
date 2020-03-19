import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.UPDATE_FOLLOW_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.UPDATE_FOLLOW_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
    };
  },
  [actionTypes.UPDATE_FOLLOW_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  }
};

const UPDATE_FOLLOW_REDUCER = handleActions(actions, states.UPDATE_FOLLOW_STATE);

export default UPDATE_FOLLOW_REDUCER;
