import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.SELECT_HOUSEDETAIL_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.SELECT_HOUSEDETAIL_SUCCESS](state, action) {
    const configs = [
      {
        icon: 'icon-item01',
        label: '卫生间',
        isCan: false
      },
      {
        icon: 'icon-item02',
        label: '洗衣机',
        isCan: false
      },
      {
        icon: 'icon-item03',
        label: '可做饭',
        isCan: false
      },
      {
        icon: 'icon-item04',
        label: '热水器',
        isCan: false
      },
      {
        icon: 'icon-item05',
        label: '阳台',
        isCan: false
      },
      {
        icon: 'icon-item06',
        label: '冰箱',
        isCan: false
      },
      {
        icon: 'icon-item07',
        label: '电梯',
        isCan: false
      },
      {
        icon: 'icon-item08',
        label: '沙发',
        isCan: false
      },
      {
        icon: 'icon-item09',
        label: '宽带',
        isCan: false
      },
      {
        icon: 'icon-item10',
        label: '衣柜',
        isCan: false
      },
      {
        icon: 'icon-item11',
        label: '暖气',
        isCan: false
      },
      {
        icon: 'icon-item12',
        label: '床',
        isCan: false
      },
      {
        icon: 'icon-item13',
        label: '空调',
        isCan: false
      },
      {
        icon: 'icon-item14',
        label: '电视',
        isCan: false
      }
    ];
    const {fagnwupeizhi} = action.data || {};
    if (fagnwupeizhi) {
      configs.map((item) => {
        if (fagnwupeizhi.indexOf(item.label) !== -1) {
          item.isCan = true;
        }
      });
    }
    action.data.configs = configs;
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
    };
  },
  [actionTypes.SELECT_HOUSEDETAIL_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  }
};

const HOUSEDETAIL_REDUCER = handleActions(actions, states.HOUSEDETAIL_STATE);

export default HOUSEDETAIL_REDUCER;
