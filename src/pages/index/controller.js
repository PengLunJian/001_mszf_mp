import * as actions from '../../store/actions';
import * as actionTypes from '../../store/actionTypes';

export const STATES = {
  isLoading: state => state.HOUSELIST_REDUCER.isLoading,
  isSuccess: state => state.HOUSELIST_REDUCER.isSuccess,
  isFailure: state => state.HOUSELIST_REDUCER.isFailure,
  isData: state => state.HOUSELIST_REDUCER.data
};

export const ACTIONS = {
  resetHouseList: actionTypes.RESET_HOUSELIST_STATE,
  ajaxHouseList: params => actions.ajaxRequestHouseList(params)
};
