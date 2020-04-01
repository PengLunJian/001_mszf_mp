import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';
import * as utils from '../../utils';

const actions = {
  [actionTypes.SELECT_HISTORY_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.SELECT_HISTORY_SUCCESS](state, action) {
    const oldData = state.data || {};
    const oldRows = oldData.rows || [];
    const oldList = oldData.list || [];
    const newData = action.data || {};
    const newRows = utils.dataFilter(newData.rows || []);
    action.data.rows = oldRows.concat(newRows);
    action.data.list = utils.historyFilter(oldList, newRows, 'browsing_time');
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
    };
  },
  [actionTypes.SELECT_HISTORY_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  },
  [actionTypes.REMOVE_HISTORY_REPLACE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: false,
      data: null
    };
  }
};

const SELECT_HISTORY_REDUCER = handleActions(actions, states.SELECT_HISTORY_STATE);

export default SELECT_HISTORY_REDUCER;
