import {
  SEARCHRESULT as types
} from '../../types';
import * as webApi from './api';

export const initDataList = (params = {}) => {
  return async dispatch => {
    const {
      res,
      err
    } = await webApi.fetchList(params);
    if (!err) {
      dispatch({
        data: res.data,
        end: res.end,
        type: types.INITDATA
      });
      return res;
    }
  }
}

export const addDataList = (params = {}) => {
  return async dispatch => {
    const {
      res,
      err
    } = await webApi.fetchList(params);
    if (!err) {
      dispatch({
        data: res.data,
        end: res.end,
        pageNum: res.pageNum,
        pageSize: res.pageSize,
        type: types.ADDDATA
      });
      return res;
    }
  }
}