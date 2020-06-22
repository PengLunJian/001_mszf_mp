import * as actions from '../../../store/actions';

export const STATES = {
  isUser: state => state.SELECT_PHONE_REDUCER.data
};

export const ACTIONS = {
  selectPhoneReplace: params => actions.selectPhoneReplace(params)
};
