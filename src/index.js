/*
 * @author sl204984
 * 导入所有界面
 * */
import React, { Component } from 'react';
import {
  createStackNavigator
} from 'react-navigation';
import {
  fromJS
} from 'immutable';
import { Provider } from 'react-redux';

import BottomNav from './utils/bottom-navs'; // 底部导航
import Login from './login'; // 登录
import ForgetPwd from './forget-pwd'; // 忘记密码
import Register from './register'; // 注册
import Protocol from './protocol'; // 协议
import MyMap from './map'; // 地图功能
import Settings from './settings'; // 设置
import ProfileSettings from './ profile-settings'; // 个人设置
import MyPublishList from './my-publish-list'; // 我发布的
import MySoldList from './my-sold-list'; // 我售出的
import MyBoughtList from './my-bought-list'; // 我买到的
import MyCollectionList from './my-collection-list'; // 我的收藏
import MyBalance from './my-balance'; // 我的余额
import MyDiscountCoupon from './my-discount-coupon'; // 我的优惠券
import Chat from './chat'; // 聊天
import SignIn from './sign-in'; // 签到
import SearchInput from './search-input'; // 搜索界面
import SearchResult from './search-result'; // 搜索结果列表
import GoodsDetail from './goods-detail'; // 商品详情
import SellerShop from './seller-shop'; // 卖家店铺

import storeProvider from '../store';
const store = storeProvider();


const navigationOpt = fromJS({
  headerTintColor: '#2b2b2b',
  headerTitleStyle: {
    fontWeight: 'normal',
  }
});

const Navigations = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      headerTitle: '登录'
    }
  },
  ForgetPwd: {
    screen: ForgetPwd,
    navigationOptions: Object.assign(navigationOpt.toJS(), {
      headerTitle: '忘记密码'
    })
  },
  Register: {
    screen: Register,
    navigationOptions: Object.assign(navigationOpt.toJS(), {
      headerTitle: '注册'
    })
  },
  Protocol: {
    screen: Protocol,
    navigationOptions: Object.assign(navigationOpt.toJS(), {
      headerTitle: '用户协议条款'
    })
  },
  BottomNav: {
    screen: BottomNav,
    navigationOptions: {
      header: null
    }
  },
  MyMap: {
    screen: MyMap,
    navigationOptions: Object.assign(navigationOpt.toJS(), {
      headerTitle: '地图'
    })
  },
  Settings: { // 设置
    screen: Settings,
    navigationOptions: Object.assign(navigationOpt.toJS(), {
      headerTitle: '设置'
    })
  },
  ProfileSettings: { // 个人资料设置
    screen: ProfileSettings,
    navigationOptions: Object.assign(navigationOpt.toJS(), {
      headerTitle: '个人设置'
    })
  },
  MyPublishList: {
    screen: MyPublishList,
    navigationOptions: Object.assign(navigationOpt.toJS(), {
      headerTitle: '我发布的',
    })
  },
  MySoldList: {
    screen: MySoldList,
    navigationOptions: Object.assign(navigationOpt.toJS(), {
      headerTitle: '我卖出的'
    })
  },
  MyBoughtList: {
    screen: MyBoughtList,
    navigationOptions: Object.assign(navigationOpt.toJS(), {
      headerTitle: '我买到的'
    })
  },
  MyCollectionList: {
    screen: MyCollectionList,
    navigationOptions: Object.assign(navigationOpt.toJS(), {
      headerTitle: '我的收藏'
    })
  },
  MyBalance: {
    screen: MyBalance,
    navigationOptions: Object.assign(navigationOpt.toJS(), {
      headerTitle: '我的余额'
    })
  },
  MyDiscountCoupon: {
    screen: MyDiscountCoupon,
    navigationOptions: Object.assign(navigationOpt.toJS(), {
      headerTitle: '我的优惠券'
    })
  },
  Chat: {
    screen: Chat,
    navigationOptions: Object.assign(navigationOpt.toJS(), {
      headerTitle: '聊天'
    })
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null
    }
  },
  SearchInput: {
    screen: SearchInput,
    navigationOptions: {
      header: null
    }
  },
  SearchResult: {
    screen: SearchResult,
    navigationOptions: {
      header: null
    }
  },
  GoodsDetail: {
    screen: GoodsDetail,
    navigationOptions: Object.assign(navigationOpt.toJS(), {
      headerTitle: '商品详情'
    })
  },
  SellerShop: {
    screen: SellerShop,
    navigationOptions: {
      header: null
    }
  }
}, {
  initialRouteName: 'BottomNav',
  mode: 'card',
  headerMode: 'screen'
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigations />
      </Provider>
    )
  }
}