import apis from '../apis';

export const DEFAULT_HOUSE = apis.baseUrl + '/house/v1/file/static/userfile/202003/13/1238374760268992512.jpg';
export const DEFAULT_AGENT = apis.baseUrl + '/house/v1/file/static/userfile/202003/16/1239418041721929728.png';
export const DEFAULT_SHARE = apis.baseUrl + '/house/v1/file/static/userfile/202002/09/1226431602998263808.png';
export const DEFAULT_BANNER = [
  apis.baseUrl + '/house/v1/file/static/userfile/202003/17/1239813587297091584.jpg',
  apis.baseUrl + '/house/v1/file/static/userfile/202003/17/1239813737998434304.jpg',
  apis.baseUrl + '/house/v1/file/static/userfile/202003/17/1239813832600961024.jpg'
];
export const DEFAULT_CONFIG = [
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
export const DEFAULT_AREAS = [
  {
    isOpen: true,
    fullname: '不限'
  },
  {
    isOpen: false,
    fullname: '宣州区'
  },
  {
    isOpen: false,
    fullname: '郎溪县'
  },
  {
    isOpen: true,
    fullname: '广德市'
  },
  {
    isOpen: false,
    fullname: '宁国市'
  },
  {
    isOpen: false,
    fullname: '泾县'
  },
  {
    isOpen: false,
    fullname: '绩溪县'
  },
  {
    isOpen: false,
    fullname: '旌德县'
  }
];
