import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as utils from '../../utils';
import * as states from '../states';

const actions = {
  [actionTypes.SELECT_DETAIL_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false,
      data: null
    };
  },
  [actionTypes.SELECT_DETAIL_SUCCESS](state, action) {
    const data = utils.dataFormat(action.data);
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data
    };
  },
  [actionTypes.SELECT_DETAIL_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  },
  [actionTypes.SELECT_DETAIL_REPLACE](state, action) {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
    };
  }
};

const SELECT_DETAIL_REDUCER = handleActions(actions, states.SELECT_DETAIL_STATE);

export default SELECT_DETAIL_REDUCER;
