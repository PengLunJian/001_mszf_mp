import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.SELECT_PHONE_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.SELECT_PHONE_SUCCESS](state, action) {
    const phone = action.data;
    const start = phone.substr(0, 3);
    const end = phone.substr(8, 3);
    const hidePhone = start + '****' + end;
    const data = {phone, hidePhone};
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data
    };
  },
  [actionTypes.SELECT_PHONE_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  },
  [actionTypes.SELECT_PHONE_REPLACE](state, action) {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
    };
  }
};

const SELECT_PHONE_REDUCER = handleActions(actions, states.SELECT_PHONE_STATE);

export default SELECT_PHONE_REDUCER;
