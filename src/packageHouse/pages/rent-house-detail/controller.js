import * as actions from '../../../store/actions';

export const STATES = {
  isLoading: state => state.HOUSEDETAIL_REDUCER.isLoading,
  isSuccess: state => state.HOUSEDETAIL_REDUCER.isSuccess,
  isFailure: state => state.HOUSEDETAIL_REDUCER.isFailure,
  isData: state => state.HOUSEDETAIL_REDUCER.data
};

export const ACTIONS = {
  ajaxHouseDetail: params => actions.ajaxRequestHouseDetail(params),
  ajaxHouseFollow: params => actions.ajaxRequestHouseFollow(params),
  ajaxHouseUnfollow: params => actions.ajaxRequestHouseUnfollow(params)
};
