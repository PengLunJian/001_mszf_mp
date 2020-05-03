import * as actions from '../../../store/actions';

export const STATES = {
  isLoading: state => state.SELECT_LOGIN_REDUCER.isLoading,
  isSuccess: state => state.SELECT_LOGIN_REDUCER.isSuccess,
  isFailure: state => state.SELECT_LOGIN_REDUCER.isFailure,
  isLogin: state => state.SELECT_LOGIN_REDUCER.data
};

export const ACTIONS = {
  ajaxSelectLogin: params => actions.ajaxRequestSelectLogin(params),
  ajaxSelectPhone: params => actions.ajaxRequestSelectPhone(params)
};
