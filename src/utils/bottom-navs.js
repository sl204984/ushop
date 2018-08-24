// 底部导航
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomePage from '../home-page';
import ShoppingMall from '../shopping-mall';
import Publish from '../publish';
import Messages from '../messages';
import UserCenter from '../user-center';

import { baseColor, blackGray } from "./common-styles";

export default pageNavigator = createBottomTabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ focused }) => (
        <Icon name="home-outline" size={20} color={focused ? baseColor : blackGray} />
      )
    }
  },
  ShoppingMall: {
    screen: ShoppingMall,
    navigationOptions: {
      tabBarLabel: '商城',
      tabBarIcon: ({ focused }) => (
        <Icon name="paw" size={20} color={focused ? baseColor : blackGray} />
      )
    }
  },
  Publish: {
    screen: Publish,
    navigationOptions: {
      tabBarLabel: '发布',
      tabBarIcon: (({ focused }) => (
        <Icon name="plus-circle-outline" size={20} color={focused ? baseColor : blackGray} />
      ))
    }
  },
  Messages: {
    screen: Messages,
    navigationOptions: {
      tabBarLabel: '聊天',
      tabBarIcon: ({ focused }) => (
        <Icon name="comment-multiple-outline" size={20} color={focused ? baseColor : blackGray} />
      )
    }
  },
  Center: {
    screen: UserCenter,
    navigationOptions: {
      tabBarLabel: '个人中心',
      tabBarIcon: ({ focused }) => (
        <Icon name="account-outline" size={20} color={focused ? baseColor : blackGray} />
      )
    }
  }
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: baseColor
  },
  animated: true
});
