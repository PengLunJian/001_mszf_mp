import * as actions from '../../../store/actions';
import * as actionTypes from '../../../store/actionTypes';

export const STATES = {
  isLoading: state => state.HOUSEHISTORY_REDUCER.isLoading,
  isSuccess: state => state.HOUSEHISTORY_REDUCER.isSuccess,
  isFailure: state => state.HOUSEHISTORY_REDUCER.isFailure,
  isData: state => state.HOUSEHISTORY_REDUCER.data,
  isTotalRowsFilter: state => state.HOUSEHISTORY_REDUCER.totalRowsFilter
};

export const ACTIONS = {
  resetHouseHistory: actionTypes.RESET_HOUSEHISTORY_STATE,
  ajaxHouseHistory: (params) => actions.ajaxRequestHouseHistory(params)
};
