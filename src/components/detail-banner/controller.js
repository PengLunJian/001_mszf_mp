import * as actions from '../../store/actions';

export const ACTIONS = {
  ajaxHouseFollow: params => actions.ajaxRequestHouseFollow(params),
  ajaxHouseUnfollow: params => actions.ajaxRequestHouseUnfollow(params)
};
