import Mock from 'mockjs';
import apis from '../apis';
import * as data from './data';

// Mock.setup({
//   timeout: 1000
// });

Mock.exeMock = (apiMain, callback) => {
  Mock.mock(apis.baseUrl + apiMain.url, apis.method, (response) => {
    return callback(response);
  });
};

console.log(Mock);

Mock.exeMock(apis.selectBanner, (response) => {
  return data.BANNER;
});

Mock.exeMock(apis.selectEvaluate, (response) => {
  return data.EVALUATE;
});
