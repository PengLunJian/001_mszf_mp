import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.UPDATE_CITYS_REPLACE](state, action) {
    const {data} = action;
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data
    };
  }
};

const UPDATE_CITYS_REDUCER = handleActions(actions, states.UPDATE_CITYS_STATE);

export default UPDATE_CITYS_REDUCER;
