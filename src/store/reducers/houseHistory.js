import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';
import * as utils from '../../utils';
import {dateFormat} from "../../utils";

const actions = {
  [actionTypes.SELECT_HOUSEHISTORY_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.SELECT_HOUSEHISTORY_SUCCESS](state, action) {
    const oldData = state.data || {};
    const oldRows = oldData.rows || [];
    const newData = action.data || {};
    const newRows = newData.rows || [];
    const newRowsFilter = utils.dataFilter(newRows);
    const totalRows = oldRows.concat(newRowsFilter);

    const totalRowsFilter = utils.historyFilter(totalRows, 'browsing_time');
    action.data.rows = totalRows;
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data,
      totalRowsFilter
    };
  },
  [actionTypes.SELECT_HOUSEHISTORY_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  },
  [actionTypes.RESET_HOUSEHISTORY_STATE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: false,
      data: null,
      totalRowsFilter: []
    };
  }
};

const HOUSEHISTORY_REDUCER = handleActions(actions, states.HOUSEHISTORY_STATE);

export default HOUSEHISTORY_REDUCER;
