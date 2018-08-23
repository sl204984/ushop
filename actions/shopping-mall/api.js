import { FetchRequest } from '../../src/utils/fetch';

/**
 * 获取接口数据
 * @param pageSize number
 * @param pageNumber number
 * @param total number
 * @param type number
 * @param? detail Map{ type: index }
 */
export const fetchList = body => {
  return FetchRequest({
    url: 'home',
    method: 'POST',
    body
  })
};