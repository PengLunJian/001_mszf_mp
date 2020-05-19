import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';
import * as utils from '../../utils';

const actions = {
  [actionTypes.SELECT_FOLLOW_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.SELECT_FOLLOW_SUCCESS](state, action) {
    const oldData = state.data || {};
    const oldRows = oldData.rows || [];
    const newData = action.data || {};
    const newRows = newData.rows || [];
    const rows = newRows.map((item) => {
      return utils.dataFormat(item);
    });
    action.data.rows = oldRows.concat(rows);
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
    };
  },
  [actionTypes.SELECT_FOLLOW_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  },
  [actionTypes.SELECT_FOLLOW_REPLACE](state, action) {
    const oldData = state.data || {};
    let rows = oldData.rows || [];
    const newData = action.data || {};
    console.log(newData);
    const {isFollow} = newData;
    if (isFollow) {
      rows.unshift(newData);
    } else {
      rows = rows.filter((item) => {
        return item.id !== newData.id;
      });
    }
    const data = {...oldData, rows};
    return {
      ...state,
      data
    };
  },
  [actionTypes.REMOVE_FOLLOW_REPLACE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: false,
      data: null
    };
  }
};

const SELECT_FOLLOW_REDUCER = handleActions(actions, states.SELECT_FOLLOW_STATE);

export default SELECT_FOLLOW_REDUCER;
