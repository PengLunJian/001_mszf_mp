import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.UPDATE_UNFOLLOW_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.UPDATE_UNFOLLOW_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
    };
  },
  [actionTypes.UPDATE_UNFOLLOW_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  }
};

const UPDATE_UNFOLLOW_REDUCER = handleActions(actions, states.UPDATE_UNFOLLOW_STATE);

export default UPDATE_UNFOLLOW_REDUCER;
