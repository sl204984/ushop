import {
  HOMEPAGE as types
} from '../../types';

const initialState = {
  data: [],
  end: false
}

export default function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case types.INITDATA:
      return {
        ...state,
        data: action.data,
        end: action.end
      }
    case types.ADDDATA:
      return {
        ...state,
        data: (function () {
          if(!action.data) return state.data;
          // 虽然可以写成[...state.data, ...action.data], 但为了节约内存和防止数组指向变化
          for (let item of action.data) {
            state.data.push(item)
          }
          return state.data
        })(),
        end: action.end
      }
    default:
      return state;
  }
}