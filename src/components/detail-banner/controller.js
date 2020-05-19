import * as actions from '../../store/actions';

export const STATES = {
};

export const ACTIONS = {
  selectDetailReplace: params => actions.selectDetailReplace(params),
  selectFollowReplace: params => actions.selectFollowReplace(params),
  ajaxUpdateFollow: params => actions.ajaxRequestUpdateFollow(params)
};
