import React, { Component } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { StorageKeys, Storage } from '../utils/local-store';

import Avatar from './avatar';
import Appreciate from './appreciate';
import FeatureList from './feature-list';
import Setting from './setting';

export default class UserCenter extends Component {
  state = {
    userInfo: {}
  }

  componentDidMount() {
    this._loadUserInfo();
  }

  render() {
    const { navigate } = this.props.navigation;
    const { userInfo } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Avatar navigate={navigate} />
        <Appreciate navigate={navigate} />
        <FeatureList navigate={navigate} />
        <Setting navigate={navigate} />

        {
          !userInfo.userId ? 
            <TouchableOpacity style={styles.mask} onPress={this._loadUserInfo} /> : 
            null
        }
      </ScrollView>
    );
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

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
