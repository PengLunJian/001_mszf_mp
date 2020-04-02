import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';
import * as utils from '../../utils';

const actions = {
  [actionTypes.SELECT_CITYS_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.SELECT_CITYS_SUCCESS](state, action) {
    const data = utils.getCitys(action.data);
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data
    };
  },
  [actionTypes.SELECT_CITYS_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  },
  [actionTypes.SELECT_CITYS_REPLACE](state, params) {
    const {data} = state;
    data.city = params.data;
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data
    };
  }
};

const SELECT_CITYS_REDUCER = handleActions(actions, states.SELECT_CITYS_STATE);

export default SELECT_CITYS_REDUCER;
