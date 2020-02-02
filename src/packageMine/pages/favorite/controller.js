import * as actions from '../../../store/actions';
import * as actionTypes from '../../../store/actionTypes';

export const STATES = {
  isRentLoading: state => state.HOUSEFAVORITE_REDUCER.rentHouse.isLoading,
  isRentSuccess: state => state.HOUSEFAVORITE_REDUCER.rentHouse.isSuccess,
  isRentFailure: state => state.HOUSEFAVORITE_REDUCER.rentHouse.isFailure,
  isRentData: state => state.HOUSEFAVORITE_REDUCER.rentHouse.data,
  isSecondLoading: state => state.HOUSEFAVORITE_REDUCER.secondHouse.isLoading,
  isSecondSuccess: state => state.HOUSEFAVORITE_REDUCER.secondHouse.isSuccess,
  isSecondFailure: state => state.HOUSEFAVORITE_REDUCER.secondHouse.isFailure,
  isSecondData: state => state.HOUSEFAVORITE_REDUCER.secondHouse.data,
  isNewLoading: state => state.HOUSEFAVORITE_REDUCER.newHouse.isLoading,
  isNewSuccess: state => state.HOUSEFAVORITE_REDUCER.newHouse.isSuccess,
  isNewFailure: state => state.HOUSEFAVORITE_REDUCER.newHouse.isFailure,
  isNewData: state => state.HOUSEFAVORITE_REDUCER.newHouse.data
};

export const ACTIONS = {
  resetHouseFavorite: actionTypes.RESET_HOUSEFAVORITE_STATE,
  ajaxHouseFavorite: params => actions.ajaxRequestHouseFavorite(params)
};
