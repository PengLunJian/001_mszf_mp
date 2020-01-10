import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.INSERT_HOUSEFOLLOW_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.INSERT_HOUSEFOLLOW_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
    };
  },
  [actionTypes.INSERT_HOUSEFOLLOW_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  }
};

const HOUSEFOLLOW_REDUCER = handleActions(actions, states.HOUSEFOLLOW_STATE);

export default HOUSEFOLLOW_REDUCER;
