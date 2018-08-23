// 注意:请不要在key中使用_下划线符号!
// 使用key来保存数据（key-only）。这些数据一般是全局独有的，需要谨慎单独处理的数据
// 批量数据请使用key和id来保存(key-id)，具体请往后看
// 除非你手动移除，这些数据会被永久保存，而且默认不会过期。
const searchInputKey = {
  'searchIputList': 'searchIputList',

};

const userInfoKey = {
  userInfo: 'userInfo'
}

export default {
  ...searchInputKey,
  ...userInfoKey,
};