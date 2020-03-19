import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as $config from '../../config';
import * as utils from '../../utils';
import * as states from '../states';

const actions = {
  [actionTypes.SELECT_DETAIL_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.SELECT_DETAIL_SUCCESS](state, action) {
    const configs = [
      {
        icon: 'icon-item01',
        label: '卫生间',
        checked: false
      },
      {
        icon: 'icon-item02',
        label: '洗衣机',
        checked: false
      },
      {
        icon: 'icon-item03',
        label: '可做饭',
        checked: false
      },
      {
        icon: 'icon-item04',
        label: '热水器',
        checked: false
      },
      {
        icon: 'icon-item05',
        label: '阳台',
        checked: false
      },
      {
        icon: 'icon-item06',
        label: '冰箱',
        checked: false
      },
      {
        icon: 'icon-item07',
        label: '电梯',
        checked: false
      },
      {
        icon: 'icon-item08',
        label: '沙发',
        checked: false
      },
      {
        icon: 'icon-item09',
        label: '宽带',
        checked: false
      },
      {
        icon: 'icon-item10',
        label: '衣柜',
        checked: false
      },
      {
        icon: 'icon-item11',
        label: '暖气',
        checked: false
      },
      {
        icon: 'icon-item12',
        label: '床',
        checked: false
      },
      {
        icon: 'icon-item13',
        label: '空调',
        checked: false
      },
      {
        icon: 'icon-item14',
        label: '电视',
        checked: false
      }
    ];
    const {fagnwupeizhi, release_time, kaipan, jiaofang, tags, pic_url} = action.data || {};
    if (fagnwupeizhi) {
      configs.map((item) => {
        if (fagnwupeizhi.indexOf(item.label) !== -1) {
          item.checked = true;
        }
      });
    }
    action.data.pic_url = pic_url.length ? pic_url : [$config.DEFAULT_HOUSE];
    action.data.configs = configs;
    action.data.release_time = release_time.substring(0, 10);
    action.data.tags = tags.split(' ');
    action.data.kaipan = utils.dateFormat(kaipan, 'yyyy-mm-dd');
    action.data.jiaofang = utils.dateFormat(jiaofang, 'yyyy-mm-dd');
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
    };
  },
  [actionTypes.SELECT_DETAIL_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  }
};

const SELECT_DETAIL_REDUCER = handleActions(actions, states.SELECT_DETAIL_STATE);

export default SELECT_DETAIL_REDUCER;
