import React from "react";
import Platform from "Platform";
import { View, StyleSheet, FlatList, TouchableOpacity, Text, Alert } from 'react-native';

import MessageItem from '../utils/message-item';
import { StorageKeys, Storage } from '../utils/local-store';

import CONFIG from '../utils/config';
export default class Messages extends React.Component {
  state = {
    userInfo: {}
  }

  componentDidMount() {
    this._loadUserInfo();
  }

  render() {
    const { navigate } = this.props.navigation;
    const { userInfo } = this.state;
    const data = [];
    for(let i = 0; i < 10; i++) {
      data.push({
        key: 'index-' + i, 
        shoppingImg: `${CONFIG.IMG_HOST}shopping/lipstick.jpeg`
      });
    }

    const _avatar = `${CONFIG.IMG_HOST}avatar/lovely.jpeg`;
    
    return (
      <View style={styles.container}>
        <FlatList data={data} renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => {
              navigate('Chat', { user: 'Sybil' });
            }}>
              <MessageItem avator={{uri: _avatar}} 
                publisher={'星空下的仰望星空下的仰望星空下的仰望'} 
                chartInfo={'一二三四五一二三四五一二三四五一二三四五一二三四五'}
                dateInfo={'5天前'}
                unread={true}
                shoppingImg={{ uri: item.shoppingImg }} />
            </TouchableOpacity>
          )
        }} />
        {
          !userInfo.userId ? 
            <TouchableOpacity style={styles.mask} onPress={this._loadUserInfo} /> : 
            null
        }
        
        
      </View>
    )
  }

  _loadUserInfo = async () => {
    try {
      const res = await Storage.load({
        key: StorageKeys.userInfo,
        autoSync: true,
        syncInBackground: true
      });
      this.setState({ userInfo: res });
    } catch(err) {
      Alert.alert(
        '登录提醒',
        '您尚未登录，是否现在登录？',
        [{
          text: '取消', onPress: () => {}, 
          style: 'cancel'
        }, {
          text: '确定', onPress: () => {
            this.props.navigation.navigate('Login');
          }
        }],
      );
    }
  }
}

const paddingTop = Platform.OS === 'android' ? 0 : 22;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: paddingTop,
    position: 'relative'
  },
  mask: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0
  }
});