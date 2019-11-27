import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.SELECT_PRODUCT_REQUEST](state) {
    return {
      ...state,
      product: Object.assign({}, state.product, {
        isLoading: true,
        isSuccess: false,
        isFailure: false,
        data: null
      })
    };
  },
  [actionTypes.SELECT_PRODUCT_SUCCESS](state, action) {
    return {
      ...state,
      product: Object.assign({}, state.product, {
        isLoading: false,
        isSuccess: true,
        isFailure: false,
        data: action.data
      })
    };
  },
  [actionTypes.SELECT_PRODUCT_FAILURE](state) {
    return {
      ...state,
      product: Object.assign({}, state.product, {
        isLoading: false,
        isSuccess: false,
        isFailure: true,
        data: null
      })
    };
  }
};

const CART_REDUCER = handleActions(actions, states.CART_STATE);

export default CART_REDUCER;
