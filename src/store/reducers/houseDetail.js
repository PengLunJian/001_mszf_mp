import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as utils from '../../utils';
import * as states from '../states';
import apis from '../../apis';

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
    const {fagnwupeizhi, release_time, kaipan, jiaofang, tags, pic_url} = action.data || {};
    const defaultImage = apis.baseUrl + 'house/v1/file/static/userfile/202003/11/1237660841611137024.jpg';
    if (fagnwupeizhi) {
      configs.map((item) => {
        if (fagnwupeizhi.indexOf(item.label) !== -1) {
          item.isCan = true;
        }
      });
    }
    action.data.pic_url = pic_url.length ? pic_url : [defaultImage];
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
