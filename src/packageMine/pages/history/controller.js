import * as actions from '../../../store/actions';

export const STATES = {
  isLoading: state => state.SELECT_HISTORY_REDUCER.isLoading,
  isSuccess: state => state.SELECT_HISTORY_REDUCER.isSuccess,
  isFailure: state => state.SELECT_HISTORY_REDUCER.isFailure,
  isData: state => state.SELECT_HISTORY_REDUCER.data
};

export const ACTIONS = {
  removeHistoryReplace: actions.removeHistoryReplace,
  ajaxSelectHistory: params => actions.ajaxRequestSelectHistory(params)
};
