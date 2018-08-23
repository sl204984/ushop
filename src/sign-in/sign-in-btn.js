import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import { container, longConfirmBtn, gray } from '../utils/common-styles';

export default class SignInBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { goBack, hasSignIn } = this.props;
    return hasSignIn ? <TouchableOpacity style={styles.btn} onPress={() => {
      typeof goBack === 'function' && goBack();
    }}>
      <Text style={styles.btnText}>签到</Text>
    </TouchableOpacity> : 
    <TouchableOpacity style={styles.btnDisable} onPress={() => {
      typeof goBack === 'function' && goBack();
    }}>
      <Text style={styles.btnText}>今日已签，点击返回</Text>
    </TouchableOpacity>
  }
}

const styles = StyleSheet.create({
  contanier: container.toJS(),
  btn: longConfirmBtn.toJS(),
  btnDisable: Object.assign(longConfirmBtn.toJS(), {
    backgroundColor: gray,
  }),
  btnText: {
    color: 'white'
  }
});