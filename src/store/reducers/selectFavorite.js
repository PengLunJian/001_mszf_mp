import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';
import * as utils from '../../utils';

const actions = {
  [actionTypes.SELECT_FAVORITE_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.SELECT_FAVORITE_SUCCESS](state, action) {
    const oldData = state.data || {};
    const oldRows = oldData.rows || [];
    const newData = action.data || {};
    const newRows = newData.rows || [];
    action.data.rows = oldRows.concat(utils.dataFilter(newRows));
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
    };
  },
  [actionTypes.SELECT_FAVORITE_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  },
  [actionTypes.REMOVE_FAVORITE_REPLACE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: false,
      data: null
    };
  }
};

const SELECT_FAVORITE_REDUCER = handleActions(actions, states.SELECT_FAVORITE_STATE);

export default SELECT_FAVORITE_REDUCER;
