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
    let oldData = state.data || {};
    let oldRows = oldData.rows || [];
    let newData = action.data || {};
    let newRows = newData.rows || [];
    newRows = newRows.map((item) => {
      return utils.dataFormat(item);
    });
    let rows = oldRows.concat(newRows);
    let list = utils.historyFormat(rows, 'browseTime');
    let data = {...action.data, rows, list};
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data
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
  [actionTypes.SELECT_HISTORY_REPLACE](state, action) {
    let oldData = state.data || {};
    let oldRows = oldData.rows || [];
    let newData = action.data || {};
    let format = 'yyyy-mm-dd hh:mm:ss';
    let browseTime = utils.dateFormat(new Date(), format);
    let tempData = {...newData, browseTime};
    let rows = oldRows.map((item) => {
      if (item.id === tempData.id) {
        return tempData;
      }
      return item;
    });
    rows.sort((a, b) => {
      const offsetTime1 = new Date(a.browseTime.replace(/-/g, '/')).getTime();
      const offsetTime2 = new Date(b.browseTime.replace(/-/g, '/')).getTime();
      return offsetTime2 - offsetTime1;
    });
    let list = utils.historyFormat(rows, 'browseTime');
    let data = {...oldData, rows, list};
    return {
      ...state,
      data
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
