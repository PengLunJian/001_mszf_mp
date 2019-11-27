import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.SELECT_QRCODE_REQUEST](state) {
    return {
      ...state,
      qrcode: Object.assign({}, state.qrcode, {
        isLoading: true,
        isSuccess: false,
        isFailure: false,
        data: null
      })
    };
  },
  [actionTypes.SELECT_QRCODE_SUCCESS](state, action) {
    return {
      ...state,
      qrcode: Object.assign({}, state.qrcode, {
        isLoading: false,
        isSuccess: true,
        isFailure: false,
        data: action.data
      })
    };
  },
  [actionTypes.SELECT_QRCODE_FAILURE](state) {
    return {
      ...state,
      qrcode: Object.assign({}, state.qrcode, {
        isLoading: false,
        isSuccess: false,
        isFailure: true,
        data: null
      })
    };
  }
};

const HOME_REDUCER = handleActions(actions, states.HOME_STATE);

export default HOME_REDUCER;
