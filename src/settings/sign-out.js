import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { longConfirmBtn, submitTextColor } from '../utils/common-styles';

export default class SignOut extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { navigate } = this.props;
    return <TouchableOpacity style={styles.signOutBox} onPress={() => {
      navigate('Login');
    }}>
      <Text style={styles.signOutText}>退出登录</Text>
    </TouchableOpacity>
  }

}

const styles = StyleSheet.create({
    signOutBox: longConfirmBtn.toJS(),
    signOutText: {
      color: submitTextColor
    },
})