import {
  SHOPPINGMALL as types
} from '../../types';

const initialState = {
  data: [{
    avatar: '',
    key: '1',
    publisher: '大浪浪',
    desc: '一家什么都有的店铺',
    point: 100, // 信用值
    imgList: ['shopping/pen.jpeg', 'shopping/lipstick.jpeg', 'shopping/fan.jpg'],
    location: '江苏南京雨花台区',
    vipType: 0
  }, {
    avatar: '',
    key: '2',
    publisher: '大浪浪',
    desc: '该账户充钱了',
    point: 100, // 信用值
    imgList: ['shopping/lipstick.jpeg', 'shopping/fan.jpg', 'shopping/download.jpg', 'shopping/book.jpg'],
    location: '江苏南京雨花台区'
  }, {
    avatar: '',
    key: '3',
    publisher: '大浪浪',
    desc: '一家什么也没有的店铺',
    point: 100, // 信用值
    imgList: ['shopping/lipstick.jpeg', 'shopping/book.jpg', 'shopping/fan.jpg', 'shopping/download.jpg'],
    location: '江苏南京雨花台区'
  }, {
    avatar: '',
    key: '4',
    publisher: '大浪浪',
    desc: '该账户是vip玩家',
    point: 100, // 信用值
    imgList: ['shopping/fan.jpg', 'shopping/download.jpg', 'shopping/lipstick.jpeg', 'shopping/book.jpg'],
    location: '江苏南京雨花台区'
  }],
  end: false
}

export default function shoppingMallReducer(state = initialState, action) {
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