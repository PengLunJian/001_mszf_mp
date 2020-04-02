import * as actions from '../../store/actions';

export const STATES = {
  isUser: state => state.SELECT_LOGIN_REDUCER.data
};

export const ACTIONS = {
  ajaxUpdateFollow: params => actions.ajaxRequestUpdateFollow(params),
  ajaxUpdateUnfollow: params => actions.ajaxRequestUpdateUnfollow(params)
};
