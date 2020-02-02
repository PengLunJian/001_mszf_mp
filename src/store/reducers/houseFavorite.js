import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.SELECT_HOUSEFAVORITERENT_REQUEST](state) {
    return {
      ...state,
      rentHouse: {
        isLoading: true,
        isSuccess: false,
        isFailure: false,
        data: state.rentHouse.data
      }
    };
  },
  [actionTypes.SELECT_HOUSEFAVORITERENT_SUCCESS](state, action) {
    const oldRentData = state.rentHouse.data || {};
    const oldRentRows = oldRentData.rows || [];
    const newData = action.data || {};
    const newRows = newData.rows || [];
    action.data.rows = oldRentRows.concat(newRows);
    return {
      ...state,
      rentHouse: {
        isLoading: false,
        isSuccess: true,
        isFailure: false,
        data: action.data
      }
    };
  },
  [actionTypes.SELECT_HOUSEFAVORITERENT_FAILURE](state) {
    return {
      ...state,
      rentHouse: {
        isLoading: false,
        isSuccess: false,
        isFailure: true
      }
    };
  },
  [actionTypes.SELECT_HOUSEFAVORITESECOND_REQUEST](state) {
    return {
      ...state,
      secondHouse: {
        isLoading: true,
        isSuccess: false,
        isFailure: false,
        data: state.secondHouse.data
      }
    };
  },
  [actionTypes.SELECT_HOUSEFAVORITESECOND_SUCCESS](state, action) {
    const oldSecondData = state.secondHouse.data || {};
    const oldSecondRows = oldSecondData.rows || [];
    const newData = action.data || {};
    const newRows = newData.rows || [];
    action.data.rows = oldSecondRows.concat(newRows);
    return {
      ...state,
      secondHouse: {
        isLoading: false,
        isSuccess: true,
        isFailure: false,
        data: action.data
      }
    };
  },
  [actionTypes.SELECT_HOUSEFAVORITESECOND_FAILURE](state) {
    return {
      ...state,
      secondHouse: {
        isLoading: false,
        isSuccess: false,
        isFailure: true
      }
    };
  },
  [actionTypes.SELECT_HOUSEFAVORITENEW_REQUEST](state) {
    return {
      ...state,
      newHouse: {
        isLoading: true,
        isSuccess: false,
        isFailure: false,
        data: state.newHouse.data
      }
    };
  },
  [actionTypes.SELECT_HOUSEFAVORITENEW_SUCCESS](state, action) {
    const oldNewData = state.newHouse.data || {};
    const oldNewRows = oldNewData.rows || [];
    const newData = action.data || {};
    const newRows = newData.rows || [];
    action.data.rows = oldNewRows.concat(newRows);
    return {
      ...state,
      newHouse: {
        isLoading: false,
        isSuccess: true,
        isFailure: false,
        data: action.data
      }
    };
  },
  [actionTypes.SELECT_HOUSEFAVORITENEW_FAILURE](state) {
    return {
      ...state,
      newHouse: {
        isLoading: false,
        isSuccess: false,
        isFailure: true
      }
    };
  },
  [actionTypes.RESET_HOUSEFAVORITE_STATE](state) {
    return {
      ...state,
      rentHouse: {
        isLoading: true,
        isSuccess: false,
        isFailure: false,
        data: null
      },
      secondHouse: {
        isLoading: true,
        isSuccess: false,
        isFailure: false,
        data: null
      },
      newHouse: {
        isLoading: true,
        isSuccess: false,
        isFailure: false,
        data: null
      }
    };
  }
};

const HOUSEFAVORITE_REDUCER = handleActions(actions, states.HOUSEFAVORITE_STATE);

export default HOUSEFAVORITE_REDUCER;
