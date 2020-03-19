import * as actions from '../../../store/actions';

export const STATES = {
  isLoading: state => state.SELECT_DETAIL_REDUCER.isLoading,
  isSuccess: state => state.SELECT_DETAIL_REDUCER.isSuccess,
  isFailure: state => state.SELECT_DETAIL_REDUCER.isFailure,
  isData: state => state.SELECT_DETAIL_REDUCER.data
};

export const ACTIONS = {
  ajaxSelectDetail: params => actions.ajaxRequestSelectDetail(params)
};
