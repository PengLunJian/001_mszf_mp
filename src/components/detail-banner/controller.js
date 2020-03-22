import * as actions from '../../store/actions';

export const ACTIONS = {
  ajaxUpdateFollow: params => actions.ajaxRequestUpdateFollow(params),
  ajaxUpdateUnfollow: params => actions.ajaxRequestUpdateUnfollow(params)
};
