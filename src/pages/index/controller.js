import * as actions from '../../store/actions';

export const STATES = {
  isLoading: state => state.HOTHOUSE_REDUCER.isLoading,
  isSuccess: state => state.HOTHOUSE_REDUCER.isSuccess,
  isFailure: state => state.HOTHOUSE_REDUCER.isFailure,
  isData: state => state.HOTHOUSE_REDUCER.data
};

export const ACTIONS = {
  ajaxHotHouse: () => actions.ajaxRequestHotHouse()
};
