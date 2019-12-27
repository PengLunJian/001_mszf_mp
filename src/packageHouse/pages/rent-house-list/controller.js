import * as actions from '../../../store/actions';
import * as actionTypes from '../../../store/actionTypes';

export const STATES = {
  isLoading: state => state.RENTHOUSELIST_REDUCER.isLoading,
  isSuccess: state => state.RENTHOUSELIST_REDUCER.isSuccess,
  isFailure: state => state.RENTHOUSELIST_REDUCER.isFailure,
  isData: state => state.RENTHOUSELIST_REDUCER.data
};

export const ACTIONS = {
  resetRentHouseList: actionTypes.RESET_RENTHOUSELIST_STATE,
  ajaxRentHouseList: params => actions.ajaxRequestRentHouseList(params)
};
